import "./global.css";
import {createTitle} from "../src/componens/title.js"
import { createNumberButton } from "./componens/numberButton";
import "../src/global.css";

const title = createTitle();
for (let i=0; i<10; i++){
    const numberButton = createNumberButton(i);
    document.body.append(numberButton);
  }

document.body.append(title);
