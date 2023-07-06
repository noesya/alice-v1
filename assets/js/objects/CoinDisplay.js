import { game } from "js/Game";

export default class CoinDisplay {
    constructor() {
      this.collectedCoins = [];
      this.x = 10; // Position horizontale de l'affichage
      this.y = 10; // Position verticale de l'affichage
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
  