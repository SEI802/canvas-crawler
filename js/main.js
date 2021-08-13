// GLOBAL DOM / VARIABLES
let movementDisplay = document.getElementById('movement');
let game = document.getElementById('game');



// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element.
// It is used for drawing shapes, text, images, and other objects.
const ctx = game.getContext('2d');
ctx.fillStyle = 'white';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;



// ====================== SETUP FOR CANVAS RENDERING ======================= //
game.setAttribute('class', 'main-game')
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute('width', getComputedStyle(game)['width']);

// ====================== ENTITIES ======================= //

// ====================== HELPER FUNCTIONS ======================= //
// SANDBOX FOR TESTING PAINTING TECHNIQUES
function testPaint(x, y, width, height) {
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
}

testPaint(20, 10, 200, 200);
testPaint(10, 20, 100, 100);

function drawBox(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y, size, size);
}
drawBox(50, 50, 75, 'red');
//  GUI

//  KEYBOARD INTERACTION LOGIC

// ====================== GAME PROCESSES ======================= //

// ====================== COLLISION DETECTION ======================= //

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS

// CODE STASH FOR OLD CODE
