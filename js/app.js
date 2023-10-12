// What will happen in the game?
// 
//12 cards laid out in front of player
//6 pairs of matches
//Cards are randomized
//4 wrong guesses means game end
//Reset Button goes back to initialized state
//When game end element appear at bottom of screen stating win or loss



//reset button
const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click',init)


let wrongGuesses = 0;
const allDiv = document.querySelectorAll('main div')
const pairs = ['A','A','B','B','C','C','D','D','E','E','F','F']
let clickedCards = [];
let arrCorrectMatches = [];
winP = document.createElement("p")
winP.innerText = 'YOU WIN';
loseP = document.createElement("p")
loseP.innerText = 'YOU LOSE';


init() 

//card clicked listener event ========================
document.querySelector("main").addEventListener('click', (e) => {
       console.log(e.target);
       console.log(e.target.tagName);
       console.log(e.target.className);
       if ((e.target.tagName === 'DIV') && e.target.classList.contains('hidden')) {
       e.target.classList.remove('hidden');
       clickedCards.push(e.target);
       }
      
       
       if (clickedCards.length >= 2) {
        setTimeout(() => {
        selectionCheck()
        }, "300");
       }
    });


    //SHUFFLE FUNCTION ======================
function shuffle(array) {
    //declaring variables
    let shuffledArray = [];
    let usedIndexes = [];
    
    let i = 0;

    while (i < array.length) {
        //stores random number from array in variable
        let randomNumber = Math.floor(Math.random()*pairs.length);
        //if the number is not in usedindexes...
        if (!usedIndexes.includes(randomNumber)) {
        //... push it into shuffleredarray...
            shuffledArray.push(array[randomNumber]);

            usedIndexes.push(randomNumber);
            i++;
        }
    }
    return shuffledArray
}

//INITIALIZE FUNCITON ==================
function init() {
    if (document.querySelector('main').contains(winP)){

            document.querySelector('main').removeChild(winP)

    } else if (document.querySelector('main').contains(loseP)) {
            
            document.querySelector('main').removeChild(loseP)
    }
    arrCorrectMatches = [];
    clickedCards = [];
    wrongGuesses = 0;
    //removes match style class at start of game
    for (i = 0; i < allDiv.length; i++) {
        allDiv[i].removeAttribute('class')
    }
    
    shuffledArray = shuffle(pairs)

    //loop for adding class to each div
    for (i = 0; i < allDiv.length; i++) {
        allDiv[i].classList.add(shuffledArray[i])
        console.log(allDiv)
       console.log(allDiv[i])
     }
     //adding hidden class on top of match pair style
     for (i = 0; i < allDiv.length; i++) {
        allDiv[i].classList.add('hidden')
       
     }
     
}

// SELECTION CHECK FUNCTION ==========================
function selectionCheck() {

if (clickedCards[0].className === clickedCards[1].className){
   
        clickedCards[1].classList.add('correctmatch')
        clickedCards[0].classList.add('correctmatch')
        arrCorrectMatches.push(clickedCards[1].classList)
        arrCorrectMatches.push(clickedCards[0].classList)
    clickedCards = []
    winCheck()
  
} 
else if (clickedCards[0].className !== clickedCards[1].className) {
    (clickedCards[1].classList.add('hidden'));
    (clickedCards[0].classList.add('hidden'));
wrongGuesses += 1;
clickedCards = [];
// if (wrongGuesses >= 1){
//     document.querySelector('.life1').classList.remove('')
// }

winCheck()
} 
else return;


// functions for appending the results status
}
function appendWinP() {

    document.querySelector('main').appendChild(winP)
}
function appendLoseP() {

    document.querySelector('main').appendChild(loseP)
}

//function for win/lose condition
function winCheck() {
   
    if (arrCorrectMatches.length === 12) {
     
        appendWinP()
    } 
    if (wrongGuesses >= 5) {
      
        appendLoseP()
    }
}






