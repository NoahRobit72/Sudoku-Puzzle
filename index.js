/*
 *
 * Copyrighted (c) <2021> <Noah Robitshek> <noahro@bu.edu>  All Rights Reserved.
 * 
 * Filename: index.js
 *
 * Description: Backend logic and logic for board game. 
 * 
 * Project: <EC 327 Project> 
 *
 * Creator: <Noah Robitshek>   <NR>
 * 
 *
 */ 

const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

//Create variables
var timer;
var timeRemaining;
var lives
var selectedNum;
var selectedTile;
var disableSelect;

window.onload = function() {
    // run startgame function when button is clicked

    id("start-btn").addEventListener("click", startGame);
}
function startGame(){
    // choose board difficuliy
    let board;
    if (id("diff-1").checked) board = easy[0];
    else if (id("diff-2").checked) board = medium[0];
    else board = hard[0];
    // set lives to 3 and enable selecting numbers and tiles;
    lives = 3;
    disableSelect = false;
    id("lives").textContent = "Lives Remaining: 3";
    // Created board baised on difficulty:
    generateBoard(board);
    // Starts timmer
    // startTimer();
    // if(id("theme-1").checked){
    //     qs("body"). class
    // }



    // switch(id("theme")){
    //     case id("theme-1").checked:
    //         qs("body").classList.add("dark")
    //         break;
    //     case id("theme-2").checked:
    //         break;
    //     case id("theme-3").checked:
    //         break;
    //     case id("theme-4").checked:
    //         break;
    //     default:
    // }
}

function generateBoard(board){
    // Clear any previous boards
    clearPrevious();
    // let used to incriment tile ids
    let idCount = 0;
    // create 81 tiles
    for(let i = 0; i < 81; i++){
        // create a new paragraph element
        let tile = document.createElement("p");
        
        if (board.charAt(i) != "-"){
            tile.textContent = board.charAt(i);
        } else{
            // add click event listener to tile

        }
        // adding tile id
        tile.id = idCount;
        // incriment next tile
        idCount++;
        // add tile clas to all tiles
        tile.classList.add("tile");

        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 & tile.id < 54)){
            tile.classList.add("bottomBorder");
        }
        if (((tile.id + 1) % 9 == 3) || (tile.id +1) % 9 == 6) {
            tile.classList.add("rightBorder");
        }
        // add tile to bord
        id("board").appendChild(tile);
    }

}

function clearPrevious(){
    // Access all tiles
    let tiles = qsa(".tile");
    // Remove each tile
    for(let i = 0; i < tiles.length; i++){
        tiles[i].remove();
    }
    // If there is a timer, clear it
    if(timer) clearTimeout(timer);
    // Deselect any numbers
    for(let i = 0; i < id("number-container").children.length; i++){
        id("number-container").children[i].classList.remove("selected");
    }
    selectedTile = null;
    selectedNum = null;
}

// Helper functions
function id(id) {
    return document.getElementById(id);
}

function qs(selector){
    return document.querySelector(selector);
}
function qsa(selector){
    return document.querySelectorAll(selector);
}

