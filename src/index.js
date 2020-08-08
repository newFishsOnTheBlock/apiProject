import {createTitle} from "../src/componens/title.js"
import { createNumberButton, getAnswer, resetURL } from "./componens/numberButton";
import "../src/global.css";
import { createButton } from "./componens/button";
import { createNumbersButtons, getAnswer2, resetUrl } from "./newFunction/newNumberButton.js";

let answer = "Choose a number!"

const button = createButton();
button.addEventListener("click", async () =>{
  const api = await getAnswer();
  answer = await createTitle(api);
  document.body.append(answer);
  resetURL();
  
})

for (let i=0; i<10; i++){
  const numberButton = createNumberButton(i);
  document.body.append(numberButton);
}

document.body.append(button);

const btnNUmbers = createNumbersButtons();

const btn = createButton();
button.addEventListener("click", async () =>{
  const api = await getAnswer2();
  answer = await createTitle(api);
  document.body.append(answer);
  resetUrl();
})

document.body.append(btnNUmbers);
document.body.append(btn);

