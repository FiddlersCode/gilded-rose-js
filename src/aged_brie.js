class AgedBrie {

    constructor(name, sellIn, quality){
        const qualityError = "Quality must be within 0 - 50 inclusive."

        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;

        if (this.quality > 50) {
            throw new Error(qualityError)
        } else if (this.quality < 0) {
            throw new Error(qualityError)
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