import { createFact } from "./componens/fact.js";
import {
  createNumberButton,
  getAnswer,
  resetURL,
} from "./componens/numberButton";
import "../src/global.css";
import { createButton } from "./componens/button";
import { createElement } from "./utils/elements.js";

const title = createElement("h1", {
  innerHTML: "Funny facts about numbers",
  className: "title",
});
let answer = "Choose a number!";

const button = createButton();
button.addEventListener("click", async () => {
  const api = await getAnswer();
  answer = await createFact(api);
  document.body.append(answer);
  resetURL();
});
document.body.append(title);
for (let i = 0; i < 10; i++) {
  const numberButton = createNumberButton(i);
  document.body.append(numberButton);
}
document.body.append(button);
