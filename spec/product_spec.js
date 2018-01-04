describe("Products", function() {

    const anonymousName = "Product";
    const anonymousSellIn = 5;

  beforeEach(function() {
    product0 = new Product("chocolate", 5, 5);
    product1 = new Product("vanilla", 0, 5);
    gildedRose = new Inn([product0, product1]);
  });

  describe("product creation", function() {
      it("can be created with a name", function() {
          expect(product0.name).toEqual("chocolate");
      });

      it("can be created with a sell-in", function() {
          expect(product0.sellIn).toEqual(5);
      });

      it("can be created with a quality", function() {
          expect(product0.quality).toEqual(5);
      });

      it("can be created with a max quality of 50", function() {
          expect( function() {
              new Product(anonymousName, anonymousSellIn, 51)
          }).toThrow(new Error("Quality must be within 0 - 50 inclusive."));
      });

      it("can be created with a minimum quality of 0", function() {
          expect( function() {
              new Product(anonymousName, anonymousSellIn, -1)
          }).toThrow(new Error("Quality must be within 0 - 50 inclusive."));
      });
  });

  describe("sell-in", function() {
     it("decreases sell-in by 1", function() {
         gildedRose.updateItems();
         expect(product0.sellIn).toEqual(4);
     })
  });

  describe("quality", function() {

      beforeEach(function() {
          gildedRose.updateItems();
      });

      it("decreases quality by 1", function() {
          expect(product0.quality).toEqual(4);
      });

      it("decreases quality by 2 when sellIn < 0", function() {
          expect(product1.quality).toEqual(3);
      });

      it("cannot have a negative quality", function() {
         for (let i = 0; i < 2; i++) {
             gildedRose.updateItems();
         }
          expect(product1.quality).toEqual(0);
      });
  });

});
