



function init() {
    // Circle 01
    var stage = new createjs.Stage("demoCanvas");
        var circle = new createjs.Shape();
        circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        createjs.Tween.get(circle, {loop: true})
          .to({x: 400}, 1400, createjs.Ease.getPowInOut(4))
          .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 125}, 100)
          .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);


    // var stage = new createjs.Stage("demoCanvas");
    // Circle 02
        var circle1 = new createjs.Shape();
        circle1.graphics.beginFill("DeepSkyBlue").drawCircle(100, 0, 50);
        circle1.x = 1000;
        circle1.y = 50;
        stage.addChild(circle1);
        createjs.Tween.get(circle1, {loop: true})
          .to({y: 400}, 800, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 125}, 100)
          .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({y: 50}, 400, createjs.Ease.getPowInOut(6));
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        stage.update();
  }






var size = $(".content").css("fontSize")
					$(".content").hover(
						function(){
                        $(this).css("fontSize", "30px",);
                        
					}, 
					function(){
						$(this).css("fontSize", size);
  })
  
  
