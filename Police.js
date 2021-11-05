class Police {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.score = 0;
    //   this.rank = null;
    }
    addPolice() { 
      var policeIndex = "polices/police" + this.index; 
      if (this.index === 1) { 
        this.positionX = width / 2 - 100; 
      } else { 
        this.positionX = width / 2 + 100; 
      } 
        database.ref(policeIndex).set({ name: this.name, 
          positionX: this.positionX, 
          positionY: this.positionY, 
          score: this.score }); 
    }
  
    getCount(){
      var policeCountRef = database.ref('policeCount');
      policeCountRef.on("value",(data)=>{
        policeCount = data.val();
      })
    }
  
    updateCount(count) {
      database.ref('/').update({
        policeCount: count
      });
    }
  
    update() {
      var policeIndex = "police" + this.index;
      database.ref(policeIndex).set({
        name:this.name,
      });
    }
  
    static getPoliceInfo(){
      var policeInfoRef = database.ref('police');
      policeInfoRef.on("value",(data)=>{
        // police = data.val();
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