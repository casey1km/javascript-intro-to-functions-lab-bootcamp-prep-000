function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(hello) {
  console.log(hello.toUpperCase())
}
function logWhisper(hello) {
  console.log(hello.toLowerCase())
}
function sayHiToGrandma(hello) {
<<<<<<< HEAD
  if (hello === hello.toLowerCase())
    return "I can't hear you!";
  else if (hello === hello.toUpperCase())
    return "YES INDEED!";
  else
    return "I love you, too.";
=======
  if (hello.toLowerCase())
    return "I can't hear you!"
}
function sayHiToGrandma(hello) {
  if(hello.toUpperCase())
  return "YES INDEED!"
}
function sayHiToGrandma(hello) {
  if("I love you, Grandma")
  return "I love you, too"
}

>>>>>>> 3e519048839821a2b67eb84bdc0e84f1a829bcda
}