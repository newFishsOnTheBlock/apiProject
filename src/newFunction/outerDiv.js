import { createElement } from "../utils/elements";


export function createOuterDiv(){
    const div = createElement("div", {className: "outerDiv"});
    document.body.append(div);
    return div;
};