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
  that.imageX = options.imageX;
  that.positionX = options.positionX;
  that.positionY = options.positionY;

  that.render = function () {
    // Draw the animation
    that.context.drawImage(
      that.image,
      that.imageX,
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
  positionY: 508,
});

// PICKLE RICKS
let pickleRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  imageX: 0,
  positionX: 50,
  positionY: 110,
});

let pickleRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  imageX: 0,
  positionX: 250,
  positionY: 110,
});

let pickleRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  imageX: 0,
  positionX: 450,
  positionY: 110,
});

let pickleRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  imageX: 0,
  positionX: 650,
  positionY: 110,
});

let pickleRick5 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: pickleRickImage,
  imageX: 0,
  positionX: 850,
  positionY: 110,
});

// COMMANDER RICKS
let commanderRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  imageX: 0,
  positionX: 40,
  positionY: 212,
});

let commanderRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  imageX: 0,
  positionX: 240,
  positionY: 212,
});

let commanderRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  imageX: 0,
  positionX: 440,
  positionY: 212,
});

let commanderRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: commanderRickImage,
  imageX: 0,
  positionX: 640,
  positionY: 212,
});

// GUARD RICKS
let guardRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  imageX: 0,
  positionX: 840,
  positionY: 310,
});

let guardRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  imageX: 0,
  positionX: 240,
  positionY: 310,
});

let guardRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  imageX: 0,
  positionX: 440,
  positionY: 310,
});

let guardRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 67,
  height: 90,
  image: guardRickImage,
  imageX: 0,
  positionX: 640,
  positionY: 310,
});

// GUNK RICKS
let gunkRick1 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  imageX: 0,
  positionX: -200,
  positionY: 410,
});

let gunkRick2 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  imageX: 0,
  positionX: 100,
  positionY: 410,
});

let gunkRick3 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  imageX: 0,
  positionX: 400,
  positionY: 410,
});

let gunkRick4 = sprite({
  context: canvas.getContext("2d"),
  width: 62,
  height: 90,
  image: gunkRickImage,
  imageX: 0,
  positionX: 700,
  positionY: 410,
});

const randomNum = () => {
  return Math.floor(Math.random() * 700) + 1;
};

// RICK
let rick = sprite({
  context: canvas.getContext("2d"),
  width: 77,
  height: 100,
  image: rickImage,
  imageX: 0,
  positionX: randomNum(),
  positionY: 0,
});

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

  /* ------------ ENEMIES --------------- */
  drawEnemies();

  // RICK
  rick.render();

  /* ------------ PLAYER --------------- */
  morty.render();
  moveMorty();
  checkCollide();

  requestAnimationFrame(drawAll);
};

/*------------- REFACTOR THIS -------------------- */
const drawEnemies = () => {
  // PICKLE RICKS
  pickleRick1.render();
  if (pickleRick1.positionX < canvas.width + 100) {
    pickleRick1.positionX += 2;
  } else {
    pickleRick1.positionX = -100;
  }
  pickleRick2.render();
  if (pickleRick2.positionX < canvas.width + 100) {
    pickleRick2.positionX += 2;
  } else {
    pickleRick2.positionX = -100;
  }
  pickleRick3.render();
  if (pickleRick3.positionX < canvas.width + 100) {
    pickleRick3.positionX += 2;
  } else {
    pickleRick3.positionX = -100;
  }
  pickleRick4.render();
  if (pickleRick4.positionX < canvas.width + 100) {
    pickleRick4.positionX += 2;
  } else {
    pickleRick4.positionX = -100;
  }
  pickleRick5.render();
  if (pickleRick5.positionX < canvas.width + 100) {
    pickleRick5.positionX += 2;
  } else {
    pickleRick5.positionX = -100;
  }

  //  COMMANDER RICKS
  commanderRick1.render();
  if (commanderRick1.positionX > canvas.width - 900) {
    commanderRick1.positionX -= 1.5;
    commanderRick1.imageX = 67;
    setTimeout(function () {
      commanderRick1.imageX = 0;
    }, 300);
  } else {
    commanderRick1.positionX = 900;
  }

  commanderRick2.render();
  if (commanderRick2.positionX > canvas.width - 900) {
    commanderRick2.positionX -= 1.5;
    commanderRick2.imageX = 67;
    setTimeout(function () {
      commanderRick2.imageX = 0;
    }, 300);
  } else {
    commanderRick2.positionX = 900;
  }
  commanderRick3.render();
  if (commanderRick3.positionX > canvas.width - 900) {
    commanderRick3.positionX -= 1.5;
    commanderRick3.imageX = 67;
    setTimeout(function () {
      commanderRick3.imageX = 0;
    }, 300);
  } else {
    commanderRick3.positionX = 900;
  }
  commanderRick4.render();
  if (commanderRick4.positionX > canvas.width - 900) {
    commanderRick4.positionX -= 1.5;
    commanderRick4.imageX = 67;
    setTimeout(function () {
      commanderRick4.imageX = 0;
    }, 300);
  } else {
    commanderRick4.positionX = 900;
  }

  // GUARD RICKS
  guardRick1.render();
  if (guardRick1.positionX < canvas.width + 100) {
    guardRick1.positionX += 1;
    guardRick1.imageX = 67;
    setTimeout(function () {
      guardRick1.imageX = 0;
    }, 300);
  } else {
    guardRick1.positionX = -100;
  }
  guardRick2.render();
  if (guardRick2.positionX < canvas.width + 100) {
    guardRick2.positionX += 1;
    guardRick2.imageX = 67;
    setTimeout(function () {
      guardRick2.imageX = 0;
    }, 300);
  } else {
    guardRick2.positionX = -100;
  }
  guardRick3.render();
  if (guardRick3.positionX < canvas.width + 100) {
    guardRick3.positionX += 1;
    guardRick3.imageX = 67;
    setTimeout(function () {
      guardRick3.imageX = 0;
    }, 300);
  } else {
    guardRick3.positionX = -100;
  }
  guardRick4.render();
  if (guardRick4.positionX < canvas.width + 100) {
    guardRick4.positionX += 1;
    guardRick4.imageX = 67;
    setTimeout(function () {
      guardRick4.imageX = 0;
    }, 300);
  } else {
    guardRick4.positionX = -100;
  }

  // GUNK RICKS
  gunkRick1.render();
  if (gunkRick1.positionX > canvas.width - 900) {
    gunkRick1.positionX -= 1;
    gunkRick1.imageX = 67;
    setTimeout(function () {
      gunkRick1.imageX = 0;
    }, 300);
  } else {
    gunkRick1.positionX = 900;
  }
  gunkRick2.render();
  if (gunkRick2.positionX > canvas.width - 900) {
    gunkRick2.positionX -= 1;
    gunkRick2.imageX = 67;
    setTimeout(function () {
      gunkRick2.imageX = 0;
    }, 300);
  } else {
    gunkRick2.positionX = 900;
  }
  gunkRick3.render();
  if (gunkRick3.positionX > canvas.width - 900) {
    gunkRick3.positionX -= 1;
    gunkRick3.imageX = 67;
    setTimeout(function () {
      gunkRick3.imageX = 0;
    }, 300);
  } else {
    gunkRick3.positionX = 900;
  }
  gunkRick4.render();
  if (gunkRick4.positionX > canvas.width - 900) {
    gunkRick4.positionX -= 1;
    gunkRick4.imageX = 67;
    setTimeout(function () {
      gunkRick4.imageX = 0;
    }, 300);
  } else {
    gunkRick4.positionX = 900;
  }
};

const moveMorty = () => {
  // UP
  if (upPressed == true && up == true && morty.positionY > 10) {
    morty.imageX = 81;
    morty.positionY -= 100;
    up = false;
    setTimeout(function () {
      morty.imageX = 0;
    }, 150);
  }
  if (upPressed == false) {
    up = true;
  }

  // LEFT
  if (leftPressed == true && left == true && morty.positionX > 20) {
    morty.positionX -= 20;
    left = false;
    morty.imageX = 405;
    setTimeout(function () {
      morty.imageX = 324;
    }, 150);
  }
  if (leftPressed == false) {
    left = true;
  }

  // RIGHT
  if (
    rightPressed == true &&
    right == true &&
    morty.positionX + morty.width < canvas.width - 20
  ) {
    morty.positionX += 20;
    right = false;
    morty.imageX = 243;
    setTimeout(function () {
      morty.imageX = 162;
    }, 150);
  }
  if (rightPressed == false) {
    right = true;
  }

  // DOWN
  if (downPressed == true && down == true && morty.positionY < 500) {
    morty.positionY += 100;
    down = false;
    morty.imageX = 567;
    setTimeout(function () {
      morty.imageX = 486;
    }, 150);
  }
  if (downPressed == false) {
    down = true;
  }
};
/* ------------------ REFACTOR THIS (ITERATOR FUNCTION) ----------------------- */
const checkCollide = () => {
  // GUNK RICK COLLIDE
  if (
    gunkRick1.positionX <= morty.positionX + morty.width &&
    gunkRick1.positionX + gunkRick1.width >= morty.positionX &&
    gunkRick1.positionY + gunkRick1.height >= morty.positionY &&
    gunkRick1.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    gunkRick2.positionX <= morty.positionX + morty.width &&
    gunkRick2.positionX + gunkRick2.width >= morty.positionX &&
    gunkRick2.positionY + gunkRick2.height >= morty.positionY &&
    gunkRick2.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    gunkRick3.positionX <= morty.positionX + morty.width &&
    gunkRick3.positionX + gunkRick3.width >= morty.positionX &&
    gunkRick3.positionY + gunkRick3.height >= morty.positionY &&
    gunkRick3.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    gunkRick4.positionX <= morty.positionX + morty.width &&
    gunkRick4.positionX + gunkRick4.width >= morty.positionX &&
    gunkRick4.positionY + gunkRick4.height >= morty.positionY &&
    gunkRick4.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  }

  // GUARD RICK COLLIDE
  if (
    guardRick1.positionX <= morty.positionX + morty.width &&
    guardRick1.positionX + guardRick1.width >= morty.positionX &&
    guardRick1.positionY + guardRick1.height >= morty.positionY &&
    guardRick1.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    guardRick2.positionX <= morty.positionX + morty.width &&
    guardRick2.positionX + guardRick2.width >= morty.positionX &&
    guardRick2.positionY + guardRick2.height >= morty.positionY &&
    guardRick2.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    guardRick3.positionX <= morty.positionX + morty.width &&
    guardRick3.positionX + guardRick3.width >= morty.positionX &&
    guardRick3.positionY + guardRick3.height >= morty.positionY &&
    guardRick3.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    guardRick4.positionX <= morty.positionX + morty.width &&
    guardRick4.positionX + guardRick4.width >= morty.positionX &&
    guardRick4.positionY + guardRick4.height >= morty.positionY &&
    guardRick4.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  }

  // COMMANDER RICK COLLIDE
  if (
    commanderRick1.positionX <= morty.positionX + morty.width &&
    commanderRick1.positionX + commanderRick1.width >= morty.positionX &&
    commanderRick1.positionY + commanderRick1.height >= morty.positionY &&
    commanderRick1.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    commanderRick2.positionX <= morty.positionX + morty.width &&
    commanderRick2.positionX + commanderRick2.width >= morty.positionX &&
    commanderRick2.positionY + commanderRick2.height >= morty.positionY &&
    commanderRick2.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    commanderRick3.positionX <= morty.positionX + morty.width &&
    commanderRick3.positionX + commanderRick3.width >= morty.positionX &&
    commanderRick3.positionY + commanderRick3.height >= morty.positionY &&
    commanderRick3.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    commanderRick4.positionX <= morty.positionX + morty.width &&
    commanderRick4.positionX + commanderRick4.width >= morty.positionX &&
    commanderRick4.positionY + commanderRick4.height >= morty.positionY &&
    commanderRick4.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  }

  // PICKLE RICK COLLIDE CHECK
  if (
    pickleRick1.positionX <= morty.positionX + morty.width &&
    pickleRick1.positionX + pickleRick1.width >= morty.positionX &&
    pickleRick1.positionY + pickleRick1.height >= morty.positionY &&
    pickleRick1.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    pickleRick2.positionX <= morty.positionX + morty.width &&
    pickleRick2.positionX + pickleRick2.width >= morty.positionX &&
    pickleRick2.positionY + pickleRick2.height >= morty.positionY &&
    pickleRick2.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    pickleRick3.positionX <= morty.positionX + morty.width &&
    pickleRick3.positionX + pickleRick3.width >= morty.positionX &&
    pickleRick3.positionY + pickleRick3.height >= morty.positionY &&
    pickleRick3.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    pickleRick4.positionX <= morty.positionX + morty.width &&
    pickleRick4.positionX + pickleRick4.width >= morty.positionX &&
    pickleRick4.positionY + pickleRick4.height >= morty.positionY &&
    pickleRick4.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  } else if (
    pickleRick5.positionX <= morty.positionX + morty.width &&
    pickleRick5.positionX + pickleRick5.width >= morty.positionX &&
    pickleRick5.positionY + pickleRick5.height >= morty.positionY &&
    pickleRick5.positionY <= morty.positionY + morty.height
  ) {
    morty.positionY = 505;
    morty.positionX = 360;
  }

  // WIN COLLIDE CHECK
  if (
    rick.positionX <= morty.positionX + morty.width &&
    rick.positionX + rick.width >= morty.positionX &&
    rick.positionY + rick.height >= morty.positionY
  ) {
    rick.render();
    morty.positionY = 508;
    morty.positionX = 360;
    morty.imageX = 0;
    alert("You Win!");
  }
};

const colorRect = (x, y, width, height, fillColor) => {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(x, y, width, height);
};

drawAll();
