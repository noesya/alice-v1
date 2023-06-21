import {CITIES} from './data/CITIES';
import {TROLLS} from './data/TROLLS';
import Hero from './objects/Hero';
import City from './objects/City';
import Map from './objects/Map';
import Troll from './objects/Troll';

export default class Scene {
  constructor(game) {
    this.game = game;
    this.cities = [];
    this.setup();
  }
  setup() {
    this.map = new Map();
    this.hero = new Hero();
    this.trollTest = new Troll();
    this.hero.x = this.map.width / 2;
    this.hero.y = this.map.height / 2;

    CITIES.forEach(city => {
        this.cities.push(new City(city));
    });
  }
  update() {
    this.map.update();
    this.hero.update();
    this.trollTest.update();
  }
}