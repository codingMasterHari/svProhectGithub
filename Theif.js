class Thief {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.score = 0;
  //   this.rank = null;
  }

  addThief() { 
    var thiefIndex = "thieves/thief" + this.index; 
    if (this.index === 1) { 
      this.positionX = width / 2 - 100; 
    } else { 
      this.positionX = width / 2 + 100; 
    } 
      database.ref(thiefIndex).set({ name: this.name, 
        positionX: this.positionX, 
        positionY: this.positionY, 
        score: this.score }); 
  }

  getCount(){
    var thiefCountRef = database.ref('theifCount');
    thiefCountRef.on("value",(data)=>{
      thiefCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      thiefCount: count
    });
  }

  update() {
    var thiefIndex = "thief" + this.index;
    database.ref(thiefIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getThiefInfo(){
    var thiefInfoRef = database.ref('thief');
    thiefInfoRef.on("value",(data)=>{
      // allPlayers = data.val();
    })
  }

  // getCarsAtEnd() {
  //   database.ref('CarsAtEnd').on("value", (data) => {
  //     this.rank=data.val();
  //   })
  // }
  
  // static updateCarsAtEnd(rank) {
  //   database.ref('/').update ({
  //     CarsAtEnd:rank
  //   })
  // }
}