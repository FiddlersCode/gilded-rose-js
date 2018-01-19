describe("Aged Brie", function() {
    const anonymousName = "Aged Brie";
    const anonymousSellIn = 5;

    beforeEach(function() {
        BRIE_WITH_SELLIN_4_DAYS = new AgedBrie("sellIn_4", 4, 2);
        BRIE_WITH_QUALITY_50 = new AgedBrie("quality_50", 4, 50);
        gildedRose = new Inn([BRIE_WITH_SELLIN_4_DAYS, BRIE_WITH_QUALITY_50]);
    });

    describe("Aged Brie creation", function() {
       it("can be created with a name", function() {
          expect(BRIE_WITH_SELLIN_4_DAYS.name).toEqual("sellIn_4");
       });

       it("can be created with sell-in", function() {
          expect(BRIE_WITH_SELLIN_4_DAYS.sellIn).toEqual(4);
       });

       it("can be created with quality", function() {
           expect(BRIE_WITH_SELLIN_4_DAYS.quality).toEqual(2);
       });

       it("can be created with a max quality of 50", function() {
           expect(function() {
               new AgedBrie(anonymousName, anonymousSellIn, 51)
           }).toThrow(new Error("Quality must be within 0 - 50 inclusive."));
       });

       it("can be created with a minimum quality of 0", function() {
           expect(function() {
               new AgedBrie(anonymousName, anonymousSellIn, -1)
           }).toThrow(new Error("Quality must be within 0 - 50 inclusive."));
       });
    });

    describe("sell-in", function() {
        it("decreases the sell-in by 1", function() {
            gildedRose.updateItems();
            expect(BRIE_WITH_SELLIN_4_DAYS.sellIn).toEqual(3);
        });
    });

    describe("quality", function() {
        beforeEach(function() {
            gildedRose.updateItems();
        });

       it("increases in quality with age", function() {
           expect(BRIE_WITH_SELLIN_4_DAYS.quality).toEqual(3);
       });

       it("has a max quality of 50", function() {
           expect(BRIE_WITH_QUALITY_50.quality).toEqual(50);
       })
    });
});