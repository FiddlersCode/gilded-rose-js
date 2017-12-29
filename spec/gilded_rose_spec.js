describe("Gilded Rose", function() {

    it("should update quality", function() {
        const gildedRose = new Shop([ new Item("chocolate", 5, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(4);
    });

});
