const box1 = document.querySelector('#box1');
const box2 = document.querySelectorAll('#box2');
const btn = document.querySelector('#start');
const box1Img = document.querySelector('.box1Img');
const overlay = document.getElementById("overlay")

const rock = "./images/rock.png";
const paper = "./images/paper.png";
const scissors = "./images/scissors.png"
const arr = [rock, paper, scissors];
const computersPoints = [];
const yoursPoints = [];




btn.addEventListener('click', initStart);

function initStart() {
    let i = 0;
    box1Img.src = `${arr[i]}`
    const myInterval = setInterval(timer, 100);
    function timer() {
    if (i >= 3) {
        return i = 0;
    }
    else {
        box1Img.src = `${arr[i]}`

        console.log(i);
    }
    i++;
}

    box2.forEach(box => {
        box.addEventListener('click', startGame)
    });

    function startGame(e) {
        clearInterval(myInterval);
        box1Img.src = "";
        const rand = Math.floor(Math.random() * 3);
        box1Img.src = `${arr[rand]}`
        handleWinner(e, rand);
        box2.forEach(box=>{
            box.removeEventListener('click',startGame);
        })
        const sumOfArrLenghts = yoursPoints.length + computersPoints.length
        if (sumOfArrLenghts === 3) {
            // console.log(yoursPoints.length);
            // console.log(computersPoints.length);
            if (yoursPoints.length > computersPoints.length) {
                overlay.innerHTML = "You are winner";

            }
            if (computersPoints.length > yoursPoints.length) {
                overlay.innerHTML = "Computer winned";
            }
            overlay.style.display = "flex";
            // setTimeout(() => {
            //     window.location.reload();
            // }, 2000);

        }
        
    }

    function handleWinner(e, rand) {
        console.log(rand);
        console.log(e.target.alt);
        if (e.target.alt === "rock" && rand === 0) {
            console.log("nereseno");
            return;
        }
        if (e.target.alt === "paper" && rand === 0) {
            console.log("you are winner");
            yoursPoints.push(1)
            return;
        }
        if (e.target.alt === "scissors" && rand === 0) {
            console.log("compuer winned");
            computersPoints.push(1);
            return;
        }


        if (e.target.alt === "rock" && rand === 1) {
            console.log("computer winned");
            computersPoints.push(1);
            return;
        }
        if (e.target.alt === "paper" && rand === 1) {
            console.log("nereseno");
            return;
        }
        if (e.target.alt === "scissors" && rand === 1) {
            console.log("you are winner");
            yoursPoints.push(1)
            return;
        }


        if (e.target.alt === "rock" && rand === 2) {
            console.log("You are winner");
            yoursPoints.push(1)
            return;
        }
        if (e.target.alt === "paper" && rand === 2) {
            console.log("computer winned");
            computersPoints.push(1);
            return;
        }
        if (e.target.alt === "scissors" && rand === 2) {
            console.log("nereseno");
            return;
        }
    }

// init();


}
