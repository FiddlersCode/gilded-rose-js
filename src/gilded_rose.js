class Inn {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
        this.items[i].updateQuality();
    }

  }
}
