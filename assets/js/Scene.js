import Hero from './objects/Hero';
import Map from './objects/Map';

export default class Scene {
  constructor(game) {
    this.game = game;
    this.setup();
  }
  setup() {
    this.map = new Map();
    this.hero = new Hero();
    this.hero.x = this.map.width / 2;
    this.hero.y = this.map.height / 2;
  }
  update() {
    this.map.update();
    this.hero.update();
  }
}