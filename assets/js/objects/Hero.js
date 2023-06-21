import { game } from "js/Game";
import Controls from "js/Controls";
import Character from "./Character"

export default class Hero extends Character {
  constructor() {
    super({
      width: 100,
      height: 100,
      src: '/assets/images/characters/alice.png',
      animations: {
        idle: {
          steps: 6,
          y: 0
        },
        walk: {
          steps: 6,
          y: 100
        }
      }
    });
    this.controls = new Controls();
    this.direction = 1;
    this.name = "hero"

    this.setAnimation("idle");
  }
  listenControls() {
    let x = 0, y = 0;
    if (this.controls.actions.left) {
      x = -1
      this.flipY = true;
    } else if (this.controls.actions.right) {
      x = 1
      this.flipY = false;
    }
    if (this.controls.actions.up) {
      y = -1
    } else if (this.controls.actions.down) {
      y = 1
    }
    if (x || y) {
      this.move(x, y);
      this.setAnimation("walk");
    } else {
      this.setAnimation("idle");
    }
  }
  update() {
    this.listenControls();
    super.update();
  }
}