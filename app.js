function tossCoin (){
    let para = document.getElementById("result");
    let tossResult = Math.random < 0.6 ? "Heads" : "Tails";
    para.textContent = "Result :" + tossResult;
}