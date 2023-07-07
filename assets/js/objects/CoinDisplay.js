import { game } from "js/Game";

export default class CoinDisplay {
    constructor() {
      this.collectedCoins = [];
      this.x = 10; 
      this.y = 10; 
    }
  
    addCoin(coin) {
      this.collectedCoins.push(coin);
    }
  
    draw() {
        const ctx = game.ctx;

        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.fillText(`Coins: ${this.collectedCoins.length}`, this.x, this.y);
    }
  }
  