// Generated by CoffeeScript 1.12.2
var a, b, draw, mousePressed, setup;

a = 0;

b = 0;

setup = function() {
  return createCanvas(windowWidth, windowHeight);
};

draw = function() {
  background(255);
  line(0, height / 2, width, height / 2);
  textSize(32);
  text(a, width / 2, height / 4);
  return text(b, width / 2, height / 4 * 3);
};

mousePressed = function() {
  if (mouseY > height / 2) {
    return b++;
  } else {
    return a++;
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2tldGNoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBQSxDQUFBLEdBQUk7O0FBQ0osQ0FBQSxHQUFJOztBQUVKLEtBQUEsR0FBUSxTQUFBO1NBQ04sWUFBQSxDQUFhLFdBQWIsRUFBeUIsWUFBekI7QUFETTs7QUFJUixJQUFBLEdBQU8sU0FBQTtFQUNMLFVBQUEsQ0FBVyxHQUFYO0VBQ0EsSUFBQSxDQUFLLENBQUwsRUFBTyxNQUFBLEdBQU8sQ0FBZCxFQUFnQixLQUFoQixFQUFzQixNQUFBLEdBQU8sQ0FBN0I7RUFDQSxRQUFBLENBQVMsRUFBVDtFQUNBLElBQUEsQ0FBSyxDQUFMLEVBQU8sS0FBQSxHQUFNLENBQWIsRUFBZSxNQUFBLEdBQU8sQ0FBdEI7U0FFQSxJQUFBLENBQUssQ0FBTCxFQUFPLEtBQUEsR0FBTSxDQUFiLEVBQWUsTUFBQSxHQUFPLENBQVAsR0FBUyxDQUF4QjtBQU5LOztBQVFQLFlBQUEsR0FBZSxTQUFBO0VBQ2IsSUFBRyxNQUFBLEdBQVMsTUFBQSxHQUFPLENBQW5CO1dBQ0UsQ0FBQSxHQURGO0dBQUEsTUFBQTtXQUdFLENBQUEsR0FIRjs7QUFEYSIsInNvdXJjZXNDb250ZW50IjpbImEgPSAwXHJcbmIgPSAwXHJcblxyXG5zZXR1cCA9IC0+XHJcbiAgY3JlYXRlQ2FudmFzKHdpbmRvd1dpZHRoLHdpbmRvd0hlaWdodClcclxuICBcclxuXHJcbmRyYXcgPSAtPlxyXG4gIGJhY2tncm91bmQoMjU1KVxyXG4gIGxpbmUoMCxoZWlnaHQvMix3aWR0aCxoZWlnaHQvMilcclxuICB0ZXh0U2l6ZSgzMilcclxuICB0ZXh0KGEsd2lkdGgvMixoZWlnaHQvNClcclxuICAjcm90YXRlKFRXT19QSSlcclxuICB0ZXh0KGIsd2lkdGgvMixoZWlnaHQvNCozKVxyXG5cclxubW91c2VQcmVzc2VkID0gLT5cclxuICBpZiBtb3VzZVkgPiBoZWlnaHQvMlxyXG4gICAgYisrXHJcbiAgZWxzZVxyXG4gICAgYSsrIl19
//# sourceURL=C:\github\1213\www\sketch.coffee