var playerScore = 0;
var computerScore = 0;
var drawCount = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const drawCount_span = document.getElementById("draw-count");

const scissors_div = document.getElementById("scissors");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const reset_div = document.getElementById("reset");

const result_p = document.querySelector(".result > p");

// chúng ta tạo ra một cái sự lụa chọn kết quả ngẩu nhiên cho máy
function getComputerChoice() {
    const choices = ['scissors', 'rock', 'paper'];
    const randomNumber = Math.floor(Math.random() * 3); // 0, 1, 2
    return choices[randomNumber];
}

function win(computerChoice, playerChoice) {
    playerScore ++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Bạn chọn ${convertToWord(playerChoice)}, Máy chọn ${convertToWord(computerChoice)}. Bạn Thắng!`;
}

function lose(playerChoice, computerChoice) {
    computerScore ++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Máy chọn ${convertToWord(computerChoice)}, Bạn chọn ${convertToWord(playerChoice)}. Máy Thắng!`;
}

function convertToWord(choice) {
    if (choice==='scissors') return "Kéo";
    if (choice==='rock') return "Đá";
    if (choice==='paper') {
        return "Giấy";
    }
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(computerChoice, playerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, computerChoice);
            break;
        default:
            draw(playerChoice, computerChoice);
            break;
    }
}

function draw(playerChoice, computerChoice) {
    result_p.innerHTML = `Bạn Chọn ${convertToWord(playerChoice)}, Máy chọn ${convertToWord(computerChoice)}. Hoà!`;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    drawCount++;
    drawCount_span.innerHTML = drawCount;
}

scissors_div.addEventListener('click', function(){
    game('scissors');
})

rock_div.addEventListener('click', function(){
    game('rock');
})

paper_div.addEventListener('click', function(){
    game('paper');
})

reset_div.addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;

    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    drawCount_span.innerHTML = drawCount;

    result_p.innerHTML = "Lượt bạn chọn.";
})

