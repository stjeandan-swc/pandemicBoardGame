
// Setup the game configuration Object
const config = {
    type: Phaser.Auto,
    width: 1200,
    height: 849,
    scene: [
        BootScene,
        GameScene,
        UiScene,
        TitleScene
    ]
}

// Create instance of the game and pass it the config object
const game = new Phaser.Game(config);
