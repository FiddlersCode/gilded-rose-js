class BackstagePass {
    constructor(name, sellIn, quality){
        const qualityError = "Quality must be within 0 - 50 inclusive.";

        if (quality > 50 || quality < 0) {
            throw new Error(qualityError)
        }
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateItem() {
        this.updateQuality();
        this.reduceSellIn();
    }

    reduceSellIn() {
        this.sellIn -= 1;
    }

    updateQuality() {
        if (this.sellIn > 10) {
            this.quality += 1;
        } else if (this.sellIn <= 0) {
            this.quality = 0;
        } else if (this.sellIn <= 5) {
            this.quality += 3;
        } else if (this.sellIn <= 10) {
            this.quality += 2;
        }

        this.quality = Math.min(50, this.quality);
    }
}