describe("Products", function() {

    const anonymousName = "Product";
    const anonymousSellIn = 5;


    beforeEach(function() {
        ITEM_WITH_SELLIN_5_DAYS = new Product("quality_5", 5, 5);
        ITEM_WITH_SELLIN_0_DAYS = new Product("sellIn_0", 0, 5);
        gildedRose = new Inn([ITEM_WITH_SELLIN_5_DAYS, ITEM_WITH_SELLIN_0_DAYS]);
    });

  describe("product creation", function() {

      it("can be created with a name", function() {
          expect(ITEM_WITH_SELLIN_5_DAYS.name).toEqual("quality_5");
      });

      it("can be created with a sell-in", function() {
          expect(ITEM_WITH_SELLIN_5_DAYS.sellIn).toEqual(5);
      });

      it("can be created with a quality", function() {
          expect(ITEM_WITH_SELLIN_5_DAYS.quality).toEqual(5);
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
         expect(ITEM_WITH_SELLIN_5_DAYS.sellIn).toEqual(4);
     })
  });

  describe("quality", function() {
      beforeEach(function() {
          gildedRose.updateItems();
      });
      
      it("decreases quality by 1", function() {
          expect(ITEM_WITH_SELLIN_5_DAYS.quality).toEqual(4);
      });

      it("decreases quality by 2 when sellIn < 0", function() {
          expect(ITEM_WITH_SELLIN_0_DAYS.quality).toEqual(3);
      });

      it("cannot have a negative quality", function() {
         for (let i = 0; i < 2; i++) {
             gildedRose.updateItems();
         }
          expect(ITEM_WITH_SELLIN_0_DAYS.quality).toEqual(0);
      });
  });

});
