let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText = "Game was Draw..! & Play again";
    msg.style.backgroundColor = "#081b31";
    // msg.innerHTML("Vishal Nimbarte");
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win..! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else 
    {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose..! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genComputerChoice = () =>{//computer choice genrated
    const options = ["rock","paper","scissors"];//0,1,2 it is index number
    const randIdx = Math.floor(Math.random()*3);//they are return randomaly value 0,1,2
    return options[randIdx];
}

const playGame = (userChoice)=>{
    console.log("user choice - ",userChoice);//user choice print
    //Genrate Computer Choice
    const compChoice = genComputerChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice==compChoice)
    {
        drawGame();
    }
    else
    {
        //game rule ->
        //1.computer selected -> paper & user selected -> paper     => draw
        //2.computer selected -> paper & user selected -> rock      => comp win
        //3.computer selected -> paper & user selected -> scissors  => user win

        //4.computer selected -> rock & user selected -> paper      => user win
        //5.computer selected -> rock & user selected -> rock       => draw
        //6.computer selected -> rock & user selected -> scissors   => comp win
        
        //7.computer selected -> scissors & user selected -> paper  => comp win
        //8.computer selected -> scissors & user selected -> rock   => user win
        //9.computer selected -> scissors & user selected -> scissors => draw

        let userWin = true;

        if(userChoice=="rock")
        {
            // Computer Selected -> Rock
            // User Selected -> Paper, Scissors
            userWin = compChoice==="paper"?false:true;//
            //        rock===paper?false:true
            // userWin = true;
            //       rock===scissors?false:true
            // userWin = false;
        }
        else if(userChoice=="Paper")
        {
            // Computer Selected -> paper
            // User Selected -> rock, Scissors
            userWin = compChoice==="scissors"?false:true;
            //        paper
        }
        else 
        {
            // Computer Selected -> scissors
            // User Selected -> paper, rock
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was cliked - ",userChoice);
        playGame(userChoice);
    });
});