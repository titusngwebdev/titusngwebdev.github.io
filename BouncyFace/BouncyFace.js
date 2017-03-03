var app = new PIXI.Application(800, 600, {backgroundColor : 0x25F8FF});
document.body.appendChild(app.view);
var face = PIXI.Sprite.fromImage('assets/face.png')
face.anchor.set(0.5);
face.x = app.renderer.width / 2;
face.y = app.renderer.height / 2;
app.stage.addChild(face);
var hello=0.1;
app.ticker.add(function(delta) {
    face.x += hello * delta;
  if(face.x<0||face.x>app.renderer.width)
  {
    hello*=-1;
  }
});
