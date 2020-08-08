import { numbersApi } from "../api/numbersApi";

export async function getAnswer2(){
    let answer = "Please enter a number";
    if (numberDefined) {
        answer = await numbersApi(url2);
        return answer;
    }
    else{
        return answer;
    };
};