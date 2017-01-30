a = 0
b = 0

setup = ->
  createCanvas(windowWidth,windowHeight)
  

draw = ->
  background(255)
  line(0,height/2,width,height/2)
  textSize(32)
  text(a,width/2,height/4)
  #rotate(TWO_PI)
  text(b,width/2,height/4*3)
  #for item, i in touches
  for touch, i in touches
    text(touch, 100, 100+i*50)


  ptouches = touches

