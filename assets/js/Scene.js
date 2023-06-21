import Hero from './objects/Hero';

export default class Scene {
  constructor(game) {
    this.game = game;
    console.log('i am the scene');
    this.setup();
  }
  setup() {
    this.hero = new Hero();
  }
  update() {
    this.hero.update();
  }
}