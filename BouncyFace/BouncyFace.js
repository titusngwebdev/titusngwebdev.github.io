var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(8000,6000);
renderer.backGroundColor = 0x00FFFF;
document.body.appendChild(renderer.view);

var face = PIXI.Sprite.fromImage('assets/face.png');
face.anchor.set(0.5);
face.x = stage.width / 2;
face.y = stage.height / 2;
face.interactive=true;
face.on('pointerdown', onClick);
var xvel=Math.random()*6-3;
var yvel=Math.random()*6-3;
stage.addChild(face);

move();

function onClick()
{
    xvel=Math.random()*6-3;
    yvel=Math.random()*6-3;
    face.x = renderer.width / 2;
    face.y = renderer.height / 2;
}

function move() 
{
    requestAnimationFrame(move);
    face.x += xvel;
    face.y += yvel;
    if(face.x<face.width/2||face.x>app.renderer.width-face.width/2)
        xvel*=-1;
    if(face.y<face.height/2||face.y>app.renderer.height-face.height/2)
        yvel*=-1;
    renderer.render(stage);
}


