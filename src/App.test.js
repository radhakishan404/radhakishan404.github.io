import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import emailjs from "emailjs-com";
import App from "./App";

jest.mock("lenis", () => function MockLenis() {
    this.destroy = jest.fn();
});

jest.mock("react-ga", () => ({
    initialize: jest.fn(),
    pageview: jest.fn()
}));

jest.mock("emailjs-com", () => ({
    sendForm: jest.fn(() => Promise.resolve())
}));

const noOp = () => {};
const gradient = { addColorStop: noOp };
const canvasContext = {
    arc: noOp,
    beginPath: noOp,
    bezierCurveTo: noOp,
    clearRect: noOp,
    createLinearGradient: () => gradient,
    createRadialGradient: () => gradient,
    drawImage: noOp,
    fillRect: noOp,
    fillText: noOp,
    getImageData: () => ({ data: new Uint8ClampedArray(4) }),
    lineTo: noOp,
    moveTo: noOp,
    restore: noOp,
    save: noOp,
    setTransform: noOp,
    stroke: noOp
};

beforeAll(() => {
    window.matchMedia = () => ({
        matches: true,
        addEventListener: noOp,
        removeEventListener: noOp
    });
    window.scrollTo = jest.fn();
    HTMLCanvasElement.prototype.getContext = () => canvasContext;
});

beforeEach(() => {
    window.history.pushState({}, "", "/");
    window.scrollTo.mockClear();
    emailjs.sendForm.mockClear();
});

test("renders the portfolio identity once with the correct location", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Radhakishan Jangid" })).toBeInTheDocument();
    expect(screen.getAllByText(/Mumbai, India/i)).toHaveLength(1);
});

test("opens and closes a selected project", () => {
    render(<App />);

    const transformo = screen.getByRole("button", { name: /Transformo/i });
    fireEvent.click(transformo);
    expect(transformo).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(transformo);
    expect(transformo).toHaveAttribute("aria-expanded", "false");
});

test("renders useful principles and a complete laptop keyboard", () => {
    const { container } = render(<App />);

    expect(container.querySelector(".home-v3 > canvas.home-scene")).toBeInTheDocument();
    expect(container.querySelector(".home-hero canvas.home-scene")).not.toBeInTheDocument();
    expect(screen.getByText("Make it work. Make it clear. Then make it fast.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Understand the job" })).toBeInTheDocument();
    expect(container.querySelectorAll(".macbook__key-row")).toHaveLength(6);
    expect(container.querySelectorAll(".macbook__key")).toHaveLength(74);
    expect(container.querySelectorAll(".macbook__speaker")).toHaveLength(2);
    expect(container.querySelector(".macbook__arrow-cluster")).toBeInTheDocument();
    expect(container.querySelector(".ascii-portrait__source"))
        .toHaveAttribute("src", "/images/radhakishan-web-2.jpg");
    expect(screen.queryByRole("tablist", { name: "Code examples" })).not.toBeInTheDocument();
});

test("keeps the pointer field on inner portfolio pages", () => {
    window.history.pushState({}, "", "/portfolio");
    const { container } = render(<App />);

    expect(container.querySelector("canvas.page-pointer-field")).toBeInTheDocument();
    expect(container.querySelector(".site-page")).toHaveClass("portfolio-page");
});

test("keeps both navigation controls operable and truthful", () => {
    render(<App />);

    const sidebarToggle = screen.getByRole("button", { name: "Toggle main navigation" });
    fireEvent.click(sidebarToggle);
    expect(sidebarToggle).toHaveAttribute("aria-expanded", "true");
    expect(document.body).toHaveClass("nav--open");
    fireEvent.click(sidebarToggle);
    expect(sidebarToggle).toHaveAttribute("aria-expanded", "false");

    const mobileToggle = screen.getByRole("button", { name: "Toggle mobile navigation" });
    fireEvent.click(mobileToggle);
    expect(mobileToggle).toHaveAttribute("aria-expanded", "true");
    expect(document.body).toHaveClass("menu-is-active");
    fireEvent.click(mobileToggle);
    expect(mobileToggle).toHaveAttribute("aria-expanded", "false");
});

test("opens every sidebar page at the top with visible content", () => {
    render(<App />);

    let navigation = within(screen.getByRole("navigation", { name: "Main" }));
    fireEvent.click(navigation.getByRole("link", { name: /About Professional skills/i }));
    expect(screen.getByRole("heading", { name: /I started with PHP.*never stopped learning/i })).toBeInTheDocument();

    navigation = within(screen.getByRole("navigation", { name: "Main" }));
    fireEvent.click(navigation.getByRole("link", { name: /Portfolio Some of the projects/i }));
    expect(screen.getByRole("heading", { name: "Products, systems, and useful experiments." })).toBeInTheDocument();

    navigation = within(screen.getByRole("navigation", { name: "Main" }));
    fireEvent.click(navigation.getByRole("link", { name: /Articles Guides, prompts/i }));
    expect(screen.getByRole("heading", { name: "Guides you can use, not just bookmark." })).toBeInTheDocument();

    navigation = within(screen.getByRole("navigation", { name: "Main" }));
    fireEvent.click(navigation.getByRole("link", { name: /Say Hello Get in touch/i }));
    expect(screen.getByRole("heading", { name: "Tell me what needs to work better." })).toBeInTheDocument();

    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 0, left: 0, behavior: "auto" });
});

test("switches the playful current-work and about modes", () => {
    const { unmount } = render(<App />);

    fireEvent.click(screen.getByRole("tab", { name: /04 Write/i }));
    expect(screen.getByRole("heading", { name: "Useful notes" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Browse the articles/i })).toHaveAttribute("href", "/articles");

    unmount();
    window.history.pushState({}, "", "/about");
    render(<App />);

    expect(screen.getByRole("img", { name: /Radhakishan Jangid sitting at his workspace/i }))
        .toHaveAttribute("src", "/images/radhakishan-web-3.jpg");
    const innovinsBranch = screen.getByRole("button", { name: /2019.*2020.*PHP Web Developer.*Innovins/i });
    expect(innovinsBranch).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(innovinsBranch);
    expect(innovinsBranch).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Built APIs and new features across business portals/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: /02 Fix/i }));
    expect(screen.getByRole("heading", { name: "Give me the strange bug." })).toBeInTheDocument();
});

test("filters the portfolio and article collection", () => {
    window.history.pushState({}, "", "/portfolio");
    const { unmount } = render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Open source" }));
    expect(screen.getByRole("heading", { name: "Transformo" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Linepop" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "InfoLive" })).not.toBeInTheDocument();

    unmount();
    window.history.pushState({}, "", "/articles");
    render(<App />);

    expect(screen.getAllByText("26")).toHaveLength(2);
    expect(screen.getByText("Featured guide")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Browse all writing" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI Content Prompterrr" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Odysseus complete setup guide" })).toBeInTheDocument();

    const publishedArticleLinks = screen.getAllByRole("link")
        .filter((link) => link.href.startsWith("https://radhakishan404.is-a.dev/articles/"));
    expect(publishedArticleLinks).toHaveLength(26);
    expect(new Set(publishedArticleLinks.map((link) => link.href)).size).toBe(26);
    expect(publishedArticleLinks.every((link) => link.href.endsWith("/"))).toBe(true);

    fireEvent.change(screen.getByLabelText("Search the archive"), { target: { value: "zero rupees" } });
    expect(screen.getByRole("heading", { name: "10 AI coding tools you can start for zero rupees" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Claude Fable 5 master guide" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    fireEvent.click(screen.getByRole("button", { name: "Learning and career" }));
    expect(screen.getByRole("heading", { name: "Free courses, real skills, zero rupees" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Sakana Fugu: full breakdown" })).not.toBeInTheDocument();
});

test("opens an earlier project in the updated detail layout", () => {
    window.history.pushState({}, "", "/portfolio/nirulas");
    render(<App />);

    expect(screen.getByRole("heading", { name: "Nirulas" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Technology" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to portfolio" })).toHaveAttribute("href", "/portfolio");
});

test("opens a current project as an evidence-based case study", () => {
    window.history.pushState({}, "", "/portfolio/transformo");
    render(<App />);

    expect(screen.getByRole("heading", { name: "Transformo" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How the product moves." })).toBeInTheDocument();
    expect(screen.getByText("Creator and maintainer")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View source" })).toHaveAttribute(
        "href",
        "https://github.com/radhakishan404/transformo"
    );
    expect(screen.getByRole("navigation", { name: "More case studies" })).toBeInTheDocument();
});

test("uses canonical destinations for recent writing", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /10 AI coding tools/i })).toHaveAttribute(
        "href",
        "https://radhakishan404.is-a.dev/articles/free-ai-coding-tools-zero-rupees/"
    );
    expect(screen.getByRole("link", { name: /Garry Tan's gstack/i })).toHaveAttribute(
        "href",
        "https://radhakishan404.is-a.dev/articles/garry-tan-gstack-claude-code-agents/"
    );
    expect(screen.getByRole("link", { name: /Claude Fable 5 master guide/i })).toHaveAttribute(
        "href",
        "https://radhakishan404.is-a.dev/articles/claude-fable-5-master-guide/"
    );
});

test("submits the home contact form and exposes a useful status", async () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Test Person" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("What are you building?"), {
        target: { value: "A portfolio interaction test." }
    });
    fireEvent.click(screen.getByRole("button", { name: /Send a message/i }));

    expect(screen.getByRole("button", { name: /Sending/i })).toBeDisabled();
    await waitFor(() => expect(emailjs.sendForm).toHaveBeenCalledTimes(1));
    expect(await screen.findByRole("status")).toHaveTextContent("Message sent. Thank you.");
});
