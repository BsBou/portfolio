import "@testing-library/jest-dom/vitest";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { headerContent } from "../../data/content";

describe("Header Component", () => {
  it("renders header with the correct name and title", () => {
    render(<Header />);

    const headerName = screen.getByRole("heading", { level: 1 });
    const headerTitle = screen.getByRole("heading", { level: 2 });

    expect(headerName).toHaveTextContent(headerContent.name);
    expect(headerTitle).toHaveTextContent(headerContent.title);
  });
});
