import { createElement } from "../utils/elements.js";

export function createTitle(title){
    const text = createElement("h1", {
        innerHTML: title
    });
    return text;
};
