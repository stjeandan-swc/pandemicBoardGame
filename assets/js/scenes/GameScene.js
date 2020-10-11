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

        // black locations
        const Algiers = new Locations(this, 587, 349, 'temp');
        const Cairo = new Locations(this, 649, 365, 'temp');
        const Isanbul = new Locations(this, 660, 294, 'temp');
        const Moscow = new Locations(this, 727, 247, 'temp');
        const Baghdad = new Locations(this, 719, 338, 'temp');
        const Riyadh = new Locations(this, 730, 412, 'temp');
        const Tehran = new Locations(this, 782, 286, 'temp');
        const Karachi = new Locations(this, 799, 364, 'temp');
        const Mumbia = new Locations(this, 807, 426, 'temp');
        const Dehli = new Locations(this, 858, 341, 'temp');
        const Chennai = new Locations(this, 872, 471, 'temp');
        const Kolkata = new Locations(this, 918, 361, 'temp');

        // red locations
        const Beijing = new Locations(this, 964, 266, 'temp');
        const Seoul = new Locations(this, 1037, 262, 'temp');
        const Shanghai = new Locations(this, 969, 324, 'temp');
        const Tokyo = new Locations(this, 1095, 296, 'temp');
        const Osaka = new Locations(this, 1103, 358, 'temp');
        const Taipei = new Locations(this, 1043, 383, 'temp');
        const HongKong = new Locations(this, 977, 394, 'temp');
        const Bangkok = new Locations(this, 929, 431, 'temp');
        const Jakarta = new Locations(this, 929, 542, 'temp');
        const HoChiMinhCity = new Locations(this, 980, 490, 'temp');
        const Manila = new Locations(this, 1060, 485, 'temp');
        const Sydney = new Locations(this, 1109, 655, 'temp');
    }
}