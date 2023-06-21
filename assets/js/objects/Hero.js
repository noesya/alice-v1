import Character from "./Character"

export default class Hero extends Character {
  constructor() {
    super({
      width: 30,
      height: 42,
      src: '/assets/images/characters/alice/alice-character.png',
      animations: {
        idle: {
          steps: 4,
          y: 0
        },
        walk: {
          steps: 6,
          y: 100
        }
      }
    });
    this.speed = 10;
    this.name = "hero"

    this.setAnimation("idle");

    this.listen()
  }
  listen() {
    window.addEventListener('keydown', e => {
      let isMoving = false;
      if (e.code === 'ArrowRight') {
        this.move(this.speed, 0);
        isMoving = true;
      } else if (e.code === 'ArrowDown') {
        this.move(0, this.speed);
        isMoving = true;
      } else if (e.code === 'ArrowLeft') {
        this.move(-this.speed, 0);
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
    super.update();


  }
}