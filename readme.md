# Sudoku Game App



## Description:

This is a Sudoku Game app for kids having 2 levels of difficulty

1.  (4*4)
2.  (9*9)

## The app uses:

- `Vite` as Its build tool.

- `SASS` as Its `CSS` preprocessor tool

- `Bootstrap` as Its `CSS Framework`


### For 9x9 sudoku game I use:

`node package` [@jlguenego/sudoku-generator
](https://www.npmjs.com/package/@jlguenego/sudoku-generator)
to generate game board and its **unique** solutions.

### For 4x4 sudoku game I use:


`CSV file` [4x4-Sudoku-Dataset](https://github.com/Black-Phoenix/4x4-Sudoku-Dataset/blob/master/4x4_sudoku_unique_solution.csv)
to generate game board and its **unique** solutions.

### **To run the program:**

1. Install Node.js
2. Open terminal in the project directory and then run `npm install` to install required dependencies.
3. To start the app in development mode run `npm run dev` in terminal and open http://localhost:3000 to view it in the browser..

- - - 


### Please Note that the game responsivity is limited to medium screens (768px)
### Please `don't` consider runnig this game on screens of width smaller than `768px` for proper layout display

- - - 


### User Journey & App Lifecycle
- When the user first launch the app is asked for his *name* and the game difficulty *level* 
- Then the user is redirected to select an *image group* from 4 image groups to play with
- Then the user is redirected to the game page and the game will be started when the `start` button is clicked
- The user can navigate through the grid using the keyboard `arrows` and can place the correct image by pressing the corresponding `number key`
- If the user selected the wrong answer the current cell background will turn `red` and the wrong answers counter will increment by 1.
- If the user selected the correct answer the current cell background will turn `green`
- If the user finished all empty cells in time will be prompted with a win modal to play again or to return to home page
- If the user didn't finish in time or selected more than 3 wrong answers will be prompted with loss modal with the same options
- The user can return to home page any time by pressing `home` button

- - - 


### Notes about folders and files structure:

- `initialBoard.js`: is used to generate the initial board and its solution and manging the localstorage operations

- `board.js`: is used to rendering the board ui

- `sudoku4.js`: containing the 4*4 boards and its solutions in JS array

- Most of the app logic is contained in `control.js` & `board.js` files
- Reset of the files has a self-explanatory name and functionalty
