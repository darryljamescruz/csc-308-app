function div (a, b){
  if(b === 0){
      throw new Error('Cannot divide by zero');
  }
  return a / b;
}

//sum function
function sum(a,b){
    return a+b;
}
  
function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
     if (!isNaN(text.charAt(i)) && text.charAt(i) !== ' ')  // bug that was fixed: added check for space
      return true;
    }
    return false;
}

// export all functions as properties as module.exports instead of individual exports
module.exports = {
    div,
    sum,
    containsNumbers
};