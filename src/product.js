class Product {
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
        this.lowerSellIn();
        this.lowerQuality();
    }

    lowerSellIn() {
        return this.sellIn -=1;
    }

    lowerQuality() {
        if (this.sellIn < 0) {
            this.quality -= 2;
        } else if (this.quality < 0) {
            this.quality = 0;
        }
        else {
            this.quality -= 1;
        }

        if (this.quality < 0) {
            this.quality = 0;
        }
    }
}