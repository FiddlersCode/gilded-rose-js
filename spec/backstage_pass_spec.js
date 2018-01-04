describe("Backstage Pass", function() {

    const anonymousName = "Backstage pass";
    const anonymousSellIn = 5;

   beforeEach(function() {
       pass0 = new BackstagePass("Backstage passes", 11, 3);
       pass1 = new BackstagePass("Backstage passes", 10, 3);
       pass2 = new BackstagePass("Backstage passes", 5, 3);
       pass3 = new BackstagePass("Backstage passes", 0, 10);
       pass4 = new BackstagePass("Backstage passes", 2, 50);
       gildedRose = new Inn([pass0, pass1, pass2, pass3, pass4]);
   });

    describe("product creation", function() {
        it("can be created with a name", function() {
            expect(pass0.name).toEqual("Backstage passes");
        });

        it("can be created with a sell-in", function() {
            expect(pass0.sellIn).toEqual(11);
        });

        it("can be created with a quality", function() {
            expect(pass0.quality).toEqual(3);
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
            expect(pass0.sellIn).toEqual(10);
        })
    });

    describe("quality", function() {

        beforeEach(function() {
            gildedRose.updateItems();
        });

        it("increases in quality by 1 with >10 days before concert", function() {
            expect(pass0.quality).toEqual(4);
        });

        it("increases in quality by 2 with <= 10 days before concert", function() {
            expect(pass1.quality).toEqual(5);
        });

        it("increases in quality by 3 with <= 5 days before concert", function() {
           expect(pass2.quality).toEqual(6);
        });

        it("has 0 quality after concert", function() {
           expect(pass3.quality).toEqual(0);
        });

        it("has a max quality of 50", function() {
           expect(pass4.quality).toEqual(50);
        });
    });
});