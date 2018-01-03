describe("Sulfuras", function() {
    beforeEach(function() {
        sulfuras = new Sulfuras("Sulfuras", 5, 5);
    });

    describe("sulfuras creation", function() {
        it("can be created with a name", function() {
            expect(sulfuras.name).toEqual("Sulfuras");
        });

        it("can be created with a sellin", function() {
            expect(sulfuras.sellIn).toEqual(5);
        });

        it("can be created with a quality", function() {
            expect(sulfuras.quality).toEqual(5);
        })
    });
});