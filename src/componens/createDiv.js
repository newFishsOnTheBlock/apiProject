import { createElement } from "../utils/elements";

export function createDiv(name){
    const div = createElement("div", {className: name});
    return div;
}