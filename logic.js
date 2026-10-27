let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let Winner= document.querySelector(".winner");
let msg= document.querySelector(".msg-container");
let newGame=document.querySelector(".newGame");

let turn0=true;

let winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let resetGame=()=>{
    turn0=true;
     msg.classList.add("hide") ;
    enabledBoxes(); 
};

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if (turn0) {
        box.innerText="O";
        turn0=false;
    }else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
});
});
let enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};
let disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    };

};
let finalWinner=(winner)=>{
     msg.classList.remove("hide");
     Winner.innerText=`Congratulations ,winner is ${winner}  `;
     disabledBoxes();
};
let checkWinner=()=>{
for(let pattern of winningPattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val==pos2val && pos2val==pos3val) {
            finalWinner(pos1val);
        };
    };
};
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
