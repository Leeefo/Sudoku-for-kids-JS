

import { SudokuSolver } from '@jlguenego/sudoku-generator';
import { sudoku4List } from './sudoku4'

// let str = ".41.......3...9..8..9....34123.65..9.578...2.....23..5......89.814972.5...5..8.4."
function convertStringToArray(str, num) {

    let arr = []
    for (let i = 0; i < num; i++) {

        let iarr = []
        for (let j = 0; j < num; j++) {
            iarr.push(+str[num * i + j]);
            // console.log(num * i + j)
        }
        arr.push(iarr)
    }
    return arr
}

if (!localStorage.getItem("sudoku4Index") || +localStorage.getItem("sudoku4Index") > 287) {
    localStorage.setItem("sudoku4Index", 0)
}

let sudoku4Index = +localStorage.getItem("sudoku4Index");
localStorage.setItem("sudoku4Index", ++sudoku4Index)
// console.log(localStorage.getItem("sudoku4Index"))


export const initialBoard4 = convertStringToArray(sudoku4List[sudoku4Index][0], 4)
export const solutionBoard4 = convertStringToArray(sudoku4List[sudoku4Index][1], 4)




export const solutionBoard9 = SudokuSolver.generate();
export const initialBoard9 = SudokuSolver.carve(solutionBoard9, 55);
