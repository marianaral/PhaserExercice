export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }
    preload(){

    }
    create() {
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0x5DFA04, 1);
        this.graphics.fillRect((this.scale.width / 2) - (this.scale.width / 8),(this.scale.height / 2) - (this.scale.width / 8), this.scale.width / 4, this.scale.width / 4);
        this.graphics.fillStyle(0x04AFFA, 1);
        this.graphics.fillRect((this.scale.width / 2) - (this.scale.width / 16),(this.scale.height / 2) - (this.scale.width  / 16), this.scale.width / 8, this.scale.width / 8);
        var sprite = this.add.sprite(this.scale.width/2, this.scale.height/2, 'gatete2');
        sprite.anims.play('gatetes');
    }
}