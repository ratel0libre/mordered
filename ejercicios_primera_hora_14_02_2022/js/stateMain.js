var StateMain={
    preload:function(){
        game.load.image("background", "imagenes/backgroundCuphead.jpg");
     game.load.spritesheet("plane", "imagenes/plane1", 445, 285, 2);

    },
    create:function(){ 
        this.bottom= game.height-120;
        this.top = 0;
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.background = game.add.tileSprite(0, 0,game.width, game.height, 'background');
        this.plane = game.add.sprite(50,0, "plane");
        this.plane.scale.setTo(0.4);
        this.plane.animations.add('fly', [0,1], 1, true);
        this.plane.animations.play('fly');
        this.background.autoScroll(-100, 0);
        game.physics.enable([this.plane], Phaser.Physics.ARCADE);


    },
    speed:function(){
        this.plane.body.velocity.y = -300;

    },
    update:function(){
        if(game.input.activePointer.isDown){
            this.speed();
        }
        if(this.plane.y < this.top){
            this.plane.y = this.top;
            this.plane.body.gravity.y = 0;
        }
        if(this.plane.y > this.bottom){
            this.plane.y = this.bottom;
            this.plane.body.gravity.y = 0;
        }else{
            this.plane.body.gravity.y = 500;
        }

    }
}