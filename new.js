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






const mSum = (num1, num2) => console.log(num1 + num2);

mSum(1,2,3,4,5);


//Rest Operator
const nSum = (...args) => {
    let sum = 0;
for(let i=0; i<args.length; i++){
    sum += args[i]
}
    console.log(sum);
};

nSum(2,4,6,8,);

// Spread Operator
console.clear();

let mArr1 = [1,2,3,4,5];

console.log([...mArr1]);

// using spread opereator to assing values 
 let nArr1 = [3,4,7,8,9];
 let nArr2 = [...nArr1];

 // i always clear cosole beecause of earlier logs
 console.clear();
 console.log(nArr2);

//changing the value of the spread operator 

let gArr1 =  [2,3,6,7,7,];
let gArr2 = [...gArr1];
 
// gArr2 retains the initial values of gArr1
gArr1.push(9);
console.log(gArr1)
console.log(gArr2);


// Concatinating multiple arrays 
console.clear();

let fArr1 = [2,4,5,6];
let fArr2 = [7,8,9];

let fArr3 = [...fArr1, ...fArr2];// the sequence or the arrangement of the arrays matter 

console.log(fArr3);


// Using spread operator with objects 
console.clear()
let mObj1 = {
    fName: 'Julius'
}

let mObj2 = {
    age : 34
}

let mObj3 = {...mObj1, ...mObj2}

console.log(mObj3);

// Destructuring
console.clear();
const callSign = "Felis Navidad";
const nameArr  = callSign.split(' ');
console.log(nameArr);

// spliting callSign
let firstNames = nameArr[0];
let lastNames = nameArr[1];


console.log(firstNames);
console.log(lastNames);

//Simple Destructuring
const tag = "Natsu Olivier Dragneel";
const tagArr = tag.split(' ');

console.log(tagArr);
// sequebce matters in the arrangement of variables 
let [firstTag, secondTag, lastTag] = tagArr;

console.log(firstTag);
console.log(secondTag);
console.log(lastTag);

//Destructuring Objects 
const individual = {
    firstTitle : "Lord",
    rank : "Adamantine",
    Age  : 28
}
// in destructuring objects, the sequence doesnt matter because we are using the same keywords used in the original object
let {firstTitle, rank} = individual;

console.log(firstTitle,);
console.log(rank);


// Array Functions: map()

const arr = [1 ,2 ,3, 4, 5];

let newArr = arr.map((item) => { 
    return item -1;
});

console.clear();
console.log(newArr);

// map() with Objects 
// objects always need to be placed in square brackets else an error wil be displayed 
const obj = [{
    ign : "Tenz",
    item : "Gordrinker",
    rank : 200
},
{
    ign : "Xeppa",
    item : "Black Cleaver",
    rank : 150
}];

let newObj = obj.map((item) => {
   return {
    ign : item.ign,
    rank : item.rank
   }
        
   
});

 console.log(newObj);

// Array reduce() function
const numArr = [1,3,6,7,9];

const newNumArr = numArr.reduce((acc, item) =>{
    return acc + item
}, 0);
console.log(newNumArr)



const objArr = [{
    ign : "Tenz",
    item : "Gordrinker",
    rank : 200
},
{
    ign : "Xeppa",
    item : "Black Cleaver",
    rank : 150
}];

let newObjArr = objArr.reduce((ark, item) => {
   return  ark + item.rank   
}, 0)

console.log(newObjArr)

// Array Function filter()

const letArr = [1,2,3,4,5,6,7];

const result = letArr.filter((item) => {
    return item % 2 === 0;
})
console.log(result)


//Using filter() with Objects 
const letObj = [{
    ign : "Tenz",
    item : "Gordrinker",
    rank : 200
},
{
    ign : "Xeppa",
    item : "Black Cleaver",
    rank : 150
}];

let newLetObj = letObj.filter((item) =>{
        return item.rank <= 150;
})

console.log(newLetObj)


// Array Functions find() and findIndex()

const functionFInd = [-1,-3,-5,0,2,3,6];

let findResult = functionFInd.find((item) =>{
    return (item % 2 !== 0 && item >= 0) 
});
console.log(findResult);

// findindex()

const funcFind = [-1,-3,-4,0,1,2,5,6,7];

let findFunc = funcFind.findIndex((data) =>{
        return data % 2 ===0
})

console.log(findFunc)