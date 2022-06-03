import { gameOverModal, emptyCells, timerId, timer, time } from "./board";
import { solutionBoard9, solutionBoard4 } from "./initialBoard";
import { options } from "./board"


let modalTitle = document.querySelector(".modal-title")
let modalBody = document.querySelector(".modal-body")

let solutionBoard = options.gameLevel == 1 ? solutionBoard4 : solutionBoard9;

let initailCell = document.querySelector(".board").firstElementChild.firstElementChild
initailCell.classList.add("active-cell")


let currentCell = initailCell


// moving
window.addEventListener("keydown", e => {
    switch (e.code) {
        case "ArrowUp":
            currentCell.classList.remove("active-cell")

            currentCell = document.querySelector(
                `[data-i="${+currentCell.dataset.i - 1}"][data-j="${currentCell.dataset.j}"]`) || currentCell
            currentCell.classList.add("active-cell")

            break;
        case "ArrowDown":
            currentCell.classList.remove("active-cell")

            currentCell = document.querySelector(
                `[data-i="${+currentCell.dataset.i + 1}"][data-j="${currentCell.dataset.j}"]`) || currentCell
            currentCell.classList.add("active-cell")
            break;
        case "ArrowLeft":
            currentCell.classList.remove("active-cell")

            currentCell = document.querySelector(
                `[data-i="${currentCell.dataset.i}"][data-j="${+currentCell.dataset.j - 1}"]`) || currentCell
            currentCell.classList.add("active-cell")
            break;
        case "ArrowRight":
            currentCell.classList.remove("active-cell")

            currentCell = document.querySelector(
                `[data-i="${currentCell.dataset.i}"][data-j="${+currentCell.dataset.j + 1}"]`) || currentCell
            currentCell.classList.add("active-cell")
            break;

        default:
            break;
    }

});

// selecting


let wrongAnswers = 0;
let correctAnswers = 0;

window.addEventListener("keydown", e => {

    if (+currentCell.dataset.initial || !e.code.includes("Digit")) return

    // num => number entered by the user

    let num = +e.code.slice(-1)
    currentCell.firstElementChild.src = currentCell.firstElementChild.src.slice(0, -5) + num + ".jpg"

    let y = currentCell.dataset.j - 1;
    let x = currentCell.dataset.i - 1;

    if (solutionBoard[x][y] !== num) {
        console.log("Wrong!")
        if (currentCell.classList.contains("right")) currentCell.classList.remove("right")
        currentCell.classList.add("wrong")
        ++wrongAnswers
        document.querySelector("#wrong-answers").innerHTML = wrongAnswers

        if (wrongAnswers > 2) {
            clearInterval(timerId)

            console.log("Gameover")
            gameOverModal.show()
            return
        }
    } else {
        if (currentCell.classList.contains("right")) return
        ++correctAnswers
        currentCell.classList.add("right")
        console.log("Correct", `${correctAnswers} of ${emptyCells}`)
        if (correctAnswers >= emptyCells) {
            modalTitle.innerHTML = `Congratulations you win 👏🏻👏🏻👏🏻`
            modalBody.innerHTML = `You finished level ${options.gameLevel} in ${time - timer - 1} seconds`
            clearInterval(timerId)
            gameOverModal.show()
            return
        }
    }

})