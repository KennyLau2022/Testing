let digit = 0;
let counter = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
decrease.addEventListener("click", function () {
    if (digit == 0){
        alert("We cannot go lower than 0!");
    } else {
        digit--;
        console.log(digit);
        counter.innerHTML = digit;
    }
});
increase.addEventListener("click", function () {
    if (digit >= 50){
        alert("We cannot go greater than 50!");
    } else {
        
        digit++;
        console.log(digit);
        counter.innerHTML = digit;
    }
    
    
});
reset.addEventListener("click", function () {
    digit = 0
    console.log(digit);
    counter.innerHTML = digit;
});
