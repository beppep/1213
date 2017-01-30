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

mousePressed = ->
  if mouseY > height/2
    b++
  else
    a++