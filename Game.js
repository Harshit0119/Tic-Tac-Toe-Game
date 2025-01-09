document.addEventListener('DOMContentLoaded', () => {
    const boxes = Array.from(document.querySelectorAll('.box'));
    const popup = document.querySelector('.popup');
    const popupMsg = document.getElementById('popup-msg');
    const closeButton = document.getElementById('close-btn');
    const overlay = document.querySelector('.overlay');
    const resetButton = document.getElementById('reset-Game');
    const newButton = document.getElementById('new-btn');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => handleClick(box, index));
    });

    closeButton.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
    resetButton.addEventListener('click', resetGame);
    newButton.addEventListener('click', startNewGame);

    function handleClick(box, index) {
        if (board[index] === '' && !popup.classList.contains('show')) {
            board[index] = currentPlayer;
            box.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                displayPopup(`${currentPlayer} WINS!`);
            } else if (checkTie()) {
                displayPopup('It\'s a TIE!');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]            // diagonals
        ];
        return winPatterns.some(pattern => 
            pattern.every(index => board[index] === player)
        );
    }

    function checkTie() {
        return board.every(cell => cell !== '');
    }

    function displayPopup(message) {
        popupMsg.textContent = message;
        popup.classList.add('show');
        overlay.classList.add('show');
        disableGameButtons();
    }

    function disableGameButtons() {
        boxes.forEach(box => box.disabled = true);
    }

    function closePopup() {
        popup.classList.remove('show');
        overlay.classList.remove('show');
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        boxes.forEach(box => {
            box.textContent = '';
            box.disabled = false;
        });
        currentPlayer = 'X';
        closePopup();
    }

    function startNewGame() {
        resetGame();
        // Additional logic for starting a new game can be added here if needed
    }
});




                      //By own 

// let boxes= document.querySelectorAll(".box");
// let resetBtn=document.querySelector("#reset-Game");
// let newGameBtn=document.querySelector("#new-btn");
// let msgContainer=document.querySelector(".msg-container");
// let msg =document.querySelector("#msg");

// let turnO=true;      //playerX, playerO

// const winPatterns=[ [0,1,2],
//                     [3,4,5],
//                     [6,7,8],
//                     [0,3,6],
//                     [1,4,7],
//                     [2,5,8],
//                     [0,4,8],
//                     [2,4,6]  ];

// const resetGame = () => {
//     turnO= true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// }                    
                    
// boxes.forEach((box)=> {
//     box.addEventListener("click", () =>{
//  // console.log("box was clicked");
//         if(turnO){                   
//             box.innerText="O";
//             turnO=false;
//         }else{
//          box.innerText="X";
//          turnO=true;
//         }
//         box.disabled=true;

//         checkWinner();
//     }); 
// });

// const disableBoxes = () => {
//     for (let box of boxes){
//         box.disabled = true;
//     }
// }

// const enableBoxes = () => {
//     for (let box of boxes){
//         box.disabled = false;
//         box.innerText= "";
//     }
// }

// const showWinner= (winner)=>{
//     msg.innerText=`congratualations, winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }

// const checkWinner=()=>{
//      for (let pattern of winPatterns) {
//     let pos1Val=boxes[pattern[0]].innerText;
//     let pos2Val=boxes[pattern[1]].innerText;
//     let pos3Val=boxes[pattern[2]].innerText;

//     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//         if(pos1Val === pos2Val && pos2Val === pos3Val){
//         if()
//             // console.log("winner",pos1Val);
//             showWinner(pos1Val);
//         }
//     }
// }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);
