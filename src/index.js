import { createFact } from "./componens/fact.js";
import {
  createNumberButton,
  getAnswer,
  resetURL,
} from "./componens/numberButton";
import "../src/global.css";
import { createButton } from "./componens/button";
import { createElement } from "./utils/elements.js";
import { createDiv } from "./componens/createDiv.js";

const outerDiv = createDiv("outerDiv");
const innerDiv = createDiv("innerDiv");
const answerDiv = createDiv("answerDiv");

const title = createElement("h1", {
  innerHTML: "Funny facts about numbers",
  className: "title",
});
let answer = "Choose a number!";

const button = createButton();
button.addEventListener("click", async () => {
  const api = await getAnswer();
  answer = await createFact(api);
  answerDiv.append(answer);
  resetURL();
});
outerDiv.append(title);
for (let i = 0; i < 10; i++) {
  const numberButton = createNumberButton(i);
  innerDiv.append(numberButton);
}

outerDiv.append(innerDiv);
outerDiv.append(button);
outerDiv.append(answerDiv);

document.body.append(outerDiv);
