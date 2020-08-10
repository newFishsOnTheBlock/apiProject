import { createElement } from "../utils/elements.js";

export function createFact(fact) {
  const text = createElement("p", {
    innerHTML: fact,
    className: "fact"
  });
  return text;
}
