function forLoop(array) {
  for (var i = 0; i<25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops`)
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
  console.log(array)
}

test = [1,2,3,4,5]

doWhileLoop(test)
console.log(test)