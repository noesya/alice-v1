import { game } from "js/Game";
import Thing from "./Thing";

export default class Map extends Thing {
  constructor() {
    super({
      width: game.canvas.width,
      height: game.canvas.height,
      srcWidth: 4096,
      srcHeight: 3072,
      src: '/assets/images/map/map.jpg'
    })
  }
}