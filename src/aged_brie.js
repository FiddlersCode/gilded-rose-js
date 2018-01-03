class AgedBrie {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.lowerSellIn();
        this.raiseQuality();
    }

    lowerSellIn() {
        return this.sellIn -=1;
    }

    raiseQuality() {
      this.quality += 1;
      if (this.quality > 50) {
          this.quality = 50;
      }
    }
}