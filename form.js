class Form{
    constructor(){
        this.input=createInput('Name');
        this.button=createButton('START');
        this.greetings=createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }

    display(){
        var title=createElement('h2');
        title.html('Car Racing Game');
        title.position(displayWidth/2-50,30);

       
        this.input.position(displayWidth/2,displayHeight/2);

        
        this.button.position(displayWidth/2,displayHeight/2+30);

        



        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            this.greetings.position(displayWidth/2-50,displayHeight/2);
            this.greetings.html("Welcome "+ player.name)
            player.updateCount(playerCount);
        });

    }
} 