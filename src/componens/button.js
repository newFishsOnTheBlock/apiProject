import { createElement } from "../utils/elements";
import { getAnswer, resetURL } from "./numberButton";

export function createButton() {
  const button = createElement("button", { innerHTML: "API" });
  button.addEventListener("click", async () => {
    const api = await getAnswer();
    console.log(api);
    resetURL();
  });

  return button;
}
