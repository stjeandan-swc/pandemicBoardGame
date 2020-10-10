class BootScene extends Phaser.Scene {

    constructor() {
        super('Boot');
    }

    // Phaser life cycle function for loading assets.
    preload() {
        this.loadImages();
    }

    // load all image assets.
    loadImages() {
        this.load.image('bgImage', 'assets/images/pandemic_board.jpg');
        this.load.image('outbeakMarkerImgage', 'assets/images/outbreak_Marker.png');
        this.load.image('infectionMarkerImage', 'assets/images/infection_Marker.png');

        this.temp = this.load.image('temp', 'assets/images/infection_Marker.png');
    }

    // Phaser life cycle function for create and instance of the assets.
    create() {
        this.scene.start('Game');
    }

    initializeLocations() {
        //const Atlanta = new Location()
    }
}