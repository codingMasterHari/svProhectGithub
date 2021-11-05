class Form {

    constructor() {
      this.input = createInput('Name');
      this.button = createButton('Play');
      this.reset = createButton('Reset Game');
      this.resetQuestion = createButton("Reset Game");
      this.nresetQuestion = createButton("Continue the game");
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.thiefButton = createButton('Become A Thief');
      this.policeButton = createButton('Be the Cop');
    }
  
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.thiefButton.hide();
      this.policeButton.hide();
    }
  
    display(){
      this.title.html("Chase the Theif");
      this.title.position(displayWidth/2 - 50, 0);
      this.reset.position(displayWidth-500, 20)
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.thiefButton.position(displayWidth/2 - 150, displayHeight / 2.5);
      this.policeButton.position(displayHeight/2 + 600, displayHeight / 2.5);

      this.policeButton.mousePressed(()=> {
        this.input.hide();
        this.thiefButton.disabled = false;
        this.thiefButton.hide();
        this.policeButton.hide();
        police.name = this.input.value();
        // policeCount.update();
        policeCount=1;

        // police.index = policeCount;
        police.update();
        this.greeting.html("Hello " + police.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });

      this.thiefButton.mousePressed(()=> {
        this.input.hide();
        this.policeButton.disabled = false;
        this.policeButton.hide();
        this.thiefButton.hide();
        thief.name = this.input.value();
        thiefCount=1;
        // thief.index = thiefCount;
        thief.update();
        this.greeting.html("Hello " + thief.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      // this.button.mousePressed(()=>{
      //   this.input.hide();
      //   this.button.hide();
      //   police.name = this.input.value();
      //   theif.name = this.input.value();
      //   playerCount+=1;
      //   police.index = playerCount;
      //   theif.index = playerCount;
      //   police.update();
      //   theif.update();
      //   this.greeting.html("Hello " + police.name)
      //   this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      //   this.greeting.html("Hello " + theif.name)
      //   this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      // });
  
      // this.reset.mousePressed(() => {
      //   if(player.mousePressed(this.reset)) {
      //     this.reset.hide();
      //     this.resetQuestion.position(displayWidth-750, 20);  
      //     player.updateCount(0);
      //     game.update(0);
      //   }
      //   if(player.position.y >= 1000) {
      //     text("You have reached your destination", displayWidth/2, displayHeight/2);
      //   }
  
      // });
    }
  }