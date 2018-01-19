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
        this.reduceSellIn();
        this.reduceQuality();
    }

    reduceSellIn() {
        return this.sellIn -=1;
    }

    reduceQuality() {
        if (this.sellIn < 0) {
            this.quality -= 2;
        } else {
            this.quality -= 1;
        }

        this.quality = Math.max(0, this.quality);
    }
}