// Regular String
const fName = 'Castor';
const mGreeting = "Hello" + " "  +  fName;
console.log(mGreeting);

// Template String
const lName = 'Great';
const nGreeting = `Hello ${lName}`
console.log(nGreeting);


 // Template string used in functions
const firstNmae = 'khalissi'
const lastName = 'Dragon'

function getFullName(){
    return `${firstNmae} ${lastName}`
};

const yGreeting = `Hello ${getFullName()}`

console.log(yGreeting);

// More complex examples

let red = 20;
let blue = 50;
let green = 600;
let alpha = 0.67;

// const rgbaExp = 'rgba(' + red + ',' + blue + ',' + green + ',' + alpha + ')';
console.clear()
//console.log(rgbaExp);

// Template string of the example above

const rgbaExps = `rgba(${red},${blue},${green},${alpha})`

console.clear();
console.log(rgbaExps);


//Regular Function

function greeting(main){
    return `Good ${main}`
}
console.clear()
console.log(greeting("Jett"));

// Arrow Function
const salute = (role) =>{
    return `${role} is good`
}
console.clear();
console.log(salute('initiator'));



const info = (weapon) => {
    return `${weapon} best gun ngl`
}

console.clear();
console.log(info('vandal'));



//Rest Operator


const mSum = (num1, num2) => console.log(num1 + num2);

mSum(1,2,3,4,5);


//Rest Operator
const nSum = (...args) => {
    let sum = 0;
for(let i=0; i<args.length; i++){
    sum += args[i]
}
    console.log(sum)
};

nSum(2,4,6,8,);

