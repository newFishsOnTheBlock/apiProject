import { createElement } from "../utils/elements";
let url = "http://numbersapi.com/";
function updateURL(newValue) {
    url += newValue;
}

export function createNumberButton(number) {
    const numberButton = createElement("button", {
        className: "numberButton",
        innerHTML: number,
    });
    numberButton.addEventListener("click", () => {
        updateURL(numberButton.innerHTML);
        console.log(getcurrentURL());
  });
  return numberButton;
}

export function getcurrentURL(){
    return url;
}