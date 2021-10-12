// Code your solutions in this file
const namesArray=["Paul", "Justin", "Adam"];

function writeCards() {
    let thankYouCards=[];
    for ( let i=0; i<namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful gift!` );
    } return thankYouCards;
  }

console.log(writeCards())
//

function countdown(startingNum) {
  let i=startingNum;
  while (i>=0) {
    console.log(i);
    i--
  }
}
countdown(5);