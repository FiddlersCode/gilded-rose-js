describe("Backstage Pass", function() {

    const anonymousName = "Backstage pass";
    const anonymousSellIn = 5;

   beforeEach(function() {
       PASS_WITH_SELL_IN_11 = new BackstagePass("sellIn_11", 11, 3);
       PASS_WITH_SELL_IN_10 = new BackstagePass("sellIn_10", 10, 3);
       PASS_WITH_SELL_IN_5 = new BackstagePass("sellIn_5", 5, 3);
       PASS_WITH_SELL_IN_0 = new BackstagePass("sellIn_0", 0, 10);
       PASS_WITH_QUALITY_50 = new BackstagePass("quality_50", 2, 50);
       gildedRose = new Inn([PASS_WITH_SELL_IN_11, PASS_WITH_SELL_IN_10, PASS_WITH_SELL_IN_5, PASS_WITH_SELL_IN_0, PASS_WITH_QUALITY_50]);
   });

    describe("product creation", function() {
        it("can be created with a name", function() {
            expect(PASS_WITH_SELL_IN_11.name).toEqual("sellIn_11");
        });

        it("can be created with a sell-in", function() {
            expect(PASS_WITH_SELL_IN_11.sellIn).toEqual(11);
        });

        it("can be created with a quality", function() {
            expect(PASS_WITH_SELL_IN_11.quality).toEqual(3);
        });

        it("can be created with a max quality of 50", function() {
            expect(function() {
                new BackstagePass(anonymousName, anonymousSellIn, 51)
            }).toThrow(new Error("Quality must be within 0 - 50 inclusive."));
        });

        it("can be created with a minimum quality of 0", function() {
            expect(function() {
                new BackstagePass(anonymousName, anonymousSellIn, -1)
            }).toThrow(new Error("Quality must be within 0 - 50 inclusive."));
        });
    });

    describe("sell-in", function() {
        it("decreases sell-in by 1", function() {
            gildedRose.updateItems();
            expect(PASS_WITH_SELL_IN_11.sellIn).toEqual(10);
        })
    });

    describe("quality", function() {

        beforeEach(function() {
            gildedRose.updateItems();
        });

        it("increases in quality by 1 with >10 days before concert", function() {
            expect(PASS_WITH_SELL_IN_11.quality).toEqual(4);
        });

        it("increases in quality by 2 with <= 10 days before concert", function() {
            expect(PASS_WITH_SELL_IN_10.quality).toEqual(5);
        });

        it("increases in quality by 3 with <= 5 days before concert", function() {
           expect(PASS_WITH_SELL_IN_5.quality).toEqual(6);
        });

        it("has 0 quality after concert", function() {
           expect(PASS_WITH_SELL_IN_0.quality).toEqual(0);
        });

        it("has a max quality of 50", function() {
           expect(PASS_WITH_QUALITY_50.quality).toEqual(50);
        });
    });
});