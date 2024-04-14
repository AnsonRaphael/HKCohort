console.log("//----------------- count down timer --------------------------------------------------------------//")


function print(val){
    console.clear()
    console.log(val);
}
function counter(max){
 for(let i=max;i>=0;i--){
    
    setTimeout(print,1000,i);
    
 }
}

counter(30);

console.log("//----------------- calculate time taken between settimeout and inner funtion actually running -----//")

function innerFunction(passTime){
    let currentTime = new Date();
    let diff =  currentTime.getUTCMilliseconds()-passTime.getUTCMilliseconds();
    console.log("difference in time in millisecond: "+ diff);
}
setTimeout(innerFunction,1000,new Date());

console.log("//----------------- Create terminal Clock (HH:MM:SS) -----------------------------------------------//")

function printCurrentTime(){
    console.clear();
    let date = new Date();
    console.log(date.getHours() +" : "+date.getMinutes()+" : "+date.getSeconds() );
    
}
setInterval(printCurrentTime,1000);