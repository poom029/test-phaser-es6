import RainbowText from 'objects/RainbowText';
import GetImages from 'objects/GetImages';
import {Images} from 'global';
class GameState extends Phaser.State {

	constructor(){
		super();
	}

	preload(){
		let image = new GetImages(this.game, 0, 0);
		image.loadImage('pic', Images.lander);
		image.loadImage('pic2', Images.logo);
		
	}
	create() {
		this.game.add.image(250,250,'pic2');
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "- phaser kuyyyyy -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);
	}

	update(){
		
	}
}

export default GameState;
