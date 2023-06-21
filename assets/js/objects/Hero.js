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
  listen() {
    window.addEventListener('keydown', e => {
      let isMoving = false,
        x = 0,
        y = 0;

      if (e.code === 'ArrowRight') {
        this.flipY = false;
        isMoving = true;
        x = 1;
      } else if (e.code === 'ArrowLeft') {
        this.flipY = true;
        isMoving = true;
        x = -1;
      }

      if (e.code === 'ArrowDown') {
        isMoving = true;
        y = 1;
      } else if (e.code === 'ArrowUp') {
        isMoving = true;
        y = -1;
      }

      this.move(x, y);

      if (isMoving) {
        this.setAnimation("walk");
      }
    });

    window.addEventListener('keyup', e => {
      this.setAnimation("idle");
    });

    this.move(this.speed, 0);
  }
  update() {
    let x, y;
    if (this.controls.actions.left) {
      x = -1
    } else if (this.controls.actions.right) {
      x = 1
    }
    if (this.controls.actions.up) {
      y = -1
    } else if (this.controls.actions.down) {
      y = 1
    }
    if (x || y) {
      console.log(x, y)
      this.move(x, y);
      this.setAnimation("walk");
    }

    super.update();
  }
}