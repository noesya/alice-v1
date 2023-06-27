import { game } from "js/Game";
import Thing from "./Thing";
import { WORLD } from "../data/world";

export default class Map extends Thing {
  constructor() {
    super({
      width: WORLD.width,
      height: WORLD.height,
      srcWidth: WORLD.width,
      srcHeight: WORLD.height,
      src: '/assets/images/map/map.png'
    })
  }
}