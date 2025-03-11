const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
    let newArr = tutorials.map(function (tutorial) { 
      let tutorialTempArr = tutorial.split(" ").map((word)=>{
        let tempWord = word.split("")
        tempWord[0] = tempWord[0].toUpperCase()
        return tempWord.join("")
      }).join(" ");
      return(tutorialTempArr)
    });
    return newArr
}
