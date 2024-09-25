let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    // console.log("Draw!");
    msg.innerText="Game was draw,Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win");
        msg.innerText=`You win,Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose");
        msg.innerText=`You lose,${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#dd0426";
    }
}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
}

const flash=(choice)=>{
    choice.classList.add("purple");
    setTimeout(function(){
        choice.classList.remove("purple");
    },500);
}


const changeCompColor=(compChoice)=>{
    for(let choice of choices){
        if((choice.getAttribute("id"))===compChoice){
            flash(choice);
            console.log("done")
        }
    }
}

//function for playing game
const playGame =(userChoice)=>{
    // console.log("userChoice = ",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    changeCompColor(compChoice)
    // console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true; //new variable to track user's win
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper" ?false:true;
        }
        else if(userChoice==="paper"){
            //rock, scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper 
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        // console.log("choice was clicked ",userChoice);
        playGame(userChoice);
    })
})