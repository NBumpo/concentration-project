// What will happen in the game?
// 
//10 cards laid out in front of player
//5 suites of matches
//Cards are randomized
//30 second timer starts
//4 wrong guesses means game end
//Timer reaching 0 means game end
//Reset Button goes back to initialized state
//When game end element appear at top of screen stating win or loss
//status with score 

//------ CONSTANT VARIABLES

//array of symbols to choose from
//cached elements: buttons, wrong guess images, timer clock





//------- STATE VARIABLES

//matches made
// wrong guesses



//------- EVENT LISTENERS

//button listeners


//-------- FUNCTIONS

//init 
// randomize symbol cards
// set wrong guesses to zero
// start timer function

//reveal cards function
//select two cards at a time if cards are not the same they are 
//obscured once again and +1 is added to the wrong guess variable


//matches made function
//if two cards of the same symbol are selected they stay revealed 



// render
//matches made
//wrong guess visulization

//---------------------------------------------------------------------
//==============CONSTANTS================


//const symbols = ['@', '#', '$', '%', '&', '@', '#', '$', '%', '&'];
// const cardBtn = document.querySelector(".card");
// const resetBtn = document.querySelector(".reset")

// //==============STATE==============
// const wrongGuesses = 0;
// const matchesMade = 0;
// const selectVar = 0;


// //==========EVENT LISTENERS=========


// cardBtn.addEventListener("click", set);
// resetBtn.addEventListener("click", init);





//===========FUNCTIONS==========
//function shuffle(){

//}
// function init(){
//     document.querySelector('main').innerHTML=''
//     for (let i = 0; i < symbols.length; i++) {
//         const crtBtn = document.createElement('button');
//         crtBtn.textContent = symbols[i];
//         document.querySelector('main').appendChild(crtBtn);
//         crtBtn.addEventListener('click', selectFunc)
//          shuffleArray()

//        function render(){

//         }
// }
// }
// init ()

// function set() {
//     cardBtn.textContent = (symbols[(Math.floor(Math.random() * symbols.length))])
// }


// function shuffleArray() {
//     let len = symbols.length,
//         currentIndex;
//     for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
//         let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
//         const temp = symbols[currentIndex];
//         symbols[currentIndex] = symbols[randIndex];
//         symbols[randIndex] = temp;
//     }
// }

// function selectFunc(e) {
//     e.target.
// }


// const varMatchOne = document.getElementsByClassName('matchOne')
// const varMatchTwo = document.querySelectorAll('div.matchTwo')
// const varMatchThree = document.querySelectorAll('div.matchThree')
// const varMatchFour = document.querySelectorAll('div.matchFour')
// const varMatchFive = document.querySelectorAll('div.matchFive')


// const resetBtn = document.querySelector(".reset");
// resetBtn.addEventListener("click", init);


 


// function init(){
//     let varSelection = 0;
//     let arrSelection = [];
// }

// init()



// CLASSES ===================
//let varSelection = 0;
//let arrSelection = [];







// // ONE ===================
// document.querySelector('.matchOneA').addEventListener('click', (e) => {
//     e.target.classList.add('selectedMatchOne');
//     e.target.classList.add('clicked');
//     (varSelection += 1);
//     arrSelection.push('blue');
//    selectionCheck();
//     return
// }
// )
// document.querySelector('.matchOneB').addEventListener('click', (e) => {
//     e.target.classList.add('selectedMatchOne',);
//     e.target.classList.add('clicked');
//     (varSelection += 1);
//     arrSelection.push('blue');
//     selectionCheck();
//     return
// }
// )


// function selectionCheck(){
//     if ((varSelection >= 2) && (arrSelection[0] === arrSelection[1])){
//         varSelection -= 2;
//         while(arrSelection.length) {
//             let pop = arrSelection.pop()
//             console.log(pop)
//         }
//     const clickedList = document.getElementsByClassName('clicked');
//         console.log(clickedList);

//       (clickedList[0]).style.backgroundColor = ('green');
//       (clickedList[1]).style.backgroundColor = ('green');
//       (clickedList[0].classList.remove('clicked'));
//       (clickedList[1].classList.remove('clicked'));
//     } else if (varSelection >= 2) {
//         document.querySelector('.matchOneA').classList.remove('selectedMatchOne');
//     document.querySelector('.matchOneB').classList.remove('selectedMatchOne');
//     document.querySelector('.matchTwoA').classList.remove('selectedMatchTwo');
//     document.querySelector('.matchTwoB').classList.remove('selectedMatchTwo');
//     document.querySelector('.matchThreeA').classList.remove('selectedMatchThree');
//     document.querySelector('.matchThreeB').classList.remove('selectedMatchThree');
//     document.querySelector('.matchFourA').classList.remove('selectedMatchFour');
//     document.querySelector('.matchFourB').classList.remove('selectedMatchFour');
//     document.querySelector('.matchFiveA').classList.remove('selectedMatchFive');
//     document.querySelector('.matchFiveB').classList.remove('selectedMatchFive');
//         varSelection -= 2;
//         while(arrSelection.length) {
//             let pop = arrSelection.pop()
//             console.log(pop)
//         }
    
   
//     console.log('if is running')

// }
// }

//e.target.className

//Assigning classes from an array to the div elements randomly

//reset button
const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click',init)



const allDiv = document.querySelectorAll('div')
const pairs = ['A','A','B','B','C','C','D','D','E','E']
let clickedCards = [];
let arrCorrectMatches = [];
winP = document.createElement("p")
winP.innerText = 'you win';


init() 

//card clicked listener event ========================
document.querySelector("main").addEventListener('click', (e) => {
       console.log(e.target);
       console.log(e.target.tagName);
       console.log(e.target.className);
       e.target.classList.remove('hidden');
     
       clickedCards.push(e.target);
       

       
       if (clickedCards.length >= 2) {
        setTimeout(() => {
        selectionCheck()
        }, "500");
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
    }
    arrCorrectMatches = [];
    clickedCards = [];
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
console.log(clickedCards[0].className)
console.log(clickedCards[1].className)
if (clickedCards[0].className === clickedCards[1].className){
    console.log(clickedCards)
    console.log(clickedCards[1])
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
clickedCards = []

} 
else return;

}
function appendP() {

    document.querySelector('main').appendChild(winP)
}
function winCheck() {
   
    
    if (arrCorrectMatches.length === 10) {
        appendP()
    }
}






