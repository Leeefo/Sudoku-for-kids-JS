import { initialBoard9, initialBoard4 } from "./initialBoard";

const currentLocation = document.location.href

const searchParams = new URLSearchParams(location.search);
let board = document.querySelector(".board")
let playAgainBtn = document.querySelector("#play-again")
let startBtn = document.querySelector("#startBtn")
playAgainBtn.href = currentLocation
let imgsContainer = document.querySelector(".imgs-container")
let numsContainer = document.querySelector(".nums-container")
export let gameOverModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));


let options = {}
for (const [key, value] of searchParams.entries()) {
    options[key] = value;
}
export { options };

document.querySelector("#userName").innerHTML = "Welcome " + options.userName
board.classList.add("row-cols-9")

export const time = options.gameLevel == 1 ? 60 : 120;
const initialBoard = options.gameLevel == 1 ? initialBoard4 : initialBoard9

export let timer = time;

export let timerId

// Start Button
startBtn.addEventListener("click", (e) => {
    board.classList.remove("d-none")
    timerId = setInterval(() => {

        if (timer <= 0) {
            clearInterval(timerId)

            gameOverModal.show()
        }
        let timeString = ``;
        document.querySelector("#time").innerHTML = timer--;
    }, 1000)
    startBtn.classList.add("d-none")
})

const n = options.gameLevel == 1 ? 4 : 9;
const imgs = []
for (let i = 1; i < n + 1; i++) {
    let img = document.createElement("img")
    let num = document.createElement("div")
    num.innerHTML = i
    img.src = `images/${options.imgs}/${i}.jpg`
    img.style.height = "50px";

    num.classList.add("num-style")
    img.classList.add("img-style")
    imgsContainer.appendChild(img)
    numsContainer.appendChild(num)
    imgs.push(img)
}


// Rendering the board

let emptyCells = 0;

for (let i = 0; i < initialBoard.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row", "g-0")
    for (let j = 0; j < initialBoard[i].length; j++) {
        let cell = initialBoard[i][j]
        let div = document.createElement("div");
        div.dataset.i = i + 1
        div.dataset.j = j + 1
        div.classList.add("col", "text-center")
        div.classList.add("cell")
        let img = document.createElement("img")
        img.src = `images/${options.imgs}/${cell}.jpg`
        if (!cell) {
            div.dataset.initial = "0"
            emptyCells++
        } else {
            div.dataset.initial = "1"
        }
        img.classList.add("img-style")
        img.style.height = options.gameLevel == 1 ? "100px" : "40px";
        div.appendChild(img)
        row.appendChild(div)
    }
    board.appendChild(row)
}

export { emptyCells }

