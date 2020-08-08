import {createTitle} from "../src/componens/title.js"
import { createNumberButton, getAnswer, resetURL } from "./componens/numberButton";
import "../src/global.css";
import { createButton } from "./componens/button";
import { createNumbersButtons} from "./newFunction/newNumberButton.js";
import { createAnswerBtn } from "./newFunction/newAnswerButton.js";
import { createElement } from "./utils/elements.js";
import { createOuterDiv } from "./newFunction/outerDiv.js";

let answer = "Choose a number!"

const outerDiv = createOuterDiv();
const button = createButton();
button.addEventListener("click", async () =>{
  const api = await getAnswer();
  answer = await createTitle(api);
  document.body.append(answer);
  resetURL();
  
})

for (let i=0; i<10; i++){
  const numberButton = createNumberButton(i);
  outerDiv.append(numberButton);
}

outerDiv.append(button);

const btnNUmbers = createNumbersButtons();

const getRequestBtn = createElement("p", {innerHTML: "Test"});


document.body.append(getRequestBtn);
document.body.append(outerDiv);




