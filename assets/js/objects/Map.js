import Thing from "./Thing";

export default class Map extends Thing {
  constructor() {
    super({
      width: 1024,
      height: 768,
      src: '/assets/images/map/map.jpg'
    })
  }
}