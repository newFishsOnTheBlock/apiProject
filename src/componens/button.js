import { createElement } from "../utils/elements";
export function createButton() {
  const button = createElement("button", {
    innerHTML: "Get Number Fact!",
    className: "btn",
  });
  return button;
}
