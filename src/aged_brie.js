class AgedBrie {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;

        if (this.quality > 50) {
            throw new Error('Max quality is 50.')
        } else if (this.quality < 0) {
            throw new Error('Minimum quality is 0.')
        }

    }

    updateItems() {
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