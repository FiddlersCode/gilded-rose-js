// describe("Backstage Pass", function() {
//    beforeEach(function() {
//        pass = new Product("Backstage passes", 11, 3);
//        pass2 = new Product("Backstage passes", 10, 3);
//        pass3 = new Product("Backstage passes", 5, 3);
//        pass4 = new Product("Backstage passes", 0, 10);
//        pass5 = new Product("Backstage passes", 2, 50);
//        gildedRose = new Inn([pass, pass2, pass3, pass4, pass5]);
//    });
//
//     describe("product creation", function() {
//         it("can be created with a name", function() {
//             expect(pass.name).toEqual("Backstage passes");
//         });
//
//         it("can be created with a sell-in", function() {
//             expect(pass.sellIn).toEqual(11);
//         });
//
//         it("can be created with a quality", function() {
//             expect(pass.quality).toEqual(3);
//         });
//
//         xit("can be created with a max quality of 50", function() {
//             expect(new Product("Pass", 5, 51)).toThrow(new Error("Max quality is 50."));
//         });
//
//         xit("can be created with a minimum quality of 0", function() {
//             expect(new Product("Pass", 5, -1)).toThrow(new Error("Minimum quality is 0."));
//         });
//
//         xit("can be added to the items array", function() {
//             expect(gildedRose.items[0].name).toEqual("Backstage passes");
//         });
//     });
//
//     describe("sell-in", function() {
//         it("decreases sell-in by 1", function() {
//             gildedRose.updateQuality();
//             expect(gildedRose.items[0].sellIn).toEqual(10);
//         })
//     });
//
//     describe("quality", function() {
//
//         beforeEach(function() {
//             gildedRose.updateQuality();
//         });
//
//         it("increases in quality by 1 with >10 days before concert", function() {
//             expect(gildedRose.items[0].quality).toEqual(4);
//         });
//
//         it("increases in quality by 2 with <= 10 days before concert", function() {
//             expect(gildedRose.items[1].quality).toEqual(5);
//         });
//
//         it("increases in quality by 3 with <= 5 days before concert", function() {
//            expect(gildedRose.items[2].quality).toEqual(6);
//         });
//
//         it("has 0 quality after concert", function() {
//            expect(gildedRose.items[3].quality).toEqual(0);
//         });
//
//         it("has a max quality of 50", function() {
//            expect(gildedRose.items[4].quality).toEqual(50);
//         });
//
//         xit("cannot have a negative quality", function() {
//             for (let i = 0; i < 2; i++) {
//                 gildedRose.updateQuality();
//             }
//             expect(gildedRose.items[1].quality).toEqual(0);
//         });
//     });
// });