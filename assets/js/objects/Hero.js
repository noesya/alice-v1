import { game } from "js/Game";
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
    this.speed = 10;
    this.direction = 1;
    this.name = "hero"

    this.setAnimation("idle");

    this.listen()
  }
  listen() {
    window.addEventListener('keydown', e => {
      let isMoving = false;
      if (e.code === 'ArrowRight') {
        this.move(this.speed, 0);
        this.flipY = false;
        isMoving = true;
      } else if (e.code === 'ArrowDown') {
        this.move(0, this.speed);
        isMoving = true;
      } else if (e.code === 'ArrowLeft') {
        this.move(-this.speed, 0);
        this.flipY = true;
        isMoving = true;
      } else if (e.code === 'ArrowUp') {
        this.move(0, -this.speed);
        isMoving = true;
      }

      if (isMoving) {
        this.setAnimation("walk");
      }
    });

    window.addEventListener('keyup', e => {
      this.setAnimation("idle");
    });
  }
  update() {
    // game.ctx.translate(this.width, 0);
    // game.ctx.scale(this.direction, 1);
    super.update();
  }
}