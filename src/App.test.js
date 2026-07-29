import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    HTMLCanvasElement.prototype.getContext = () => canvasContext;
});

test("renders the portfolio identity once with the correct location", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Radhakishan Jangid" })).toBeInTheDocument();
    expect(screen.getAllByText(/Mumbai, India/i)).toHaveLength(1);
});

test("opens a selected project from its interactive card", () => {
    render(<App />);

    const transformo = screen.getByRole("button", { name: /Transformo/i });
    fireEvent.click(transformo);

    expect(transformo).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(transformo);
    expect(transformo).toHaveAttribute("aria-expanded", "false");
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

test("supports every stateful homepage control", () => {
    render(<App />);

    const capabilityBoard = screen.getByRole("button", { name: /Current capability: REACT \+ NEXT\.JS/i });
    fireEvent.click(capabilityBoard);
    expect(screen.getByRole("button", { name: /Current capability: NODE \+ PRODUCT APIS/i })).toBeInTheDocument();

    const motionTab = screen.getByRole("tab", { name: "motion.scss" });
    fireEvent.click(motionTab);
    expect(motionTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getAllByText("opacity: 1;")).toHaveLength(2);

    const nextOutcome = screen.getByRole("button", { name: "Next project outcome" });
    fireEvent.click(nextOutcome);
    expect(screen.getByRole("heading", { name: "YOURVAY" })).toBeInTheDocument();

    const previousOutcome = screen.getByRole("button", { name: "Previous project outcome" });
    fireEvent.click(previousOutcome);
    expect(screen.getByRole("heading", { name: "InfoLive" })).toBeInTheDocument();
});

test("uses unique canonical destinations for each article", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /Free AI coding tools/i })).toHaveAttribute(
        "href",
        "https://radhakishan404.is-a.dev/articles/free-ai-coding-tools-zero-rupees"
    );
    expect(screen.getByRole("link", { name: /100 Claude Code prompts/i })).toHaveAttribute(
        "href",
        "https://radhakishan404.is-a.dev/articles/100-claude-code-prompts"
    );
    expect(screen.getByRole("link", { name: /From repo to reader/i })).toHaveAttribute(
        "href",
        "https://radhakishan404.is-a.dev/articles/from-repo-to-reader"
    );
});

test("submits the contact form and exposes a useful status", async () => {
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
