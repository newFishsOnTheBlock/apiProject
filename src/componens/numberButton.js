import { createElement } from "../utils/elements";
import "../../src/global.css";
import { numbersApi } from "../api/numbersApi";
let url = "http://numbersapi.com/";
function updateURL(newValue) {
  url += newValue;
}
let numberDefined = false;

export function createNumberButton(number) {
  const numberButton = createElement("button", {
    className: "btn-" + number,
    innerHTML: number,
  });
  numberButton.addEventListener("click", () => {
    updateURL(numberButton.innerHTML);
    numberDefined = true;
    console.log(url);
  });
  return numberButton;
}

export function resetURL() {
  url = "http://numbersapi.com/";
  numberDefined = false;
}
export async function getAnswer() {
  let answer = "Please enter a number";
  if (numberDefined) {
    answer = await numbersApi(url);

    return answer;
  }
  else{
      return answer;
  }
}
