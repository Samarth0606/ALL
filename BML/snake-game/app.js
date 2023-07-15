
let canvas = document.getElementById('canvas'); //board
let ctx = canvas.getContext('2d'); //brush

let boardHeight = 600;
let boardWidth = 1000;
let cellSize = 50;

let direction = 'right';

let gameOver = false;

let foodCells = generateRandomCells();
let score = 0;

document.addEventListener('keydown' , function(event){
    if(event.key === 'ArrowDown'){ direction='down' }
    else if(event.key === 'ArrowUp'){ direction='up' }
    else if(event.key === 'ArrowLeft'){ direction='left' }
    else{ direction='right' }
})


let snakeCells = [[0,0]]; //2d array

// draw snake
function draw(){

    if(gameOver === true){
        clearInterval(intervalId);
        return;
    }

    // erase
    ctx.clearRect(0,0,boardWidth,boardHeight)
    for(let cell of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(cell[0] , cell[1] , cellSize, cellSize);
        ctx.strokeStyle = 'golden'
        ctx.strokeRect(cell[0] , cell[1] , cellSize, cellSize);
    }

    // food draw
    ctx.fillStyle = 'yellow'
    ctx.fillRect(foodCells[0] , foodCells[1] , cellSize ,cellSize)

    // draw score
    ctx.font = '20px cursive';
    ctx.fillText(`Score: ${score}` , 20 , 20)
}

// update snake
function update(){

    let headX = snakeCells[snakeCells.length-1][0];
    let headY = snakeCells[snakeCells.length-1][1];

    let newHeadX;
    let newHeadY;
    if(direction === 'right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth){gameOver = true}
    }
    else if(direction === 'up'){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0){gameOver = true}
    }
    else if(direction === 'down'){
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === boardHeight){gameOver = true}
    }
    else{
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX < 0){gameOver = true}
    }


    snakeCells.push([newHeadX , newHeadY]);
    if(newHeadX === foodCells[0] &&  newHeadY === foodCells[1]){
        foodCells = generateRandomCells();
        score+=1;
    }
    else{
        snakeCells.shift();
    }
}



function generateRandomCells(){
    return [
        Math.round((Math.random()*(boardWidth - cellSize))/cellSize)*cellSize ,
        Math.round((Math.random()*(boardHeight - cellSize))/cellSize)*cellSize 
    ]
}


// harr thodi der mei aage ka kaam kro
let intervalId = setInterval(function(){
    update();
    draw();
} , 100)












