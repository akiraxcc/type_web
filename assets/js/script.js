



function init() {
    // Circle 01
    var stage = new createjs.Stage("rightCanvas");
        // var circle = new createjs.Shape();
        // circle.graphics.beginFill("white").drawCircle(0, 0, 10);
        // circle.x = 100;
        // circle.y = 100;
        // stage.addChild(circle);
        // createjs.Tween.get(circle, {loop: false})
        //   .to({y: 400}, 1400, createjs.Ease.getPowInOut(4))
        //   .to({alpha: 0, y: 400}, 400, createjs.Ease.getPowInOut(2))
        //   .to({alpha: 0, x: 150, y: 500}, 200)
        //   .to({alpha: 1, x: 150, y: 500}, 200, createjs.Ease.getPowInOut(2))
        //   .to({x: 150, y: 800}, 1200, createjs.Ease.getPowInOut(4));
        // createjs.Ticker.setFPS(60);
        // createjs.Ticker.addEventListener("tick", stage);


    // RoundRect1
    var RoundRect1 = new createjs.Shape();
        RoundRect1.graphics.beginFill("white").drawRoundRect(0, 0, 10, 400, 5, 5, 5,5);
        RoundRect1.x = 50;
        RoundRect1.y = 140;
        stage.addChild(RoundRect1);
        createjs.Tween.get(RoundRect1, {loop: false})
          .to({y: 900}, 1800, createjs.Ease.getPowInOut(4))
          .to({alpha: 0, y: 900}, 400, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 900}, 200)
          // .to({alpha: 0, x: 100, y: 500}, 400)
          // .to({alpha: 1, x: 100, y: 500}, 400, createjs.Ease.getPowInOut(2))
          // .to({x: 100, y: 800}, 1400, createjs.Ease.getPowInOut(4));
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        stage.update();

        var RoundRect2 = new createjs.Shape();
        RoundRect2.graphics.beginFill("white").drawRoundRect(0, 0, 10, 400, 5, 5, 5,5);
        RoundRect2.x = 200;
        RoundRect2.y = 0;
        stage.addChild(RoundRect2);
        createjs.Tween.get(RoundRect2, {loop: true})
        .to({y: 500}, 500, createjs.Ease.getPowInOut(4))
        .to({alpha: 0, y: 500}, 400, createjs.Ease.getPowInOut(2))
        .to({alpha: 0, x: 150, y: 500}, 200)
        .to({alpha: 1, x: 150, y: 500}, 200, createjs.Ease.getPowInOut(2))
        .to({x: 150, y: 800}, 1200, createjs.Ease.getPowInOut(4));
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        stage.update();

        var RoundRect3 = new createjs.Shape();
        RoundRect3.graphics.beginFill("white").drawRoundRect(0, 0, 10, 80, 5, 5, 5,5);
        RoundRect3.x = 100;
        RoundRect3.y = 500;
        stage.addChild(RoundRect3);
        createjs.Tween.get(RoundRect3, {loop: false})
        
        .to({y: 1000}, 1200, createjs.Ease.getPowInOut(4))
        .to({alpha: 0, y: 1000}, 400, createjs.Ease.getPowInOut(2))
        .to({alpha: 0, y: 1000}, 600)
        // .to({alpha: 0, x: 20, y: 400}, 200)
        // .to({alpha: 1, x: 20, y: 400}, 200, createjs.Ease.getPowInOut(2))
        // .to({x: 20, y: 2000}, 1400, createjs.Ease.getPowInOut(4));
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        stage.update();

        var RoundRect4 = new createjs.Shape();
        RoundRect4.graphics.beginFill("lightgrey").drawRoundRect(0, 0, 20, 200, 10, 10, 10,10);
        RoundRect4.x = 200;
        RoundRect4.y = 500;
        stage.addChild(RoundRect4);
        createjs.Tween.get(RoundRect4, {loop: true})
        
        .to({y: 1000}, 1200, createjs.Ease.getPowInOut(4))
        .to({alpha: 0, y: 1000}, 300, createjs.Ease.getPowInOut(2))
        .to({alpha: 0, y: 1000}, 400)
        .to({alpha: 0, x: 80, y: 100}, 200)
        .to({alpha: 1, x: 80, y: 100}, 200, createjs.Ease.getPowInOut(2))
        .to({x: 80, y: 1000}, 1400, createjs.Ease.getPowInOut(4));
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        stage.update();
}




var size = $(".content").css("fontSize")
					$(".content").hover(
						function(){
                        $(this).css("fontSize", "30px",);
                        $(this).css("transition", "0.5s",);
                        
					}, 
					function(){
            $(this).css("fontSize", size);
          
  })

  // $("rightCanvas").click(function() {
  //   $("html,body").css("background-color","white");
  // })

  // $(".dot").click(function() {
  //   $("html,body").css("background-color","darkgrey");
  // })
  
  $(window).scroll(function() {
    console.log($(window).scrollTop()/100);
    $(".bgcolor").css("opacity",1-($(window).scrollTop()/2000));
    $("h2").css("opacity",1-($(window).scrollTop()/3000));
  })


  for (var counter = 0; counter < 600; counter++){
 
    //console.log(counter)
    $("body").append('<div class="dot dot-'+counter+'"></div>');
    $(".dot-"+counter).css("top", 650+counter*1 + "px");
    
  }

  for (var counter = 0; counter < 600; counter++){
 
    //console.log(counter)
    $("body").append('<div class="dot2 dot2-'+counter+'"></div>');
    $(".dot2-"+counter).css("top", 1250+counter*1 + "px");
    
  }

  for (var counter = 0; counter < 500; counter++){
 
    //console.log(counter)
    $("body").append('<div class="dot3 dot3-'+counter+'"></div>');
    $(".dot3-"+counter).css("top", 2000+counter*1 + "px");
    
  }

  for (var counter = 0; counter < 600; counter++){
 
    //console.log(counter)
    $("body").append('<div class="dot4 dot4-'+counter+'"></div>');
    $(".dot4-"+counter).css("top", 2200+counter*1 + "px");
    
  }
  
  
  
  $(".dot").click(function() {
    $(this).css("background-color","black");
  })