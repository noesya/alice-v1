import { game } from "js/Game";
import Thing from "./Thing";
import { WORLD } from "../data/world";

export default class Map extends Thing {
  constructor() {
    super({
      width: WORLD.width/2,
      height: WORLD.height/2,
      srcWidth: WORLD.width,
      srcHeight: WORLD.height,
      src: '/assets/images/map/map.png'
    })
  }
}