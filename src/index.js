import {createTitle} from "../src/componens/title.js"
import { createNumberButton } from "./componens/numberButton";
import "../src/global.css";
import { createButton } from "./componens/button";


const title = createTitle();
for (let i=0; i<10; i++){
    const numberButton = createNumberButton(i);
    document.body.append(numberButton);
  }
const button = createButton();

document.body.append(title);
document.body.append(button);
