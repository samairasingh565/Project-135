
function preload(){


}


function setup(){
    canvas = createCanvas(280,280);
    canvas.position(490,200);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
}

function draw(){
    image(video,0,0,280,280)

}