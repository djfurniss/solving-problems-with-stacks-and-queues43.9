const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  // turns sentence to all lowercase, no spaces
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  //guard clauses 
  if (sentence.length === 1) return true
  if (sentence.length === 2) return sentence[0] == sentence[1]
  
    // find the middle index of the sentence
  let middleIndex = Math.floor(sentence.length / 2)
    //initiate a new stack
  let halfStack = new Stack()
    //push into the stack the first half of the sentence... 
  for (let i = 0; i <= middleIndex; i++){
    halfStack.push(sentence[i])
  }
    // a new variable is assigned to a spliced version of the original sentence after the middle index
  let halfSentence = sentence.slice(middleIndex)

    // declare a variable to expect a palindrome 
  let isPal = true;
      //initiate a loop through the halfSentence
    for (let i = 0; i < halfSentence.length; i++){
        //through each iteration, pop off the stack's top to compare
      let popped = halfStack.pop()
        //in the case that they don't match.. isPal is turned false and the loop breaks
      if (popped != halfSentence[i]){
        isPal = false
        break;
      }
    }
  return isPal
};

// console.log(isPalindrome("abcba"))
// isPalindrome("abcba")
module.exports = isPalindrome;


// node src/palindromes/palindromes.js