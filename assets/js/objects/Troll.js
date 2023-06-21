import Character from "./Character"

export default class Troll extends Character {
  constructor() {
    super({
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
    this.direction = 1;
    this.setAnimation("idle");
  }
}