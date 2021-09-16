let counter = 10;

let countDown =  setInterval(() => {
    console.log(counter);
    counter--;
    if(counter === 0){
        clearInterval(countDown)
            console.log("DONE!")
    }
}, 1000)




function randomGame(){
   let count = 0;
   let counter = setInterval(() =>{
    let randomNum = Math.random();
    count++;
    if (randomNum > 0.75){
        clearInterval(counter);
        console.log("Number of tries: " + count);
    } 
   }, 1000)
  
}

randomGame();




//input: a number between 0-1(.24,.67, etc...)
//output: number of tries it took to get to a number greater than .75

// counter for number of tries it takes
// a way to keep track of tries and add to counter variable
//A for loop to loop through all decimal numbers between 0-.75
//using the loop to add to the counter of number of tries it takes.


