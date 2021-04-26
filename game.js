class Game{
    constructor(){

    }
getState(){
    var gameState=database.ref('gameState')   
    gameState.on("value",function(data){
        gameState=data.val()
    })
 
}
updateState(state){
database.ref('/').update({
    gameState:state
})
}
async start(){ 
if(gameState===0){
    player=new Player();
    var playerCountref=await database.ref('playerCount').once("value");
    if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
    }
   
    form = new Form();
    form.display();
}
car1=createSprite(100,200);
car2=createSprite(150,200);
car3=createSprite(200,200);
car4=createSprite(250,200);

cars=[car1,car2,car3,car4];

}
play(){
    console.log("gameState",gameState); 
   form.hide();
   Player.getPlayerinfo();
   if(allPlayers!==undefined){
       var index=0;
       var x=0;
       var yPos=0;
       for(var plr in allPlayers){
           index=index+1;
           x=x+200;
           yPos=displayHeight-allPlayers[plr].distance;
           cars[index-1].x=x;
           cars[index-1].y=yPos;
           if(index === player.index){
               cars[index-1].shapeColor="red";
              }
              
              
       }

   } 
   if(keyDown(UP_ARROW)&&player.index!==null){
       player.distance=player.distance+50
       player.update()

   }
   drawSprites();
}
}