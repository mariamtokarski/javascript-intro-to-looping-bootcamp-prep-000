function forLoop (array){
  for (var i = 0; i < 25; i++) {
  if (i===1) {
    console.log(array[i].push("I am 1 strange loop."))
  } else if (i===0) {
    console.log(array[i].push("I am ${i} strange loop."))
  } else {
    console.log(array[i].push("I am ${i} strange loops."))
  }
}
