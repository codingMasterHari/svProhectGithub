class Game {
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        police = new Police();
        thief = new Thief();
        form = new Form()
        form.display();
        policeCount = police.getCount();
        thiefCount = thief.getCount();

        // var policeCountRef = await database.ref('policeCount').once("value");
        // var thiefCountRef = await database.ref('thiefCount').once("value");
        // if (policeCountRef.exists()) {
        //     policeCount = policeCountRef.val();
        //     police.getCount();
        // }
        // if (thiefCountRef.exists()) {
        //   thiefCount = thiefCountRef.val();
        //   thief.getCount();
        // }
      }

      policeCar = createSprite(900,900);
      policeCar.addImage("policeCar",policeCarImage);
      policeCar.scale = 0.5;
      thiefCar = createSprite(1200,500);
      thiefCar.addImage("thief",thiefCarImage);
      thiefCar.scale = 0.2;
      // coin = createSprite(900,900);
      // coin.addImage("coina",coinImage);
      // coin.scale = 0.2;
      // cone = createSprite(1200,500);
      // cone.addImage("conee",coneImage);
      // cone.scale = 0.2;
      // gasStation = createSprite(1200,500);
      // gasStation.addImage("congasStationee",gasStationImage);
      // gasStation.scale = 0.3;
      
      items = [policeCar, thiefCar, thiefPlane];

      // if(this.theifButton.mousePressed) {
      //   player[index-1].value = thief;
      //   player[1].value = police;

      // } 
    }
  
    play(){
      form.hide();
      
      police.getPoliceInfo();
      thief.getTheifInfo();
      
      if(police !== undefined && thief !== undefined){
        background(rgb(198,135,103));
        image(trackImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 350 ;
        var y;
  
  
      }
      
  
      if(keyIsDown(UP_ARROW)){
        police.y-=10;
      } else if (keyIsDown(LEFT_ARROW)) {
         police.x -= 15;
      } else if (keyIsDown(RIGHT_ARROW)) {
         police.x += 15;
      }

      if(keyIsDown("W")){
        thief.y-=10;
      } else if (keyIsDown("A")) {
         thief.x -= 15;
      } else if (keyIsDown("D")) {
         thief.x += 15;
      }
      if (frameCount % 30 === 0) {
        cone = createSprite(random(100, 1000), 0, 100, 100);
        cone.velocityY = 8;
        var rand = Math.round(random(1,1));
        switch(rand){
            case 1: cone.addImage("coneimg",coneImage);
            break;
        }
        badGroup.add(cone);
        
      }

      if (frameCount % 50 === 0) {
        coin = createSprite(random(100, 1000), 0, 100, 100);
        coin.velocityY = 8;
        var rand = Math.round(random(1,1));
        switch(rand){
            case 1: coin.addImage("coinimg",coinImage);
            break;
        }
        goodGroup.add(coin);
        
      }

      if (fuel <= 10) {
        gasStation = createSprite(random(100, 1000), 0, 100, 100);
        gasStation.velocityY = 10;
        var rand = Math.round(random(1,1));
        switch(rand){
            case 1: gasStation.addImage("coinimg",gasStationImage);
            break;
        }
        gasGroup.add(gasStation);
        
      }

      if(frameCount % 10) {
        fuel-=1;
      }

      if(badGroup.isTouching(thiefCar)) {
        lives -= 1;
      }

      if(lives == 0) {
        gameState = 2;
      }

      if(goodGroup.isTouching(thiefCar) || goodGroup.isTouching(policeCar)) {
        score+=1;
      }

      if(gasGroup.isTouching(thiefCar)) {
        fuel+=80;
      }

      // if
  
      drawSprites();
    }
  }