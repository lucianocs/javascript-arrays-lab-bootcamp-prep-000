
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop(1)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift;
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}


function removeLastKitten(){
  kittens.slice(0,a.length-1)
}

function removeFirstKitten(){
  kittens.slice(1)
}
