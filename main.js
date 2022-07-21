const box1 = document.querySelector('#box1');
const box2 = document.querySelectorAll('#box2');
const btn = document.querySelector('#start');
const box1Img = document.querySelector('.box1Img');

const rock = "./images/rock.png";
const paper = "./images/paper.png";
const scissors = "./images/scissors.png"
const arr = [rock,paper,scissors];


box2.forEach(box=>{ box.addEventListener('click',(e)=>{
    box.classList.add('box2Hover');
    startGame(e);
})});

function startGame(e){
    const rand = Math.floor(Math.random()*3);
    box1Img.src = `${arr[rand]}`
    handleWinner(e,rand);
}

function handleWinner(e,rand){
    console.log(rand);
    console.log(e.target.alt);
    if(e.target.alt === "rock" && rand === 0){
        console.log("nereseno");
        return;
    }
    if (e.target.alt === "paper" && rand === 0) {
        console.log("you are winner");
        return;
    }
    if (e.target.alt === "scissors" && rand === 0) {
        console.log("compuer winned");
        return;
    }
}