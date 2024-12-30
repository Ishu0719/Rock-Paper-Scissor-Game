let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random()* 3);
    return options [randIdx];
};

const drawGame = () => {
    msg.innerText= 'Game was draw , Play again';
    msg.style.backgroundColor='#081b31';
};

const showWinner = (userWin) => {
    if( userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText ="congratulations You Win! ";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText="you lose.";
         msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
          drawGame();
    }else{
        let userWin = true ;
        if( userChoice === "rock"){
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice==="paper"){
            userWin = compChoice === " scisoors"? false:true;
        }else{
            userWin = compChoice === "rock "? false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener(("click") , () =>{
        const userChoice = choice.getAttribute("id");
        playGame( userChoice);
    });
});