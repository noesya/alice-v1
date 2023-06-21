import {CITIES} from './data/cities';
import {TROLLS} from './data/trolls';
import {WORLD} from './data/world';
import Hero from './objects/Hero';
import City from './objects/City';
import Map from './objects/Map';
import Troll from './objects/Troll';

export default class Scene {
  constructor(game) {
    this.game = game;
    this.cities = [];
    this.trolls = [];
    this.setup();
  }
  setup() {
    this.map = new Map();
    this.hero = new Hero();
    this.hero.x = this.map.width / 2;
    this.hero.y = this.map.height / 2;
    CITIES.forEach(city => {
        this.cities.push(new City(city));
    });

    this.addTrolls();
  }
  addTrolls() {
    let i = 0;
    for (i = 0; i < TROLLS.quantity; i += 1) {
      this.trolls.push(new Troll({
        x: Math.round(WORLD.width  / 2 * Math.random()),
        y: Math.round(WORLD.height  / 2 * Math.random())
      }));
    }
  }
  update() {
    this.map.update();
    this.cities.forEach(city => {
        city.update();
    });
    this.trolls.forEach(troll => {
      troll.update();
    });
    this.hero.update();
  }
}