import { createElement } from "../utils/elements";

export function createBtn(name){
    const button = createElement("button", {
        innerHTML: name
    });
    return button;
};