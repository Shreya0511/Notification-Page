const btn = document.getElementsByClassName('unread');
const range = btn.length;
var countVal = document.querySelector(".count");
var read = document.querySelector(".read");
let count = countVal.textContent;
const dotidot = document.getElementsByClassName("reddot");


var ct = 0;
    for(var i = 0; i < range; i++){
        btn[i].addEventListener("click", () => {
             dotidot[ct].style.backgroundColor = "white";
             btn[ct].style.backgroundColor = "white";
             countVal.textContent = --count;
             ct++;
        });
    }

    read.addEventListener("click", ()=>{
          for(var i = 0; i < range; i++){
            dotidot[i].style.backgroundColor = "white";
            btn[i].style.backgroundColor = "white";
            countVal.textContent = 0;
          }
    });
