var userScore = 0;
var compScore = 0;
var compchoice;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score");
const again=document.querySelector(".again")

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        compchoicenum(userchoice);
    });
});

const compchoicenum=(userchoice)=>{
    // console.log("choice was clicked ",userchoice);
    const options=["rock","paper","scissor"];
    compgennum=Math.floor(Math.random() *3);
    // console.log(compgennum);
    comp(userchoice,compgennum)
}

const comp=(userchoice,compgennum)=>{
    if(compgennum===0)
        {
             compchoice="rock";
        }
    else if(compgennum===1)
        {
             compchoice="paper";
        }
    else if(compgennum===2)
        {
             compchoice="scissor";
        }
    console.log("your choice is ",userchoice," computer choice is ",compchoice);
    result(userchoice,compchoice);
}
    
const result=(userchoice,compchoice) =>{
    
    if((userchoice==="rock" && compchoice==="paper") || (userchoice==="paper" && compchoice==="scissor") || (userchoice==="scissor" && compchoice==="rock"))
        {
            console.log(`Computer choosen ${compchoice} You lost the match`);
            msg.innerText = `Computer choosen ${compchoice},You lost the match`;
            msg.style.backgroundColor = "red";
            compScore+=1;
            comp_score.innerText = compScore
        }
    else if((userchoice==="paper" && compchoice==="rock") || (userchoice==="rock" && compchoice==="scissor") || (userchoice==="scissor" && compchoice==="paper"))
        {
            console.log(`Computer choosen ${compchoice} You won the match`);
            msg.innerText = `Computer choosen ${compchoice},You won the match`;
            msg.style.backgroundColor = "green";
            userScore+=1;
            user_score.innerText = userScore
        }
    else if(userchoice===compchoice)
        {
            console.log("Match draw");
            msg.innerText = "Match draw play again";
            msg.style.backgroundColor = "#081b31";
        }
}


again.addEventListener(("click"),()=>{
    userScore=0;
    compScore=0;
    user_score.innerText = 0;
    comp_score.innerText = 0;
    msg.innerHTML="Play your move";
    console.log("play again");
});
