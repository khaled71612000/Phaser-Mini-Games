var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);
var platforms;
var player;
let cursors;
var score = 0;
var scoreText;
gameOver = false;

var starPos = {
  x: 100,
  y: 200,
};

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("platform", "assets/platform.png");
  this.load.image("star", "assets/star.png");
  this.load.image("bomb", "assets/bomb.png");
  this.load.spritesheet("dude", "assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
}

function create() {
  this.add.image(400, 300, "sky");
  // this.add.image(400, 300, 'star');

  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, "platform").setScale(2).refreshBody();
  platforms.create(650, 400, "platform");
  platforms.create(700, 250, "platform");
  platforms.create(0, 250, "platform");
  platforms.create(120, 400, "platform");

  // for (let x = 0; x < 5; x++) {
  //   var star = this.physics.add.image(starPos.x, starPos.y, "star");
  //   star.setCollideWorldBounds = true;
  //   this.physics.add.collider(star, platforms);
  //   starPos.x += 150;
  // }

  stars = this.physics.add.group({
    key: "star",
    repeat: 9,
    setXY: {
      x: 20,
      y: 15,
      stepX: 80,
    },
  });

  stars.children.iterate((star) => {
    star.setBounceY(Math.floor(Math.random() + 0.2) * 0.5);
    star.setCollideWorldBounds(true);
  });

  player = this.physics.add.sprite(200, 300, "dude");
  player.setCollideWorldBounds(true);
  //   make player bounce
  //   player.setBounce(0.1);

  // hook player with platform group to collide and stop
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);
  this.physics.add.overlap(player, stars, onPlayerCollect, null, this);

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "idle",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  cursors = this.input.keyboard.createCursorKeys();

  scoreText = this.add.text(16, 16, "score: 0", {
    fontSize: "32px",
    fill: "#000",
  });

bombs = this.physics.add.group({
  key: "bomb",
  repeat: 8,
  setXY: {
    x: 89,
    y: 100,
    stepX: 80,
  },
});

bombs.children.iterate((bomb) => {
  bomb.setBounce(Math.floor(Math.random() + 0.8) * 1);
});

this.physics.add.collider(bombs, platforms);
this.physics.add.collider(player, bombs, hitBomb, null, this);


}
function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-150);

    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(150);

    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("idle");
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-350);
  }
  if (cursors.down.isDown) {
    player.setVelocityY(350);
  }
}

function onPlayerCollect (player, star)
{
    star.disableBody(true, true);

    score += 10;

    if(gameOver) {
      scoreText.setText('You Lost!');
    }else if (score == 100) {
      scoreText.setText('Winner');
    }else {
      scoreText.setText('Score: ' + score);
    }

    if (stars.countActive(true) === 0)
    {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

    }
}

function hitBomb (player, bomb)
{
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('idle');
    gameOver = true;
}