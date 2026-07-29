import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("lenis", () => function MockLenis() {
    this.destroy = jest.fn();
});

jest.mock("react-ga", () => ({
    initialize: jest.fn(),
    pageview: jest.fn()
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
});
