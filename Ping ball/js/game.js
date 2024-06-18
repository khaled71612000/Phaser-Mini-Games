const config = {
  type: Phaser.AUTO,
  width: 700,
  height: 700,
  scale: {
    mode: Phaser.AUTO,
  },
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
const intx = 250;
const inty = 250;

let ball;
let player1, player2;

let isPlaying = false;

let P1Score = false;
let P2Score = false;

let cursors;

let keys = {};

let  player1ScoreText, p2score;
let intballX, intballY;
let intPlayer1X, intPlayer1Y, intPlayer2X, intPlayer2Y;

function preload() {
  this.load.image("ball", "img/ball.png");
  this.load.image("player", "img/player.png");
  this.load.image("pc", "img/pc.png");
}

function create() {
  const worldWidth = 700;
  const worldHeight = 700;


  //intial pos of ball
  intballX = worldWidth / 2;
  intballY = worldHeight / 2;

  //add ball and set colider and bonce
  ball = this.physics.add.sprite(intballX, intballY, "ball");
  ball.setCollideWorldBounds(true);
  ball.setBounce(1);

  //ball size
  const ballWidth = ball.body.width;


  //player width and height at intial
  intPlayer1X = ballWidth / 2 + 10;
  intPlayer1Y = worldHeight / 2;
  intPlayer2X = worldWidth - (ballWidth / 2 + 10);
  intPlayer2Y = worldHeight / 2;

  //add players
  player1 = this.physics.add.sprite(intPlayer1X, intPlayer1Y, "pc");
  player1.setImmovable(true);
  player1.setCollideWorldBounds(true);
  player1.score = 0;
  this.physics.add.collider(ball, player1, ballHitsPaddle);
  player2 = this.physics.add.sprite(intPlayer2X, intPlayer2Y, "player");
  player2.setImmovable(true);
  player2.setCollideWorldBounds(true);
  player2.score = 0;
  this.physics.add.collider(ball, player2, ballHitsPaddle);

  //get input  for momvemnt with arrows and w and s
  cursors = this.input.keyboard.createCursorKeys();
  keys.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  keys.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

// add score text
  player1ScoreText = this.add.text(100, 20, "Blue 0", {
    fontSize: "50px",
    fill: "#F0A500",
  });
  player1ScoreText.setOrigin(0.5);
  p2score = this.add.text(worldWidth - 100, 20, "Red 0", {
    fontSize: "50px",
    fill: "#F0A500",
  });
  p2score.setOrigin(0.5);

  //intial start fx
  randstart();
}

function update() {

    // are we still playing and scores 
  if (isPlaying ) {
    //   if ball goes by him
    if (ball.body.x > player2.body.x) {
      isPlaying = false;
      player1.score++;
      P1Score = true;
      P2Score = false;
      ball.setVelocity(0, 0);
    }

    if (ball.body.x < player1.body.x) {
      isPlaying = false;
      player2.score++;
      P1Score = false;
      P2Score = true;
      ball.setVelocity(0, 0);
    }
  }

  player1.body.setVelocityY(0);
  player2.body.setVelocityY(0);

  if (isPlaying) {
    if (keys.w.isDown) {
      player1.body.setVelocityY(-400);
    }
    if (keys.s.isDown) {
      player1.body.setVelocityY(400);
    }
    if (cursors.up.isDown) {
      player2.body.setVelocityY(-400);
    }
    if (cursors.down.isDown) {
      player2.body.setVelocityY(400);
    }
  }

  if (P1Score || P2Score) {
    resetPositions();
    randstart();
  }
}

function resetPositions() {
  player1ScoreText.setText("Blue " + player1.score);
  p2score.setText("Red " + player2.score);
  player1.setPosition(intPlayer1X, intPlayer1Y);
  player2.setPosition(intPlayer2X, intPlayer2Y);
  ball.setPosition(intballX, intballY);
}

function ballHitsPaddle(ball, player) {
  ball.body.setVelocityY(8 * (ball.y - player.y));
  ball.body.setAccelerationX(ball.x - player.x);
}

function randstart() {
  ball.setVelocityX(P1Score ? -intx : intx);
  ball.setVelocityY(inty);
  isPlaying = true;
  P1Score = false;
  P2Score = false;
}
