const funOne = () => {
    const funcTwo=()=>{
        return 'funcOne'
    }
    console.log(funcTwo())
}

funOne()



class Person{
constructor(){
    this.name='Anna'
}

// dont write like const details=(), because it is a syntax, otherwise it will throw an error
// details=()=>{
// return `${this.name}`
// }
details=()=>{
    return `${this.name}`
}
}

