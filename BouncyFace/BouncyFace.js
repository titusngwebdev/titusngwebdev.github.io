var stage = new PIXI.Container(800,600);
var renderer = PIXI.autoDetectRenderer(800,600);
renderer.backgroundColor = 0x00FFFF;
document.body.appendChild(renderer.view);

var face = PIXI.Sprite.fromImage('assets/face.png');
face.anchor.set(0.5);
face.x = renderer.view.width / 2;
face.y = renderer.view.height / 2;
face.interactive=true;
face.on('pointerdown', onClick);
var xvel=Math.random()*10-5;
var yvel=Math.random()*10-5;
stage.addChild(face);

move();

function onClick()
{
    xvel=Math.random()*10-5;
    yvel=Math.random()*10-5;
    face.x = renderer.view.width / 2;
    face.y = renderer.view.height / 2;
}

function move() 
{
    requestAnimationFrame(move);
    face.x += xvel;
    face.y += yvel;
    if(face.x<=face.width/2||face.x>=renderer.view.width-face.width/2)
        xvel*=-1;
    if(face.y<=face.height/2||face.y>=renderer.view.height-face.height/2)
        yvel*=-1;
    renderer.render(stage);
}


