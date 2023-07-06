import {CITIES} from './data/cities';
import {TROLLS} from './data/trolls';
import {WORLD} from './data/world';
import {DEFINITIONS} from './data/definitions';
import Hero from './objects/Hero';
import City from './objects/City';
import Map from './objects/Map';
import Troll from './objects/Troll';
import Sea from './objects/Ocean';
import Coin from './objects/Coin';
import CoinDisplay from './objects/CoinDisplay';

export default class Scene {
  constructor(game) {
    this.game = game;
    this.cities = [];
    this.trolls = [];
    this.definitions = [];
    this.elementsToUpdate = [];
    this.coins = [];
    this.coinDisplay = new CoinDisplay();
    this.setup();
  }
  setup() {
    this.map = new Map();
    this.addCoins();
    this.addAlice();
    this.addCities();
    this.addTrolls();
    this.elements = [
        ...this.cities, 
        ...this.trolls, 
        ...this.definitions, 
        ...this.coins, 
        this.hero
    ]
  }
  addCoins() {
    DEFINITIONS.forEach(definition => {
        this.definitions.push(new Coin(definition));
    });
  }
  addAlice() {
    this.hero = new Hero({
        x: WORLD.width / 4, // Pas compris pour "/4"
        y: WORLD.height / 4
      });  
  }
  addCities() {
    CITIES.forEach(city => {
        this.cities.push(new City(city));
    });
  }
  addTrolls() {
    let i = 0;
    TROLLS.images.forEach((src, i) => {
      this.trolls.push(new Troll({
        x: TROLLS.positions[i].x,
        y: TROLLS.positions[i].y,
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
      }
    });
    this.definitions.forEach((coin) => {
      if (coin.collides(this.hero) && coin.active) {
        coin.onCollide();
        this.coinDisplay.addCoin(coin);
        this.coins = this.coins.filter((c) => c !== coin);
      }
    });
  }
  update() {
    this.map.update();
    this.elements.sort((a, b) => (a.y + a.depthOffset) - (b.y + b.depthOffset))
    this.elements.forEach(element => element.update());
    this.coinDisplay.draw();
    this.checkCollision();
  }
}