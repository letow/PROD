import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("to be in doc", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle test", () => {
    renderWithTranslation(<Sidebar />);
    const toggle = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggle);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
