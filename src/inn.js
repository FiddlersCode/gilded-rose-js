class Inn {
  constructor(items=[]){
    this.items = items;
  }
  updateItems() {
     this.items.forEach((item) => {
        item.updateItem();
      });
  }
}