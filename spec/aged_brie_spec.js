describe("Aged Brie", function() {
    const anonymousSellIn = 5;
    const anonymousAgedBrie = "Aged Brie";

    beforeEach(function() {
        brie1 = new AgedBrie("Aged Brie", 4, 2);
        brie2 = new AgedBrie("Aged Brie", 4, 50);
        gildedRose = new Inn([brie1, brie2]);
    });

    describe("Aged Brie creation", function() {
       it("can be created with a name", function() {
          expect(brie1.name).toEqual("Aged Brie");
       });

       it("can be created with sell-in", function() {
          expect(brie1.sellIn).toEqual(4);
       });

       it("can be created with quality", function() {
           expect(brie1.quality).toEqual(2);
       });

       it("can be created with a max quality of 50", function() {
           expect(function() {
               new AgedBrie(anonymousAgedBrie, anonymousSellIn, 51)
           }).toThrow(new Error("Max quality is 50."));
       });

       it("can be created with a minimum quality of 0", function() {
           expect(function() {
               new AgedBrie(anonymousAgedBrie, anonymousSellIn, -1)
           }).toThrow(new Error("Minimum quality is 0."));
       });
    });

    describe("sell-in", function() {
        it("decreases the sell-in by 1", function() {
            gildedRose.updateItems();
            expect(brie1.sellIn).toEqual(3);
        });
    });

    describe("quality", function() {
       it("increases in quality with age", function() {
           gildedRose.updateItems();
           expect(brie1.quality).toEqual(3);
       });

       it("has a max quality of 50", function() {
           gildedRose.updateItems();
           expect(brie2.quality).toEqual(50);
       })
    });
});