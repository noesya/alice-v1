import Character from "./Character"

export default class Hero extends Character {
  constructor() {
    super({
      width: 30,
      height: 42,
      src: '/assets/images/characters/alice/alice-character.png',
      animations: {
        walk: {
          steps: 5
        }
      }
    })

    this.name = "hero"

    this.setAnimation("walk")
  }
}