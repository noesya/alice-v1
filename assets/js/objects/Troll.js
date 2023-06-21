import Character from "./Character"

const ACTIONS = ["idle","idle","idle", "left", "right", "up", "down"];
export default class Troll extends Character {
  constructor({x = 0, y = 0}) {
    super({
      x: x,
      y: y,
      width: 100,
      height: 100,
      src: '/assets/images/characters/troll.png',
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
    this.changeActionChance = 0.05;
    this.speed = 2;
    this.action = "idle";
    this.setAnimation("idle");
  }
  updateMovment() {
    let x = 0, y = 0;

    if (Math.random() < this.changeActionChance) {
      this.action = ACTIONS[Math.round(Math.random() * (ACTIONS.length-1))]
    }

    switch(this.action) {
      case "up":
        y = -1;
        break;
      case "right":
        x = 1;
        this.flipY = false;
        break;
      case "down":
        y = 1;
        break;
      case "left":
        x = -1;
        this.flipY = true;
        break;
    }

    if (x || y) {
      this.move(x, y);
      this.setAnimation("walk");
    } else {
      this.setAnimation("idle");
    }
  }
  update() {
    this.updateMovment();
    super.update();
  }
}