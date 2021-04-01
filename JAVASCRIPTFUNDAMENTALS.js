// Write your function here:

const numImaginaryFriends = totalFriends => {
   return Math.ceil(totalFriends * .25)
}




// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
const truthyOrFalsy = value => {
  if (value) {
    return true
  }
    return false
  }






// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)) // Should print false

// We encourage you to add more function calls of your own to test your code!

const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}

// Write your function here:

  const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`


// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!

const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// Write your function here:
const lifePhase = age =>{
  if(age < 0 || age > 140) {
    return 'This is not a valid age';
  } else if(age < 4 ){
    return 'baby';
  } else if (age < 13){
    return 'child';
    } else if(age < 20){
      return 'teen';
    } else if(age < 65){
      return 'adult';
    } else {
      return 'senior citizen'
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(4)) //should print 'child'
console.log(lifePhase(1)) //should print 'child'
console.log(lifePhase(14)) //should print 'child'
console.log(lifePhase(24)) //should print 'child'
console.log(lifePhase(6)) //should print 'child'
console.log(lifePhase(94)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!

// Write your function here:

const agreeOrDisagree = (first,second) =>{

  if(first === second.toLowerCase()) {
    return 'You agree!';
  } else {
    return'You disagree!';
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) 
console.log(agreeOrDisagree("yep", "nope")) 
console.log(agreeOrDisagree("nope", "nope")) 
console.log(agreeOrDisagree("nope", "Nope")) 

// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!

// Write your function here:
const canIVote = age => {
  if(age >= 18) {
    return true;
  } else  {
    return false;
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(18)) // Should print true

// We encourage you to add more function calls of your own to test your code!
