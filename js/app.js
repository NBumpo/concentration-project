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


// night/light mode toggle
const modetoggle = document.querySelector('.modetoggle')
 modetoggle.addEventListener('click', function() {
    if (nightmode !== true) {
        nightmode = true;
        document.querySelector('body').classList.add('nightmode')
        document.querySelector('main').classList.add('nightmode')
        document.querySelector('.modetoggle').classList.add('modetoggleNight')
        modetoggle.innerText = 'Switch to Lightmode';
    }else if (nightmode === true) {
        nightmode = false;
        document.querySelector('body').classList.remove('nightmode')
        document.querySelector('main').classList.remove('nightmode')
        document.querySelector('.modetoggle').classList.remove('modetoggleNight')
        modetoggle.innerText = 'Switch to Nightmode';
    }
 })


//const attemptNumberVisual = document.querySelector('.attemptsnumber')
const lossNumberVisual = document.querySelector('.lossnumber')
const winNumberVisual = document.querySelector('.winnumber')
let nightmode = false;
let lose = false;
let attemptsnumber = 6;
let lossNumber = 0;
let winNumber = 0;
let wrongGuesses = 0;
const allDiv = document.querySelectorAll('main div')
const pairs = ['A','A','B','B','C','C','D','D','E','E','F','F']
let clickedCards = [];
let arrCorrectMatches = [];
winP = document.createElement("p")
winP.innerText = 'YOU WIN';
loseP = document.createElement("p")
loseP.innerText = 'YOU LOSE';
triesH2 = document.createElement("h2")
triesH2.innerText = 'TRIES';
triesP = document.createElement("p")
triesP.innerText = attemptsnumber;




init() 

//card clicked listener event ========================
document.querySelector("main").addEventListener('click', (e) => {
       console.log(e.target);
       console.log(e.target.tagName);
       console.log(e.target.className);
       if ((e.target.tagName === 'DIV') && e.target.classList.contains('hidden') && lose === false) {
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
    
    
    appendTries()
    

    lose = false;
    attemptsnumber = 6;
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
     
     render()
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
   
        attemptsnumber -= 1;
        wrongGuesses += 1;
        clickedCards = [];
    render()
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

function appendTries() {

    document.querySelector('main').appendChild(triesH2)
    triesH2.classList.add('attempts')
    document.querySelector('main').appendChild(triesP)
    triesP.classList.add('attemptsnumber')
}

function removeTries() {
    document.querySelector('main').removeChild(triesH2)
    document.querySelector('main').removeChild(triesP)
}

//function for win/lose condition
function winCheck() {
   
    if (arrCorrectMatches.length === 12) {
       
        winNumber += 1
       
        removeTries()
        appendWinP()
        render()
    } 
    if (wrongGuesses >= 6) {

        lossNumber += 1;
        lose = true;
        
        removeTries()
        appendLoseP()
        render ()
    }
}

    function render() {
    winNumberVisual.innerText = winNumber;
    lossNumberVisual.innerText = lossNumber;
    triesP.innerText = attemptsnumber;
    
    }

    // function removeHiddenBorder() {
    // if (document.querySelectorAll('main div').contains('hidden')){
    //     document.querySelectorAll('main div').classList.remove('hidden')
    //    }
    //    return
    // }




