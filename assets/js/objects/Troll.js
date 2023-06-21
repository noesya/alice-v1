import { TROLLS } from "js/data/trolls";
import Character from "./Character";
import { game } from "js/Game";

const ACTIONS = ["idle", "idle", "idle", "left", "right", "up", "down"];
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
        },
        reversedWalk: {
          steps: 6,
          y: 200
        }
      }
    });
    this.type = "troll";
    this.changeActionChance = 0.05;
    this.speed = 2;
    this.action = "idle";
    this.slang = "";
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
        break;
      case "down":
        y = 1;
        break;
      case "left":
        x = -1;
        break;
    }

    if (x || y) {
      this.move(x, y);
      this.setAnimation(x > 0 ? "walk" : "reversedWalk");
    } else {
      this.setAnimation("idle");
    }
  }
  speak() {
    game.drawText(this.slang, this.x - this.width/2, this.y - this.height);
  }
  onCollide() {
    super.onCollide();
    const slang = TROLLS.slangs[Math.round(Math.random() * (TROLLS.slangs.length-1))];
    // popinTroll.show();
    // popinTroll.element.querySelector('p').innerHTML = slang;
    this.slang = slang;
  }
  update() {
    this.updateMovment();
    super.update();
    if (this.slang) this.speak(this.slang);
  }
}