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

    // temperary function to find x and y positions.
    setLocations() {
        // blue locations
        const Atlanta = new Locations(this, 237, 326, 'temp');
        const Chicago = new Locations(this, 206, 265, 'temp');
        const SanFrancisco = new Locations(this, 100, 295, 'temp');
        const Montreal = new Locations(this, 289, 262, 'temp');
        const NewYork = new Locations(this, 353, 271, 'temp');
        const Washington = new Locations(this, 325, 321, 'temp');
        const London = new Locations(this, 507, 222, 'temp');
        const Madrid = new Locations(this, 496, 303, 'temp');
        const Paris = new Locations(this, 569, 263, 'temp');
        const Essen = new Locations(this, 589, 208, 'temp');
        const Milan = new Locations(this, 624, 247, 'temp');
        const StPetersburge = new Locations(this, 680, 190, 'temp');

        // yellow locations
        const LosAngeles = new Locations(this, 118, 378, 'temp');
        const MexicoCity = new Locations(this, 194, 406, 'temp');
        const Miami = new Locations(this, 289, 393, 'temp');
        const Bogota = new Locations(this, 282, 476, 'temp');
        const Lima = new Locations(this, 253, 566, 'temp');
        const Santiago = new Locations(this, 264, 658, 'temp');
        const BuenosAires = new Locations(this, 351, 641, 'temp');
        const SanPaulo = new Locations(this, 398, 579, 'temp');
        const Lagos = new Locations(this, 559, 462, 'temp');
        const Kinshasa = new Locations(this, 612, 520, 'temp');
        const Johannesburg = new Locations(this, 659, 603, 'temp');
        const Khartoum = new Locations(this, 665, 447, 'temp');
    }
}