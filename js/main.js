// GLOBAL DOM / VARIABLES
let movementDisplay = document.getElementById('movement');
let game = document.getElementById('game');
let hero;
let shrek;
const ctx = game.getContext('2d');

ctx.fillStyle = 'white';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;

// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element.
// It is used for drawing shapes, text, images, and other objects.

game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute('width', getComputedStyle(game)['width']);
console.log('width', game.width);
// ====================== ENTITIES ======================= //
class Crawler {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = () => {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

// ====================== HELPER FUNCTIONS ======================= //
// SANDBOX FOR TESTING PAINTING TECHNIQUES
function testPaint(x, y, width, height) {
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
    console.log('color:', ctx.color);
}

function drawBox(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y, size, size);
}

//  GUI

function addNewShrek() {
    shrek.alive = false;
    setTimeout(() => {
      let x = Math.floor(Math.random() * game.width) - 40;
      let y = Math.floor(Math.random() * game.height) - 80;
      shrek = new Crawler(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
}


//  KEYBOARD INTERACTION LOGIC
// w - 87 - up
// a - 65 - left
// s - 83 - down
// d - 68 - right
function movementHandler (e) {
    console.log('movement', e.key);

    switch(e.which) {
        case 87:
            // move hero up
            hero.y - 10 >= 0 ? hero.y -= 10 : null;
            break;
        case 65: 
            // move left
            hero.x - 10 >= 0 ? hero.x -= 10 : null;
            break;
        case 83:
            // move down
            hero.y + 10 <= game.height ? hero.y += 10 : null;
            break;
        case 68:
            // move right
            hero.x + 10 <= game.width ? hero.x += 10 : null;
            break;
    }
}

// ====================== GAME PROCESSES ======================= //
/**
 * @function gameLoop
 * @todo clear the canvas
 * @todo display the x and y coords of our hero
 * @todo check if the shrek is alive. ( a ) render shrek ( b ) check for collision
 * @todo render the hero
*/
function gameLoop () {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    // @todo - add score
    // display the x and y coords of our hero
    movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`;
    // check to see if shrek is alive
    if (shrek.alive) { // 
        // render shrek
        shrek.render();
        // @todo - check collision (detchHit -> f)
        let hit = detectHit(hero, shrek);
    }
    // render hero
    hero.render();
}

// change 
// ====================== COLLISION DETECTION ======================= //
/**
 * @function detectHit
 * @param {object<Crawler>} p1 - hero.y + hero.hiehgt
 * @param {object<Crawler>} p2 - shrek.y
 * @todo if the bottom of one below is above the other
 * @todo if the top of one is above the bottom of another
 * @todo if the right of one is right of the others left
*/
function detectHit (p1, p2) {
    // what do we know know to be true
    // what conditions must false for the hit to be true
    // Crawler ( x, y, width, height )
    let hitTest = (
        p1.y + p1.height > p2.y && 
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width
    ); // {boolean} : if all are true -> hit

    if (hitTest) {
        return addNewShrek();
    } else {
        return false;
    }
}
// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS
window.addEventListener("DOMContentLoaded", (e) => {
    hero = new Crawler(10, 20, "blue", 20, 20);
    shrek = new Crawler(100, 200, '#bada55', 40, 80);

    const runGame = setInterval(gameLoop, 120);
});

document.addEventListener('keydown', movementHandler);




















// CODE STASH FOR OLD CODE

// console.log('e', e);
// game.addEventListener("click", function (event) {
//     ctx.clearRect(0, 0, game.width, game.height);
//     hero.x = event.offsetX;
//     hero.y = event.offsetY;
//     console.log('x', event.offsetX);
//     console.log('y', event.offsetY);
//     hero.render();
// });

// let hitTest = (
//     p1.y + p1.height > p2.y && 
//     p1.y < p2.y + p2.height &&
//     p1.x + p1.width > p2.x &&
//     p1.x < p2.x + p2.width
// ); // {boolean} : if all are true -> hit
//     // (hero 10) + (hero 20) > ( shrek 200 ) &&
//     // ( hero 20 ) < (shrek 200) + (shrek 80)
//     // 