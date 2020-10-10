class GameScene extends Phaser.Scene {

    constructor() {
        super('Game');
    }

    // Phaser life cycle function for create and instance of the assets.
    create() {
        // create the background image then set it's origin point
        const bgImage = this.add.image(0, 0, 'bgImage');
        bgImage.setOrigin(0, 0);

        // create an instance of the outbreak marker
        const outbeakMarker = new OutBreakMarker(this, 93, 475, 'outbeakMarkerImgage');
        // create an instance of the infections marker
        const infectionMarker = new InfectionsMarker(this, 772, 197, 'infectionMarkerImage');

        this.setLocations();
    }

    setLocations() {
        const Atlanta = new Locations(this, 237, 326, 'temp');
        const Chicago = new Locations(this, 206, 265, 'temp');
    }
}