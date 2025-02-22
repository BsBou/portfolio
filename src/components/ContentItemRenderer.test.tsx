import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentItemRenderer, ContentItem } from "./ContentItemRenderer";

const createContentItem = (overrides?: Partial<ContentItem>): ContentItem => ({
  text: "Default Text",
  ...overrides,
});

describe("ContentItemRenderer", () => {
  it("renders plain text when no link is provided", () => {
    const item = createContentItem({ text: "Hello, world!" });
    render(<ContentItemRenderer item={item} />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it("renders text along with a link when a link is provided", () => {
    const item = createContentItem({
      text: "Visit our site,",
      link: {
        url: "https://example.com",
        label: "click here",
        target: "_blank",
      },
    });
    render(<ContentItemRenderer item={item} />);

    expect(screen.getByText(/Visit our site,/)).toBeInTheDocument();

    const linkElement = screen.getByRole("link", { name: /click here/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("defaults to _self target when none is provided", () => {
    const item = createContentItem({
      link: {
        url: "https://example.com",
        label: "default target",
      },
    });
    render(<ContentItemRenderer item={item} />);

    const linkElement = screen.getByRole("link", { name: /default target/i });
    expect(linkElement.getAttribute("target")).toBe("_self");
    expect(linkElement.getAttribute("rel")).toBe(null);
  });
});
