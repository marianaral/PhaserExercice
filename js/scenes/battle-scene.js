class BattleScene extends Phaser.Scene {
    constructor() {
        super('BattleScene');
    }
    preload() {

    }
    create() {
        console.log('Hola');
        // this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => { console.log(gameSize, baseSize, displaySize, resolution); });
        this.graphics = this.add.graphics();
        // var graphics = new MyGraphics(scene, options);
        // var graphics = this.graphics = this.add.graphics();
        //this.graphics.moveTo(100,100)
        // this.graphics.lineTo(100,300)
        this.graphics.lineStyle(8, 0xffffff);
        // graphics.lineStyle(5, 0xFF00FF, 1.0)
        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillCircle(this.scale.width/2,this.scale.height/2,500);
        this.graphics.lineStyle(8,0xdaac01);
        this.graphics.strokeCircle(this.scale.width/2,this.scale.height/2,500)
        this.graphics.fillStyle(0xfae704, 1);
        this.graphics.fillCircle(this.scale.width/2,this.scale.height/2,200);
    }
    update() {

    }
}