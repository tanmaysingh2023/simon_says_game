let gamesq=[];
let usersq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    usersq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gamesq.push(randColor);
    console.log(gamesq);
    gameflash(randbtn); 
}

function checkAns(idx){
    if(usersq[idx] == gamesq[idx]){
        if(usersq.length == gamesq.length){
            setTimeout(levelup,650);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level-1}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white"; 
        },200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    // console.log(usercolor);
    usersq.push(usercolor);

    checkAns(usersq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gamesq=[];
    usersq=[];
    level = 0;
}