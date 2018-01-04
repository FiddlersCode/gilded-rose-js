describe("Aged Brie", function() {
    const anonymousName = "Aged Brie";
    const anonymousSellIn = 5;

    beforeEach(function() {
        brie0 = new AgedBrie("Aged Brie", 4, 2);
        brie1 = new AgedBrie("Aged Brie", 4, 50);
        gildedRose = new Inn([brie0, brie1]);
    });

    describe("Aged Brie creation", function() {
       it("can be created with a name", function() {
          expect(brie0.name).toEqual("Aged Brie");
       });

       it("can be created with sell-in", function() {
          expect(brie0.sellIn).toEqual(4);
       });

       it("can be created with quality", function() {
           expect(brie0.quality).toEqual(2);
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
            expect(brie0.sellIn).toEqual(3);
        });
    });

    describe("quality", function() {
       it("increases in quality with age", function() {
           gildedRose.updateItems();
           expect(brie0.quality).toEqual(3);
       });

       it("has a max quality of 50", function() {
           gildedRose.updateItems();
           expect(brie1.quality).toEqual(50);
       })
    });
});