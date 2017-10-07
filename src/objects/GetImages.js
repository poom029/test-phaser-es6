class GetImages extends Phaser.Image{
    constructor(game, x, y, key, frame){
        super(game, x, y, key, frame);
    }
    loadImage(key, frame){
        this.game.load.image(key, frame);
    }
}
export default GetImages;