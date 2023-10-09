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


 let varSelection = 0;
 let arrSelection = [];


// function init(){
//     let varSelection = 0;
//     let arrSelection = [];
// }

// init()




// ONE ===================
document.querySelector('.matchOneA').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchOne');
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('blue');
   selectionCheck();
    return
}
)
document.querySelector('.matchOneB').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchOne',);
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('blue');
    selectionCheck();
    return
}
)
// TWO ======================
document.querySelector('.matchTwoA').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchTwo',);
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('red');
    selectionCheck();;
    return
}
)
document.querySelector('.matchTwoB').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchTwo',);
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('red');
    selectionCheck();
    return
}
)
// THREE ==========================
document.querySelector('.matchThreeA').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchThree',);
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('yellow');
    selectionCheck();
    return
}
)
document.querySelector('.matchThreeB').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchThree',);
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('yellow');
    selectionCheck();
    return
}
)
// FOUR ===============================
document.querySelector('.matchFourA').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchFour',);
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('purple');
   selectionCheck();
    return
}
)
document.querySelector('.matchFourB').addEventListener('click', (e) => {
    e.target.classList.add('selectedMatchFour',);
    e.target.classList.add('clicked');
    (varSelection += 1);
    arrSelection.push('purple');
    selectionCheck();
    return
}
)
function selectionCheck(){
    if ((varSelection === 2) && (arrSelection[0] === arrSelection[1])){
        varSelection = 0;
        arrSelection = [];
    const clickedList = document.getElementsByClassName('clicked');

      (clickedList[1]).style.backgroundColor = ('green');
    

      (clickedList[0]).style.backgroundColor = ('green');
      
    } else if ((varSelection === 2) && (arrSelection[0] !== arrSelection[1])){
        varSelection = 0;
        arrSelection = [];
    document.querySelector('.matchOneA').classList.remove('selectedMatchOne');
    document.querySelector('.matchOneB').classList.remove('selectedMatchOne');
    document.querySelector('.matchTwoA').classList.remove('selectedMatchTwo');
    document.querySelector('.matchTwoB').classList.remove('selectedMatchTwo');
    document.querySelector('.matchThreeA').classList.remove('selectedMatchThree');
    document.querySelector('.matchThreeB').classList.remove('selectedMatchThree');
    document.querySelector('.matchFourA').classList.remove('selectedMatchFour');
    document.querySelector('.matchFourB').classList.remove('selectedMatchFour');
   
    console.log('if is running')

}
}

