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
    this.elementsToUpdate = [];
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

    this.elements = [...this.cities, ...this.trolls, this.hero]
  }
  addTrolls() {
    let i = 0;
    TROLLS.images.forEach(src => {
      this.trolls.push(new Troll({
        x: Math.round(WORLD.width * Math.random()),
        y: Math.round(WORLD.height * Math.random()),
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
    this.elements.sort((a, b) => a.y - b.y)
    this.elements.forEach(element => element.update());

    this.checkCollision();
  }
}