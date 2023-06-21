import { game } from "js/Game";
import Thing from "./Thing";
import { WORLD } from "../data/WORLD";

export default class Map extends Thing {
  constructor() {
    super({
      width: 2048,
      height: 1536,
      srcWidth: WORLD.width,
      srcHeight: WORLD.height,
      src: '/assets/images/map/map.png'
    })
  }
}