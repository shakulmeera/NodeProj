//app/calc.js

function sum (arr){
  return arr.reduce(function(a,b){
    return a+ b
  },0)
}

module.export.sum = sum
