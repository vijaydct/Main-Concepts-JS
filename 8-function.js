// CASE 1

function player(name, country, battingAvg, bowlingAvg, odi, age, test) {
    // here i need to remember order of the parameters belongs to particular arguement
    // whenever importing the function from other file to different file, that time it is difficult to remember the data
    // that is why props came into picture in react
}

console.log(player('sachin', 'india', 36.8, 12.8, 250, 40, 120))

// CASE 2

function player(props) {
    // whenever we import the function from one file to other file, it is easy pass the data through props object
    // no need to remember the order of the data, because it is an object
}

console.log(player('sachin', 'india', 36.8, 12.8, 250, 40, 120))
