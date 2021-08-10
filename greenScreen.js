var fgimage=null;
var bgimage=null;
var canvas1=null;
var canvas2=null;
function fore(){
  canvas1=document.getElementById("can1");
   var fileinput=document.getElementById("fginput");
  fgimage=new SimpleImage(fileinput);
  fgimage.drawTo(canvas1);
}

function back(){
 canvas2=document.getElementById("can2");
  var flieinput=document.getElementById("bginput");
  bgimage=new SimpleImage(flieinput);
  bgimage.drawTo(canvas2);
}
function compose(){
  if(fgimage == null || !fgimage.complete()){
    alert('foreground image not loaded')
  }
   if(bgimage == null || !bgimage.complete()){
    alert('background image not loaded')
  }
  clearcanvas();
  var output=new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  for(var pixel of fgimage.values()){
    if(pixel.getGreen()>pixel.getRed() + pixel.getBlue()){
      var x=pixel.getX();
      var y=pixel.getY();
      var bgimage1=bgimage.getPixel(x,y);
      output.setPixel(x,y,bgimage1);
    }
    else{
      output.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
  }
  output.drawTo(can1);
}
function clearcanvas(){
var can1=canvas1.getContext("2d");
 var can2=canvas2.getContext("2d");
  can1.clearRect(0,0,canvas1.width,canvas1.height);
  can2.clearRect(0,0,canvas2.width,canvas2.height);
 
}
