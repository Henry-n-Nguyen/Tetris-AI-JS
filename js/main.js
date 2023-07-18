//main.js
let canvas = document.getElementById('board');
let ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


// Main function
let board = new Board(ctx);
let canBreak = 0;

board.grid.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
board.grid[-4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
board.grid[-3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
board.grid[-2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
board.grid[-1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.clear();
console.table(board.grid);

function play() {

    for (let i = 0; i < 10; i++) {
        if (board.grid[-1][i] == 1) {
            canBreak = 1;
            break;
        }
    }

    if (canBreak) {
        location.reload();
    } else {
        switch (Math.floor(Math.random() * 6)) {
            case 0: addLineShape(); break;
            case 1: addSquareShape(); break;
            case 2: addLShape(); break;
            case 3: addMirrorLShape(); break;
            case 4: addZShape(); break;
            case 5: addTShape(); break;
        }
    }
}

function turnLeft() {
    let canTurnLeft = 1;

    for (let i = 0; i < block.length; i++) {
        if (block[i].x == 0 || board.grid[block[i].y][block[i].x] == 2) { canTurnLeft = 0; break; }
    }

    if (canTurnLeft) {
        for (let i = 0; i < block.length; i++) {
            ctx.clearRect(
                block[i].x,
                block[i].y,
                1,
                1
            );

            block[i].x--;

            ctx.fillStyle = "black";
            ctx.fillRect(
                block[i].x,
                block[i].y,
                1,
                1
            );

            ctx.fillStyle = block[i].color;
            ctx.fillRect(
                block[i].x + 0.05,
                block[i].y + 0.05,
                1 - 0.1,
                1 - 0.1
            );
        }
    }
}

function turnRight() {
    let canTurnRight = 1;

    for (let i = 0; i < block.length; i++) {
        if (block[i].x == 9 || board.grid[block[i].y][block[i].x] == 2) { canTurnRight = 0; break; }
    }

    if (canTurnRight) {
        for (let i = block.length - 1; i >= 0; i--) {
            ctx.clearRect(
                block[i].x,
                block[i].y,
                1,
                1
            );

            block[i].x++;

            ctx.fillStyle = "black";
            ctx.fillRect(
                block[i].x,
                block[i].y,
                1,
                1
            );

            ctx.fillStyle = block[i].color;
            ctx.fillRect(
                block[i].x + 0.05,
                block[i].y + 0.05,
                1 - 0.1,
                1 - 0.1
            );
        }
    }
}

// set paths
let timeOut;

// move paths
let block = [];

function move() {
    let canMove = 1;

    for (let i = 0; i < block.length; i++) {
        if (block[i].y == 19 || ( board.grid[block[i].y][block[i].x] == 2 && board.grid[block[i].y + 1][block[i].x] == 1)) { canMove = 0; break; }
    }

    if (!canMove) {
        for (let j = 0; j < block.length; j++) {
            board.grid[block[j].y][block[j].x] = 1;

            if (board.grid[block[j].y][block[j].x - 1] != 1) board.grid[block[j].y][block[j].x - 1] = 2;
            if (board.grid[block[j].y][block[j].x + 1] != 1) board.grid[block[j].y][block[j].x + 1] = 2;
            if (board.grid[block[j].y - 1][block[j].x] != 1) board.grid[block[j].y - 1][block[j].x] = 2;

        }
        console.clear();
        clearTimeout(timeOut);

        console.table(board.grid);

        play();
    }

    for (let i = 0; i < block.length; i++) {
        ctx.clearRect(
            block[i].x,
            block[i].y,
            1,
            1
        );

        block[i].y++;

        ctx.fillStyle = "black";
        ctx.fillRect(
            block[i].x,
            block[i].y,
            1,
            1
        );

        ctx.fillStyle = block[i].color;
        ctx.fillRect(
            block[i].x + 0.05,
            block[i].y + 0.05,
            1 - 0.1,
            1 - 0.1
        );
    }

    timeOut = setTimeout(move, 800);
}

// choices_block
// let choices = document.getElementById("choices");
// let cb = choices.getContext("2d");

// drawChoices();

function drawChoices() {
    // Line shapes

    cb.fillStyle = "black";
    cb.fillRect(10, 10, 100, 60);

    cb.fillStyle = "white";
    cb.fillRect(10.5, 10.5, 99, 59);

    // #1
    cb.fillStyle = "black";
    cb.fillRect(20, 20, 20, 20);

    cb.fillStyle = "#4deeea";
    cb.fillRect(20.5, 20.5, 19, 19);

    // #2
    cb.fillStyle = "black";
    cb.fillRect(40, 20, 20, 20);

    cb.fillStyle = "#4deeea";
    cb.fillRect(40.5, 20.5, 19, 19);

    // #3
    cb.fillStyle = "black";
    cb.fillRect(60, 20, 20, 20);

    cb.fillStyle = "#4deeea";
    cb.fillRect(60.5, 20.5, 19, 19);

    // #4
    cb.fillStyle = "black";
    cb.fillRect(80, 20, 20, 20);

    cb.fillStyle = "#4deeea";
    cb.fillRect(80.5, 20.5, 19, 19);

    // Square shapes

    cb.fillStyle = "black";
    cb.fillRect(10, 70, 100, 60);

    cb.fillStyle = "white";
    cb.fillRect(10.5, 70.5, 99, 59);

    // #1
    cb.fillStyle = "black";
    cb.fillRect(20, 80, 20, 20);

    cb.fillStyle = "#ffe700";
    cb.fillRect(20.5, 80.5, 19, 19);

    // #2
    cb.fillStyle = "black";
    cb.fillRect(40, 80, 20, 20);

    cb.fillStyle = "#ffe700";
    cb.fillRect(40.5, 80.5, 19, 19);

    // #3
    cb.fillStyle = "black";
    cb.fillRect(20, 100, 20, 20);

    cb.fillStyle = "#ffe700";
    cb.fillRect(20.5, 100.5, 19, 19);

    // #4
    cb.fillStyle = "black";
    cb.fillRect(40, 100, 20, 20);

    cb.fillStyle = "#ffe700";
    cb.fillRect(40.5, 100.5, 19, 19);

    // L-shapes

    cb.fillStyle = "black";
    cb.fillRect(10, 130, 100, 60);

    cb.fillStyle = "white";
    cb.fillRect(10.5, 130.5, 99, 59);

    // #1
    cb.fillStyle = "black";
    cb.fillRect(20, 160, 20, 20);

    cb.fillStyle = "#ff971c";
    cb.fillRect(20.5, 160.5, 19, 19);

    // #2
    cb.fillStyle = "black";
    cb.fillRect(40, 160, 20, 20);

    cb.fillStyle = "#ff971c";
    cb.fillRect(40.5, 160.5, 19, 19);

    // #3
    cb.fillStyle = "black";
    cb.fillRect(60, 160, 20, 20);

    cb.fillStyle = "#ff971c";
    cb.fillRect(60.5, 160.5, 19, 19);

    // #4
    cb.fillStyle = "black";
    cb.fillRect(60, 140, 20, 20);

    cb.fillStyle = "#ff971c";
    cb.fillRect(60.5, 140.5, 19, 19);

    // MirrorL-shapes

    cb.fillStyle = "black";
    cb.fillRect(10, 190, 100, 60);

    cb.fillStyle = "white";
    cb.fillRect(10.5, 190.5, 99, 59);

    // #1
    cb.fillStyle = "black";
    cb.fillRect(20, 220, 20, 20);

    cb.fillStyle = "#0077d3";
    cb.fillRect(20.5, 220.5, 19, 19);

    // #2
    cb.fillStyle = "black";
    cb.fillRect(40, 220, 20, 20);

    cb.fillStyle = "#0077d3";
    cb.fillRect(40.5, 220.5, 19, 19);

    // #3
    cb.fillStyle = "black";
    cb.fillRect(60, 220, 20, 20);

    cb.fillStyle = "#0077d3";
    cb.fillRect(60.5, 220.5, 19, 19);

    // #4
    cb.fillStyle = "black";
    cb.fillRect(20, 200, 20, 20);

    cb.fillStyle = "#0077d3";
    cb.fillRect(20.5, 200.5, 19, 19);

    // Z-shapes

    cb.fillStyle = "black";
    cb.fillRect(10, 250, 100, 60);

    cb.fillStyle = "white";
    cb.fillRect(10.5, 250.5, 99, 59);

    // #1
    cb.fillStyle = "black";
    cb.fillRect(20, 280, 20, 20);

    cb.fillStyle = "#53da3f";
    cb.fillRect(20.5, 280.5, 19, 19);

    // #2
    cb.fillStyle = "black";
    cb.fillRect(40, 260, 20, 20);

    cb.fillStyle = "#53da3f";
    cb.fillRect(40.5, 260.5, 19, 19);

    // #3
    cb.fillStyle = "black";
    cb.fillRect(40, 280, 20, 20);

    cb.fillStyle = "#53da3f";
    cb.fillRect(40.5, 280.5, 19, 19);

    // #4
    cb.fillStyle = "black";
    cb.fillRect(60, 260, 20, 20);

    cb.fillStyle = "#53da3f";
    cb.fillRect(60.5, 260.5, 19, 19);

    // T-shapes

    cb.fillStyle = "black";
    cb.fillRect(10, 310, 100, 60);

    cb.fillStyle = "white";
    cb.fillRect(10.5, 310.5, 99, 59);

    // #1
    cb.fillStyle = "black";
    cb.fillRect(20, 340, 20, 20);

    cb.fillStyle = "#f000ff";
    cb.fillRect(20.5, 340.5, 19, 19);

    // #2
    cb.fillStyle = "black";
    cb.fillRect(40, 320, 20, 20);

    cb.fillStyle = "#f000ff";
    cb.fillRect(40.5, 320.5, 19, 19);

    // #3
    cb.fillStyle = "black";
    cb.fillRect(40, 340, 20, 20);

    cb.fillStyle = "#f000ff";
    cb.fillRect(40.5, 340.5, 19, 19);

    // #4
    cb.fillStyle = "black";
    cb.fillRect(60, 340, 20, 20);

    cb.fillStyle = "#f000ff";
    cb.fillRect(60.5, 340.5, 19, 19);
}

function addLineShape() {
    block = [];

    // #1
    block.push({
        color: "#4deeea",
        x: 3,
        y: -1,
    });

    // #2
    block.push({
        color: "#4deeea",
        x: 4,
        y: -1,
    });

    // #3
    block.push({
        color: "#4deeea",
        x: 5,
        y: -1,
    });

    // #4
    block.push({
        color: "#4deeea",
        x: 6,
        y: -1,
    });

    move();
}

function addSquareShape() {
    block = [];

    // #1
    block.push({
        color: "#ffe700",
        x: 4,
        y: -1,
    });

    // #2
    block.push({
        color: "#ffe700",
        x: 5,
        y: -1,
    });

    // #3
    block.push({
        color: "#ffe700",
        x: 4,
        y: -2,
    });

    // #4
    block.push({
        color: "#ffe700",
        x: 5,
        y: -2,
    });

    move();
}

function addLShape() {
    block = [];

    // #1
    block.push({
        color: "#ff971c",
        x: 4,
        y: -1,
    });

    // #2
    block.push({
        color: "#ff971c",
        x: 5,
        y: -1,
    });

    // #3
    block.push({
        color: "#ff971c",
        x: 4,
        y: -2,
    });

    // #4
    block.push({
        color: "#ff971c",
        x: 4,
        y: -3,
    });

    move();
}

function addMirrorLShape() {
    block = [];

    // #1
    block.push({
        color: "#0077d3",
        x: 4,
        y: -1,
    });

    // #2
    block.push({
        color: "#0077d3",
        x: 4,
        y: -2,
    });

    // #3
    block.push({
        color: "#0077d3",
        x: 4,
        y: -3,
    });

    // #4
    block.push({
        color: "#0077d3",
        x: 5,
        y: -3,
    });

    move();
}

function addZShape() {
    block = [];

    // #1
    block.push({
        color: "#53da3f",
        x: 3,
        y: -1,
    });

    // #2
    block.push({
        color: "#53da3f",
        x: 4,
        y: -1,
    });

    // #3
    block.push({
        color: "#53da3f",
        x: 4,
        y: -2,
    });

    // #4
    block.push({
        color: "#53da3f",
        x: 5,
        y: -2,
    });

    move();
}

function addTShape() {
    block = [];

    // #1
    block.push({
        color: "#f000ff",
        x: 5,
        y: -1,
    });

    // #2
    block.push({
        color: "#f000ff",
        x: 4,
        y: -2,
    });

    // #3
    block.push({
        color: "#f000ff",
        x: 5,
        y: -2,
    });

    // #4
    block.push({
        color: "#f000ff",
        x: 5,
        y: -3,
    });

    move();
}

