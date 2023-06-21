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
  }
  update() {
    this.map.update();
    this.hero.update();
  }
}