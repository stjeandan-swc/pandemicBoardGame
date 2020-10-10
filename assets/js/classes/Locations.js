class Locations extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.x = x;
        this.y = y;
        this.texture = texture;
        this.connectedCities = [];

        // used to track the infection totals.
        this.redCount = 0;
        this.blueCount = 0;
        this.blackCount = 0;
        this.yellowCount = 0;

        scene.add.existing(this);
        this.do();
    }

    do() {
        this.setScale(0.65, 0.65);
    }
}