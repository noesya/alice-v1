import Thing from "./Thing";
import { WORLD } from "../data/world";

export default class Map extends Thing {
  constructor() {
    super({
      width: WORLD.width,
      height: WORLD.height,
      srcWidth: WORLD.width * 2,
      srcHeight: WORLD.height * 2,
      src: '/assets/images/map/map.png'
    })
    this.setCollision();
  }
  setCollision() {
    WORLD.collisions.matrice.forEach((line) => {
      
    });
  }
}