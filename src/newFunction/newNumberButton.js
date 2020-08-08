import { createElement } from "../utils/elements"
import { createAnswerBtn } from "./newAnswerButton";
import { numbersApi } from "../api/numbersApi";

let numberDefined = false;
let url2 = "http://numbersapi.com/";

export function createNumbersButtons() {
    function updatesURL(newValue) {
    url2 += newValue;
    }
    
    

    for (let number=0; number<10; number++) {
        const numbersButton = createElement("button", {
            className: "btn_numbers",
            innerHTML: number,
        });
        numbersButton.addEventListener("click", () => {
            updatesURL(numbersButton.innerHTML);
            numberDefined = true;
            console.log(url2);
        });
        document.body.append(numbersButton);
    }

    const getRequestBtn = createAnswerBtn();
    document.body.append(getRequestBtn);
    return numberButton
};

export function resetUrl() {
    url2 = "http://numbersapi.com/";
    numberDefined = false;
  }
  export async function getAnswer2() {
    let answer = "Please enter a number";
    if (numberDefined) {
      answer = await numbersApi(url2);
  
      return answer;
    }
    else{
        return answer;
    }
  }
  