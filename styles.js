/*let greeting = "Hey what's good!?";
let number = 1;

for (let i = 1; i <= 10; i++){
    console.log(greeting + number)
}

if (greeting === "Hey what's good!?" && number <= 1){
    console.log("you can enter the club!")
}
else{
    console.log("Home ways lol!")
}

alert("Hello");*/

let question = prompt("What's your name", "Joseph");
if(question == null){
    alert("Provide me your name please!")
}
else{
    alert(question + " "+ "Welcome to my World!")
}