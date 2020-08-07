import "./global.css";
import { createTitle } from "../src/componens/title.js";
import { createButton } from "./componens/button";

const title = createTitle();
const button = createButton();

document.body.append(title);
document.body.append(button);
