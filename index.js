let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newGame=document.querySelector("#new-btn");
let hidegame=document.querySelector(".mygame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let main=document.querySelector(".basic");
let t0=true;

const winpatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame=()=>{
    t0=true;
    enabledBoxes();
    msg.innerText="START THE GAME";
    hidegame.classList.add("hide");
    main.classList.remove("hide");
    msgContainer.classList.remove("score");


}

boxes.forEach((boxi)=>{
    boxi.addEventListener("click",()=>{
        console.log("box was click");
        if(t0){
            boxi.innerHTML='X';
            t0=!t0
        }else{
            boxi.innerHTML='O';
            t0=!t0;
        }
        boxi.disabled=true;
        checkWinner();
    });

});
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }}

const disabledBoxe=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`The Winner is ${winner}`;
    hidegame.classList.remove("hide");
    main.classList.add("hide");
    msgContainer.classList.add("score");

    disabledBoxe();



}

const checkWinner =()=>{
    for(let pattern of winpatterns){
        
        let val1=boxes[pattern[0]].innerHTML;
        let val2=boxes[pattern[1]].innerHTML;
        let val3=boxes[pattern[2]].innerHTML;
        if(val1 != "" &&val2 != "" &&val3 != "" ){
            if(val1==val2&& val2==val3){
                console.log(` the winner is ${val1}`);
                showWinner(val1);
            }
        }
       
    

    }

}
newGame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
