describe("Products", function() {

  beforeEach(function() {
    product1 = new Product("chocolate", 5, 5);
    product2 = new Product("vanilla", 0, 5);
    gildedRose = new Inn([product1, product2]);
  });

  describe("product creation", function() {
      it("can be created with a name", function() {
          expect(product1.name).toEqual("chocolate");
      });

      it("can be created with a sell-in", function() {
          expect(product1.sellIn).toEqual(5);
      });

      it("can be created with a quality", function() {
          expect(product1.quality).toEqual(5);
      });

      xit("can be created with a max quality of 50", function() {
          expect(new Product("horse", 5, 51)).toThrow(new Error("Max quality is 50."));
      });

      xit("can be created with a minimum quality of 0", function() {
          expect(new Product("horse", 5, -1)).toThrow(new Error("Minimum quality is 0."));
      });
  });

  describe("sell-in", function() {
     it("decreases sell-in by 1", function() {
         gildedRose.updateItems();
         expect(gildedRose.items[0].sellIn).toEqual(4);
     })
  });

  describe("quality", function() {

      beforeEach(function() {
          gildedRose.updateItems();
      });

      it("decreases quality by 1", function() {
          expect(gildedRose.items[0].quality).toEqual(4);
      });

      it("decreases quality by 2 when sellIn < 0", function() {
          expect(gildedRose.items[1].quality).toEqual(3);
      });

      it("cannot have a negative quality", function() {
         for (let i = 0; i < 2; i++) {
             gildedRose.updateItems();
         }
          expect(gildedRose.items[1].quality).toEqual(0);
      });
  });

});
