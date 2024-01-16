let usescore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#computerscore");


const gencomputerchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawgame = () => {
    console.log("game was drawn");
    msg.innerText = "game was drawn.Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,) => {
    if(userwin) {
        usescore++;
        userscorepara.innerText = usescore;
        console.log("you win!");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
        
    } else {
        computerscore++;
        compscorepara.innerText = computerscore;
        console.log("you lose");
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    //generate computer choice
    const computerChoice = gencomputerchoice();
    console.log("computer choice=", computerChoice);

    if(userchoice === computerChoice){
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            //scissors,paper
            userwin = computerChoice === "paper" ? false:true;
        } else if(userchoice === "paper") {
            //rock,scissors
            userwin = computerChoice === "scissors" ? false:true;
        } else {
            userwin = computerChoice === "rock" ? false:true;
        }
        showwinner(userwin);
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})