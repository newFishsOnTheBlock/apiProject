import { createElement } from "../utils/elements"

export function createNumbersButtons() {
    let url2 = "http://numbersapi.com/";
    function updatesURL(newValue) {
    url2 += newValue;
    }
    
    let numberDefined = false;

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
    return numberButton
};

export function resetUrl() {
    url = "http://numbersapi.com/";
    numberDefined = false;
  }
  export async function getAnswer2() {
    let answer = "Please enter a number";
    if (numberDefined) {
      answer = await numbersApi(url);
  
      return answer;
    }
    else{
        return answer;
    }
  }
  