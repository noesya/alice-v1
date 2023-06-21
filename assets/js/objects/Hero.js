import Character from "./Character"

export default class Hero extends Character {
  constructor() {
    super({
      width: 30,
      height: 42,
      src: '/assets/images/characters/alice/alice-character.png'
    })
    this.name = "hero"
    console.log(this)

  }
}