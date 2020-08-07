import { createElement } from "../utils/elements";

export function createButton() {
  const button = createElement("button", { innerText: "API" });

  return button;
}
