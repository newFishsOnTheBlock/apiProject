// import { getAnswer2 } from "./newGetAnswer";
import { createTitle } from "../componens/title";
// import { resetUrl } from "./newResetURL";
// import { createElement } from "../utils/elements";
import { resetURL, getAnswer } from "../componens/numberButton";
import { createButton } from "../componens/button";

export function createAnswerBtn(){
    const btn = createButton();
    btn.addEventListener("click", async () =>{
        const api = await getAnswer();
        answer = await createTitle(api);
        document.body.append(answer);
        resetURL();
    });
    return btn;
}