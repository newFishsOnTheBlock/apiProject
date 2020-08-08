import { createButton } from "../componens/button";
import { getAnswer2, resetUrl } from "./newNumberButton";
import { createTitle } from "../componens/title";
import { createElement } from "../utils/elements";


export function createAnswerBtn(){
    let answer = "Choose a number";
    const btn = createElement("button", {innerHTML: "Get request"});
    btn.addEventListener("click", async () => {
        const getRequest = await getAnswer2();
        answer = await createTitle(getRequest);
        document.body.append(answer);
        resetUrl();
    });
    return btn;
};