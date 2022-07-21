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
    if(rand === 0){
        console.log("kameen");
    }
    if (rand === 1) {
        console.log("papirrr");
    }
    if (rand === 2) {
        console.log("makazeee");
    }
}