const numbers=[10,20,30,40,50]
const result=numbers.filter(function(ele){
    return ele !== 30
})

console.log(result)

// const result = [].concat(numbers)
// const i=result.indexOf(30)
// result.splice(i, 1)
// console.log(result, numbers)