import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("to be in doc", () => {
    const { getByTestId } = componentRender(<Sidebar />);
    expect(getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle test", () => {
    componentRender(<Sidebar />);
    const toggle = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggle);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
