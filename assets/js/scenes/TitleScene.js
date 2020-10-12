class TitleScene extends Phaser.Scene {

    constructor() {
        super('Title');
         
    }

    create() {
        const bgImage = this.add.image(0, 0, 'bgImage');
        bgImage.setOrigin(0, 0);

        // two player selection
        const twoPlayerSelection = this.add.rectangle(500, 200, 200, 50, 0x6666ff);
        this.add.text(500, 200, 'Two Player', {fontFamily: 'Times, serif'});

        twoPlayerSelection.setInteractive().on('pointerdown', () => {
            this.scene.start('Game', { playerCount: 2 });
        });

        // three player selection
        const threePlayerSelection = this.add.rectangle(500, 275, 200, 50, 0x6666ff);
        this.add.text(500, 275, 'Three Player', {fontFamily: 'Times, serif'});

        threePlayerSelection.setInteractive().on('pointerdown', () => {
            this.scene.start('Game', { playerCount: 3 });
        });

        // four player selection button
        const fourPlayerSelection = this.add.rectangle(500, 350, 200, 50, 0x6666ff);
        this.add.text(500, 350, 'four Player', {fontFamily: 'Times, serif'});

        fourPlayerSelection.setInteractive().on('pointerdown', () => {
            this.scene.start('Game', { playerCount: 4 });
        });
    }
}