class AgedBrie {

    constructor(name, sellIn, quality){
        const qualityError = "Quality must be within 0 - 50 inclusive.";

        if (quality > 50 || quality < 0) {
            throw new Error(qualityError)
        }
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
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