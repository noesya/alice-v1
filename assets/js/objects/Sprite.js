import Thing from "./Thing";

export default class Sprite extends Thing {
  constructor(parameters) {
    super(parameters)
    this.tick = 0;
    this.data = parameters.data;
    this.animations = parameters.animations;
    this.currentAnimation = null;
  }
  set(animationName) {
    this.tick = 0;
    this.currentAnimation = animationName;
  }
  update() {
    if (!this.currentAnimation) return;
  
    this.tick += 1;

    ctx.drawImage(this.src, this.width * this.tick, 0, this.width, this.height, this.x, this.y, this.width, this.height);
  }
}