import GameState from 'states/GameState';
import {GameScreen} from 'global';
class Game extends Phaser.Game {

	constructor() {
		super(GameScreen.Width , GameScreen.Height , Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();
