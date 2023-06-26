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
    this.hero = new Hero({
      x: WORLD.width / 4, // Pas compris pour "/4"
      y: WORLD.height / 4
    });
    CITIES.forEach(city => {
        this.cities.push(new City(city));
    });
    this.addTrolls();
  }
  addTrolls() {
    let i = 0;
    TROLLS.images.forEach(src => {
      this.trolls.push(new Troll({
        x: Math.round(WORLD.width  / 3 * Math.random()),
        y: Math.round(WORLD.height  / 3 * Math.random()),
        src: src
      }));
    })
  }
  checkCollision() {
    this.trolls.forEach(troll => {
      if (troll.collides(this.hero)) {
        troll.onCollide();
      }
    });
    this.cities.forEach(city => {
      if (city.collides(this.hero)) {
        city.onCollide();
        // this.hero.onCollide();
      }
    });
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

    this.checkCollision();
  }
}