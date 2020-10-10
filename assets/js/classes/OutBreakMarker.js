class OutBreakMarker extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        this.scene = scene;
        this.x = x;
        this.y = y;

        scene.add.existing(this);
    }
}