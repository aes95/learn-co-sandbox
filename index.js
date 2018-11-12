/*
function outer(){
  var innerVar = "Inside";
  return function inner(){
    var noAccess = "inaccessible"
    return noAccess
  }
}
console.log(outer())  */
function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}