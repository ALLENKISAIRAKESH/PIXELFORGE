import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ForgeTerminal } from "@/components/portfolio/ForgeTerminal";

describe("ForgeTerminal component", () => {
  it("renders welcome message and input field", () => {
    render(<ForgeTerminal />);
    expect(screen.getByText(/PIXELFORGE terminal v1.0/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/type a command/i)).toBeInTheDocument();
  });

  it("handles help command", () => {
    render(<ForgeTerminal />);
    const input = screen.getByPlaceholderText(/type a command/i);

    fireEvent.change(input, { target: { value: "help" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText(/Available commands:/i)).toBeInTheDocument();
  });

  it("handles unknown command with helpful error message", () => {
    render(<ForgeTerminal />);
    const input = screen.getByPlaceholderText(/type a command/i);

    fireEvent.change(input, { target: { value: "foobar" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText(/Command not found: "foobar"/i)).toBeInTheDocument();
  });

  it("handles theme command", () => {
    render(<ForgeTerminal />);
    const input = screen.getByPlaceholderText(/type a command/i);

    fireEvent.change(input, { target: { value: "theme" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText(/PIXELFORGE Design Tokens:/i)).toBeInTheDocument();
  });

  it("handles date command", () => {
    render(<ForgeTerminal />);
    const input = screen.getByPlaceholderText(/type a command/i);

    fireEvent.change(input, { target: { value: "date" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText(/System Time:/i)).toBeInTheDocument();
  });

  it("handles clear command and displays cleared state", () => {
    render(<ForgeTerminal />);
    const input = screen.getByPlaceholderText(/type a command/i);

    fireEvent.change(input, { target: { value: "clear" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText(/Terminal cleared/i)).toBeInTheDocument();
  });
});
