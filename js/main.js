console.log("DOM fully loaded and parsed");

/* ------------- DOM VARIABLES ----------------- */
let canvas = document.getElementById("game");
let canvasContext = canvas.getContext("2d");

/* ------------- SPRITES -------------- */

// PLAYER (MORTY)
let mortyImage = new Image();
mortyImage.src = "../sprites/morty/morty-sprite-sheet.png";

// ENEMIES
let pickleRickImage = new Image();
pickleRickImage.src = "../sprites/rick-n-mortys/pickle-rick-sprite-sheet.png";

let commanderRickImage = new Image();
commanderRickImage.src =
  "../sprites/rick-n-mortys/commander-rick-sprite-sheet.png";

let guardRickImage = new Image();
guardRickImage.src = "../sprites/rick-n-mortys/guard-rick-sprite-sheet.png";

let gunkRickImage = new Image();
gunkRickImage.src = "../sprites/rick-n-mortys/gunk-rick-sprite-sheet.png";

// GOAL (RICK)
let rickImage = new Image();
rickImage.src = "../sprites/rick/rick.png";

/* ------------ MOVEMENT HANDLERS -------------- */
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let up = true;
let down = true;
let right = true;
let left = true;

const keyDownHandler = (e) => {
  switch (e.key) {
    case "w":
      console.log(e.key);
      upPressed = true;
      break;
    case "a":
      leftPressed = true;
      break;
    case "d":
      rightPressed = true;
      break;
    case "s":
      downPressed = true;
      break;
  }
};

const keyUpHandler = (e) => {
  switch (e.key) {
    case "w":
      upPressed = false;
      break;
    case "a":
      leftPressed = false;
      break;
    case "d":
      rightPressed = false;
      break;
    case "s":
      downPressed = false;
      break;
  }
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const sprite = (options) => {
  let that = {};
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  that.positionX = options.positionX;
  that.positionY = options.positionY;

  that.render = function () {
    // Draw the animation
    that.context.drawImage(
      that.image,
      0,
      0,
      that.width,
      that.height,
      that.positionX,
      that.positionY,
      that.width,
      that.height
    );
  };

  return that;
};

// MORTY (PLAYER)
let morty = sprite({
  context: canvas.getContext("2d"),
  imageX: 0,
  width: 81,
  height: 100,
  image: mortyImage,
  positionX: 360,
  positionY: 500,
});

// PICKLE RICKS
let pickleRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  positionX: 40,
  positionY: 110,
});

let pickleRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  positionX: 200,
  positionY: 110,
});

let pickleRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  positionX: 360,
  positionY: 110,
});

let pickleRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  positionX: 520,
  positionY: 110,
});

let pickleRick5 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  positionX: 680,
  positionY: 110,
});

// COMMANDER RICKS
let commanderRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  positionX: 115,
  positionY: 215,
});

let commanderRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  positionX: 275,
  positionY: 215,
});

let commanderRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  positionX: 435,
  positionY: 215,
});

let commanderRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  positionX: 600,
  positionY: 215,
});

// GUARD RICKS
let guardRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  positionX: 40,
  positionY: 310,
});

let guardRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  positionX: 200,
  positionY: 310,
});

let guardRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  positionX: 360,
  positionY: 310,
});

let guardRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  positionX: 520,
  positionY: 310,
});

let guardRick5 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  positionX: 680,
  positionY: 310,
});

// GUNK RICKS
let gunkRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  positionX: 115,
  positionY: 410,
});

let gunkRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  positionX: 275,
  positionY: 410,
});

let gunkRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  positionX: 435,
  positionY: 410,
});

let gunkRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  positionX: 600,
  positionY: 410,
});

// RICK
let rick = sprite({
  context: canvas.getContext("2d"),
  width: 77,
  height: 100,
  image: rickImage,
  positionX: 360,
  positionY: 0,
});

const updateAll = () => {
  drawAll();
};

let framesPerSecond = 30;
setInterval(updateAll, 1000 / framesPerSecond);

const drawAll = () => {
  /* ------------ BACKGROUND ---------------- */
  colorRect(0, 0, canvas.width, canvas.height, "grey");
  /* ------------ SAFE ZONES ---------------- */
  colorRect(0, 0, canvas.width, canvas.height / 6, "green");
  colorRect(0, canvas.height - 100, canvas.width, canvas.height / 6, "green");
  /* ------------ STREET DIVIDERS ---------------- */
  colorRect(0, canvas.height - 100, canvas.width, 15, "black");
  colorRect(0, canvas.height - 200, canvas.width, 15, "black");
  colorRect(0, canvas.height - 300, canvas.width, 15, "black");
  colorRect(0, canvas.height - 400, canvas.width, 15, "black");
  colorRect(0, canvas.height - 500, canvas.width, 15, "black");
  /* ------------ YELLOW STREET LINES ---------------- */
  // Row 1
  colorRect(150, canvas.height - 245, canvas.width / 16, 5, "yellow");
  colorRect(300, canvas.height - 245, canvas.width / 16, 5, "yellow");
  colorRect(450, canvas.height - 245, canvas.width / 16, 5, "yellow");
  colorRect(600, canvas.height - 245, canvas.width / 16, 5, "yellow");
  // Row 2
  colorRect(150, canvas.height - 345, canvas.width / 16, 5, "yellow");
  colorRect(300, canvas.height - 345, canvas.width / 16, 5, "yellow");
  colorRect(450, canvas.height - 345, canvas.width / 16, 5, "yellow");
  colorRect(600, canvas.height - 345, canvas.width / 16, 5, "yellow");
  // Row 3
  colorRect(150, canvas.height - 445, canvas.width / 16, 5, "yellow");
  colorRect(300, canvas.height - 445, canvas.width / 16, 5, "yellow");
  colorRect(450, canvas.height - 445, canvas.width / 16, 5, "yellow");
  colorRect(600, canvas.height - 445, canvas.width / 16, 5, "yellow");
  // Row 4
  colorRect(150, canvas.height - 145, canvas.width / 16, 5, "yellow");
  colorRect(300, canvas.height - 145, canvas.width / 16, 5, "yellow");
  colorRect(450, canvas.height - 145, canvas.width / 16, 5, "yellow");
  colorRect(600, canvas.height - 145, canvas.width / 16, 5, "yellow");
  /* ------------ PLAYER --------------- */
  morty.render();

  /* ------------ ENEMIES --------------- */

  // PICKLE RICKS
  pickleRick1.render();
  pickleRick2.render();
  pickleRick3.render();
  pickleRick4.render();
  pickleRick5.render();

  //  COMMANDER RICKS
  commanderRick1.render();
  commanderRick2.render();
  commanderRick3.render();
  commanderRick4.render();

  // GUARD RICKS
  guardRick1.render();
  guardRick2.render();
  guardRick3.render();
  guardRick4.render();
  guardRick5.render();

  // GUNK RICKS
  gunkRick1.render();
  gunkRick2.render();
  gunkRick3.render();
  gunkRick4.render();

  // RICK
  rick.render();

  // UP
  if (upPressed == true && up == true) {
    morty.positionY -= 100;
    up = false;
  }
  if (upPressed == false) {
    up = true;
  }

  // LEFT
  if (leftPressed == true && left == true) {
    morty.positionX -= 10;
    left = false;
  }
  if (leftPressed == false) {
    left = true;
  }

  // RIGHT
  if (rightPressed == true && right == true) {
    morty.positionX += 10;
    right = false;
  }
  if (rightPressed == false) {
    right = true;
  }

  // DOWN
  if (downPressed == true && down == true) {
    morty.positionY += 100;
    down = false;
  }
  if (downPressed == false) {
    down = true;
  }

  requestAnimationFrame(drawAll);
};

const colorRect = (x, y, width, height, fillColor) => {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(x, y, width, height);
};
