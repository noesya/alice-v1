import { game } from "js/Game";
import Thing from "./Thing";

export default class Sprite extends Thing {
  get animation () {
    return this.animations[this.currentAnimation]
  }
  constructor(parameters) {
    super(parameters)
    this.tick = 0;
    this.flipY = false;
    this.data = parameters.data;
    this.animations = parameters.animations;
    this.currentAnimation = null;
  }
  setAnimation(animationName) {
    if (this.currentAnimation === animationName) return;

    this.tick = 0;
    this.currentAnimation = animationName;
  }
  update() {
    if (!this.currentAnimation || !this.ready) return;
  
    this.tick += 1 / 5;
    const i = Math.round(this.tick) % this.animation.steps;

    // if (this.flipY) {
    //   game.ctx.save();
    //   game.ctx.scale(-1, 1);
    //   game.drawImage(this.image, this.width * (i + 1), this.animation.y, -this.width, this.height, -this.x + this.width/2, this.y, -this.width, this.height);
    //   game.ctx.restore();
    // } else {
      game.drawImage(this.image, this.width * i, this.animation.y, this.width, this.height, this.x, this.y, this.width, this.height);
    // }
  }
}