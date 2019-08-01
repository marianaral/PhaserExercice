// import LU from '../display/layout-utils';
// import assets from '../../embed/assets.json';
// embedded.assets = embedded.assets || assets;
// import './../strings';
// import bg_night_base from '../../assets/backgrounds/bg_night_base.jpg';

import gatete1 from '../../assets/gatete1.jpg';
import gatete2 from '../../assets/gatete2.jpg';

// import bgAtlasImg from '../../assets/backgrounds/backgrounds.png';
// import bgAtlasData from '../../assets/backgrounds/backgrounds.json';

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('PreloaderScene');
    }

    preload() {
        // console.log('Preload-Preloader')
        // this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => { console.log(gameSize, baseSize, displaySize, resolution); });
        var progress = this.progress = this.add.graphics();

        this.load.on('progress', (value) => {
            progress.clear();
            // progress.lineStyle(5, 0xFF00FF);
            progress.fillStyle(0xffffff, 1);
            progress.fillRect((this.scale.width / 2) - (this.scale.width * 0.45), this.scale.height / 2 - this.scale.height * 0.1, this.scale.width * value, this.scale.height * 0.05);
            console.log('Progress-bar');
        });

        this.load.image('gatete1', gatete1);
        this.load.image('gatete2', gatete2);

        // this.graphics.lineStyle(8,0xdaac01);
        // this.graphics.strokeCircle(this.scale.width/2,this.scale.height/2,500)
        // this.graphics.fillStyle(0xfae704, 1);
        // this.graphics.fillCircle(this.scale.width/2,this.scale.height/2,200);

        // this.graphics.fillRect(50, 250, 100, 100);
        // // square1.fillRect(0, (height / 2) - (height * 0.05), width, (height * 0.1));
        // // // square2.fillRect(50,250,100,100);
        // var progress = this.progress = this.add.graphics();
        // const { width, height } = this.scale;

        // this.load.on('progress', (value) => {
        //     progress.clear();
        //     progress.fillStyle(0xffffff, 1);
        //     progress.fillRect(0, (height / 2) - (height * 0.05), width * value, (height * 0.1));
        // });

        // const scene = this;

        // this.load.on('complete', () => { 
        //     this.input.on('pointerdown', () => {
        //         progress.destroy();
        //         scene.scale.startFullscreen();
        //         this.scene.start('MenuScene');
        //     });
        // });

        // this.load.audio('musicamenu', 'src/assets/music/Hearts_forged_with_fire.mp3');

        // this.load.atlas('atlas', atlasImg, atlasData);
        // this.load.atlas('bg_atlas', bgAtlasImg, bgAtlasData);

        // this.load.image('bg_night_base', bg_night_base);

    }

    create() {
        // const animSpeed = 12;//8
        // [
        //     // Men
        //     ['knight_m', 3, 3],
        //     ['wizzard_m', 3, 3],
        //     ['elf_m', 3, 3],

        //     // Women
        //     ['knight_f', 3, 3],
        //     ['wizzard_f', 3, 3],
        //     ['elf_f', 3, 3],

        //     // Zombies
        //     ['big_zombie', 3, 3],
        //     ['zombie', 3, 3],
        //     ['tiny_zombie', 3, 3],

        //     // Orcs
        //     ['ogre', 3, 3],
        //     ['orc_warrior', 3, 3],
        //     ['goblin', 3, 3],

        //     // Demons
        //     ['big_demon', 3, 3],
        //     ['chort', 3, 3],
        //     ['imp', 3, 3],

        //     // Undead
        //     ['necromancer', 3, 3],
        //     ['masked_orc', 3, 3],
        //     ['skelet', 3, 3],

        //     // Misc
        //     ['ice_zombie', 3, 3],
        //     ['orc_shaman', 3, 3],
        //     ['wogol', 3, 3],
        //     ['swampy', 3, 3],
        //     ['muddy', 3, 3],
        // ].forEach((el) => {
        //     this.anims.create({
        //         key: `${el[0]}-walk`,
        //         frameRate: animSpeed,
        //         frames: this.anims.generateFrameNames('atlas', {
        //             prefix: `${el[0]}/${el[0]}_run_anim_f`,
        //             suffix: '.png',
        //             start: 0,
        //             end: el[1],
        //             zeroPad: 1,
        //         }),
        //         repeat: -1
        //     });

        //     this.anims.create({
        //         key: `${el[0]}-attack`,
        //         frameRate: animSpeed,
        //         frames: this.anims.generateFrameNames('atlas', {
        //             prefix: `${el[0]}/${el[0]}_idle_anim_f`,
        //             suffix: '.png',
        //             start: 0,
        //             end: el[2],
        //             zeroPad: 1,
        //         }),
        //     });
        // });


        this.anims.create({
            key: `gatetes`,
            frameRate: 1,
            frames: [
                { key: 'gatete1' },
                { key: 'gatete2' },
            ],
            repeat: -1
        });
        this.progress.destroy(); // preguntar a Joaquín que hacía esto
        this.scene.start('MenuScene');
    }
}
