import { game } from "js/Game";
import Thing from "./Thing";

export default class Sprite extends Thing {
  get animation () {
    return this.animations[this.currentAnimation]
  }
  constructor(parameters) {
    super(parameters)
    this.tick = 0;
    this.data = parameters.data;
    this.animations = parameters.animations;
    this.currentAnimation = null;
  }
  setAnimation(animationName) {
    this.tick = 0;
    this.currentAnimation = animationName;
  }
  update() {
    if (!this.currentAnimation || !this.ready) return;
  
    this.tick += 1 / 10;
    const i = Math.round(this.tick) % this.animation.steps;

    game.ctx.drawImage(this.image, this.width * i, this.animation.y, this.width, this.height, this.x, this.y, this.width, this.height);
  }
}