var app = new PIXI.Application(800, 600, {backgroundColor : 0xCCEEFF});
document.body.appendChild(app.view);
var ball=PIXI.Sprite.fromImage('/assets/ball.png');
ball.anchor.set(0.5);
ball.x = app.renderer.width / 2;
ball.y = app.renderer.height / 2;
app.stage.addChild(ball);
