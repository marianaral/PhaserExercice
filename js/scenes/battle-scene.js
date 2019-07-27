export default class BattleScene extends Phaser.Scene {
    constructor() {
        super('BattleScene');
    }
    preload() {
    }
    create() {
        // this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => { console.log(gameSize, baseSize, displaySize, resolution); });
        this.graphics = this.add.graphics();
        // var graphics = new MyGraphics(scene, options);
        // var graphics = this.graphics = this.add.graphics();
        //this.graphics.moveTo(100,100)
        // this.graphics.lineTo(100,300)
        this.graphics.lineStyle(8, 0xffffff);
        // graphics.lineStyle(5, 0xFF00FF, 1.0)
        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillCircle(this.scale.width / 2, this.scale.height / 2, 500);
        this.graphics.lineStyle(8, 0xdaac01);
        this.graphics.strokeCircle(this.scale.width / 2, this.scale.height / 2, 500)
        this.graphics.fillStyle(0xfae704, 1);
        this.graphics.fillCircle(this.scale.width / 2, this.scale.height / 2, 200);
        // this.graphics.velocity = {x:0, y:1};
        // this.graphics.acceleration = {x:0, y:0.9};

        let callback = function(pointer){
            this.tweens.add({
                targets: this.graphics,
                y: 200,
                // yoyo: true,
                ease: 'Bounce',
                duration: 2000,
                // repeat: -1
                onComplete: function(){
                    this.graphics.y = 0;
                },
                onCompleteScope: this
            })
        };
        this.input.on('pointerdown', callback, this)
        
    }
    update() {
        // this.graphics.y += this.graphics.velocity.y;
        // console.log(this.graphics.y)
        // this.graphics.velocity.y *= 1.1;
        // if (this.graphics.y >= 50 || this.graphics.y <= 0){
        //     this.graphics.velocity.y *= -1;
        // } 
        //     if (this.graphics.y < 50){
        //         this.graphics.y += 1;
        //     } else if (this.graphics.y === 50){
        //         this.graphics.y += -1;
        //     }
    }
}
