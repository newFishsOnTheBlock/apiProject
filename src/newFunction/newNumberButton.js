import { createElement } from "../utils/elements"

export async function createNumbersButtons() {
    let url2 = "http://numbersapi.com/";
    function updatesURL(newValue) {
    url2 += newValue;
    }
    
    let numberDefined = false;

    for (let number=0; number<10; number++) {
        const numbersButton = await createElement("button", {
            className: "btn_numbers",
            innerHTML: number,
        });
        await numbersButton.addEventListener("click", () => {
            updatesURL(numbersButton.innerHTML);
            numberDefined = true;
            console.log(url2);
        });
        document.body.append(numbersButton);
    }
    return numberButton
};