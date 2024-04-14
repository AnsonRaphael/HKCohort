var a= 1;
console.log(a);

//----------------------------------------------------------------//

let firstName = "Anson";
let age = 18;
let isMarried = true;


let marriedLog ="not married";
if( isMarried === true){
    marriedLog= "married"
}
console.log(":-" +firstName +" is "+marriedLog);



//----------------------------------------------------------------//

let ans = 0;

for(let i =0;i<=100;i++){
    ans += i;
}
console.log("ans: "+ans);




//-----------------------even age-----------------------------------------//
console.log("//--------------- even age ------------------------------------------//"); 
let ageArray = [21, 22, 24, 25, 26];
for(let i=0;i<ageArray.length;i++){
    if(ageArray[i]%2 === 0){
        console.log("even: "+ageArray[i]); 
    }
} 

console.log("//--------------- male person ------------------------------------------//"); 

let allUsers = [{
    name:"anson",
    gender:"male"
},{
    name:"nson",
    gender:"female"
},{
    name:"son",
    gender:"male"
},{
    name:"on",
    gender:"female"
}];

for(let i=0; i<allUsers.length;i++){
    if(allUsers[i]["gender"] === "male"){
        console.log("male : "+allUsers[i]["name"]);
    }
}

console.log("//--------------- Find sum function ------------------------------------------//"); 

function sum(a, b){
    return a+b;
}

const sumVal = sum(1,3);
console.log("sum: "+sumVal);


console.log("//--------------- Callback function ------------------------------------------//"); 

function sumIn(a, b,funcToCall){
    funcToCall( a+b);
}
function format1(val){
    console.log("format 1 : "+val);
}
function format2(val){
    console.log("format 2 : "+val);
}

sumIn(1,4,format1);
sumIn(1,4,format2);
