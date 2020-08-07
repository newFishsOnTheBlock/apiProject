import {createTitle} from "../src/componens/title.js"
import { createNumberButton, getAnswer, resetURL } from "./componens/numberButton";
import "../src/global.css";
import { createButton } from "./componens/button";

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
