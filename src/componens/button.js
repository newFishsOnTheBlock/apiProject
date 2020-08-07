import { createElement } from "../utils/elements";
import { numbersApi } from "../api/numbersApi";

export function createButton() {
  const button = createElement("button", { innerHTML: "API" });
  button.addEventListener("click", async () => {
    const api = await numbersApi();
    console.log(api);
  });

  return button;
}
