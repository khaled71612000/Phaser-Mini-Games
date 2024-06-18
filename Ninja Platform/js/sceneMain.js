var cursors
class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        //
        //preload all imagaes
        //
        this.load.atlas("ninja", "images/ninja.png", "images/ninja.json");
        this.load.image("brown", "images/tiles/brickBrown.png");
        this.load.image("grey", "images/tiles/brickGrey.png");
    }
    create() {
        //
        //add a physics group
        //
        this.brickGroup = this.physics.add.group();
        //
        //add the ninja
        //      
        this.ninja = this.physics.add.sprite(200, -100, "ninja");
        //
        //scale the ninja
        Align.scaleToGameW(this.ninja, .2);
        //
        //get the frame names       
        //
        var frameNames = this.textures.get('ninja').getFrameNames();
        // console.log(frameNames);
        // 
        // make the animations
        // 
        this.makeAnims();
        //play idle animation
        this.ninja.play("idle");
        window.ninja = this.ninja;
        //
        //
        //make an align grid
        this.aGrid = new AlignGrid({
            scene: this,
            rows: 11,
            cols: 11
        });
        //
        //show the numbers
        //
        this.aGrid.showNumbers();
        //
        //make the floor
        //
        this.makeFloor(88, 98, "brown");
        //
        //add gravity to the ninja to make it fall
        //
        this.ninja.setGravityY(200);
        //
        //set a collider between the ninja and the floor
        //
        this.physics.add.collider(this.ninja, this.brickGroup);
    }
    placeBlock(pos, key) {
        //
        //add the block to the scene. Position is not important yet
        //
        let block = this.physics.add.sprite(0, 0, key);
        this.brickGroup.add(block);
        //
        //place the group
        //
        this.aGrid.placeAtIndex(pos, block);
        //
        //make the block immovable
        //
        block.setImmovable();
        //
        //add the block to the group
        //
        Align.scaleToGameW(block, .1);
    }
    makeFloor(fromPos, toPos, key) {
        for (var i = fromPos; i < toPos + 1; i++) {
            this.placeBlock(i, key);
        }
    }
    makeAnims() {
        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Attack__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Jump__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'slide',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Slide__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'jumpAttack',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Jump_Attack__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'jumpThrow',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Jump_Throw__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Idle__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'dead',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Dead__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('ninja', {
                start: 0,
                end: 9,
                zeroPad: 3,
                prefix: 'Run__',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
        cursors = this.input.keyboard.createCursorKeys();

    }
    update() {
        if (cursors.left.isDown) {
            ninja.setVelocityX(-150);
        
          } else if (cursors.right.isDown) {
            ninja.setVelocityX(150);
        
          } else {
            ninja.setVelocityX(0);
          }
        
          if (cursors.up.isDown && ninja.body.touching.down) {
            ninja.setVelocityY(-350);
          }
          if (cursors.down.isDown) {
            ninja.setVelocityY(350);
          }
    }
}