import "./global.css";
<<<<<<< HEAD
import {createTitle} from "../src/componens/title.js"
import { createNumberButton } from "./componens/numberButton";
import "../src/global.css";

const title = createTitle();
for (let i=0; i<10; i++){
    const numberButton = createNumberButton(i);
    document.body.append(numberButton);
  }
=======
import { createTitle } from "../src/componens/title.js";
import { createButton } from "./componens/button";

const title = createTitle();
const button = createButton();
>>>>>>> master

document.body.append(title);
document.body.append(button);
