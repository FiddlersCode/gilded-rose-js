class Product {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
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