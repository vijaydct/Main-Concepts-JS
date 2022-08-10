
// functions made for reusability

function add(){
    return 10+20
}

console.log(add()) //30

// NOTE: in above case, we can not reuse that function, why because, it is a hard coded function

function add(a, b){
    return a+b
}

console.log(add(10,20)) //30
console.log(add(10,5)) // 15

// NOTE: in second case, we can reuse the function in code, why because, we are passing the parameters to the function
