var app = new PIXI.Application(800, 600, {backgroundColor : 0x25F8FF});
document.body.appendChild(app.view);
var face = PIXI.Sprite.fromImage('assets/face.png')
var xvel=Math.random()*6-3;
var yvel=Math.random()*6-3;
face.anchor.set(0.5);
face.x = app.renderer.width / 2;
face.y = app.renderer.height / 2;
face.interactive=true;
face.on('pointerdown', onClick);
function onClick()
{
    xvel=Math.random()*6-3;
    yvel=Math.random()*6-3;
    face.x = app.renderer.width / 2;
    face.y = app.renderer.height / 2;
}
app.stage.addChild(face);
app.ticker.add(function(delta) {
    face.x += xvel * delta;
    face.y += yvel * delta;
    if(face.x<face.width/2||face.x>app.renderer.width-face.width/2)
        xvel*=-1;
    if(face.y<face.height/2||face.y>app.renderer.height-face.height/2)
        yvel*=-1;
});
