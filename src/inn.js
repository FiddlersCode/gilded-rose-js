class Inn {
  constructor(items=[]){
    this.items = items;
  }
  updateItems() {
    for (let i = 0; i < this.items.length; i++) {
        this.items[i].updateItem();
    }

  }
}
