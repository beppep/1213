// Generated by CoffeeScript 1.11.1
var assert, bg, circle, fc, fixColor, getParameters, print, range, rd, sc, sw;

assert = function(a, b) {
  if (!_.isEqual(a, b)) {
    return print("Assert failed: " + a + " != " + b);
  }
};

fixColor = function(args) {
  var a, b, g, n, r;
  n = args.length;
  r = 0;
  g = 0;
  b = 0;
  a = 1;
  if (n === 1) {
    r = args[0];
    g = r;
    b = r;
  } else if (n === 3) {
    r = args[0];
    g = args[1];
    b = args[2];
  } else if (n === 4) {
    r = args[0];
    g = args[1];
    b = args[2];
    a = args[3];
  }
  return color(255 * r, 255 * g, 255 * b, 255 * a);
};

fc = function() {
  if (arguments.length === 0) {
    return noFill();
  } else {
    return fill(fixColor(arguments));
  }
};

sc = function(r, g, b) {
  if (arguments.length === 0) {
    return noStroke();
  } else {
    return stroke(fixColor(arguments));
  }
};

bg = function() {
  return background(fixColor(arguments));
};

sw = function(n) {
  return strokeWeight(n);
};

circle = function(x, y, r) {
  return ellipse(x, y, 2 * r, 2 * r);
};

rd = function(vinkel) {
  return rotate(radians(vinkel));
};

print = console.log;

range = function() {
  var n;
  n = arguments.length;
  if (n === 1) {
    return _.range(arguments[0]);
  } else if (n === 2) {
    return _.range(arguments[0], arguments[1]);
  } else if (n === 3) {
    return _.range(arguments[0], arguments[1], arguments[2]);
  }
};

getParameters = function(h) {
  var f;
  if (h == null) {
    h = window.location.href;
  }
  return _.object((function() {
    var i, len, ref, results;
    ref = h.split('?')[1].split('&');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      f = ref[i];
      results.push(f.split('='));
    }
    return results;
  })());
};

assert(getParameters('http:\\christernilsson.github.io\Shortcut\www?a=0&b=1'), {
  'a': '0',
  'b': '1'
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlsc3Nvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5pbHNzb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBOztBQUFBLE1BQUEsR0FBUyxTQUFDLENBQUQsRUFBRyxDQUFIO0VBQ1AsSUFBRyxDQUFDLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixFQUFZLENBQVosQ0FBSjtXQUNFLEtBQUEsQ0FBTSxpQkFBQSxHQUFrQixDQUFsQixHQUFvQixNQUFwQixHQUEwQixDQUFoQyxFQURGOztBQURPOztBQUlULFFBQUEsR0FBVyxTQUFDLElBQUQ7QUFDVCxNQUFBO0VBQUEsQ0FBQSxHQUFJLElBQUksQ0FBQztFQUNULENBQUEsR0FBRTtFQUNGLENBQUEsR0FBRTtFQUNGLENBQUEsR0FBRTtFQUNGLENBQUEsR0FBRTtFQUNGLElBQUcsQ0FBQSxLQUFLLENBQVI7SUFDRSxDQUFBLEdBQUksSUFBSyxDQUFBLENBQUE7SUFDVCxDQUFBLEdBQUk7SUFDSixDQUFBLEdBQUksRUFITjtHQUFBLE1BSUssSUFBRyxDQUFBLEtBQUssQ0FBUjtJQUNILENBQUEsR0FBSSxJQUFLLENBQUEsQ0FBQTtJQUNULENBQUEsR0FBSSxJQUFLLENBQUEsQ0FBQTtJQUNULENBQUEsR0FBSSxJQUFLLENBQUEsQ0FBQSxFQUhOO0dBQUEsTUFJQSxJQUFHLENBQUEsS0FBRyxDQUFOO0lBQ0gsQ0FBQSxHQUFJLElBQUssQ0FBQSxDQUFBO0lBQ1QsQ0FBQSxHQUFJLElBQUssQ0FBQSxDQUFBO0lBQ1QsQ0FBQSxHQUFJLElBQUssQ0FBQSxDQUFBO0lBQ1QsQ0FBQSxHQUFJLElBQUssQ0FBQSxDQUFBLEVBSk47O0FBS0wsU0FBTyxLQUFBLENBQU0sR0FBQSxHQUFNLENBQVosRUFBZSxHQUFBLEdBQU0sQ0FBckIsRUFBd0IsR0FBQSxHQUFNLENBQTlCLEVBQWlDLEdBQUEsR0FBTSxDQUF2QztBQW5CRTs7QUFxQlgsRUFBQSxHQUFLLFNBQUE7RUFBRyxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQXZCO1dBQThCLE1BQUEsQ0FBQSxFQUE5QjtHQUFBLE1BQUE7V0FBNEMsSUFBQSxDQUFLLFFBQUEsQ0FBUyxTQUFULENBQUwsRUFBNUM7O0FBQUg7O0FBQ0wsRUFBQSxHQUFLLFNBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0VBQWEsSUFBRyxTQUFTLENBQUMsTUFBVixLQUFvQixDQUF2QjtXQUE4QixRQUFBLENBQUEsRUFBOUI7R0FBQSxNQUFBO1dBQThDLE1BQUEsQ0FBTyxRQUFBLENBQVMsU0FBVCxDQUFQLEVBQTlDOztBQUFiOztBQUNMLEVBQUEsR0FBSyxTQUFBO1NBQUcsVUFBQSxDQUFXLFFBQUEsQ0FBUyxTQUFULENBQVg7QUFBSDs7QUFDTCxFQUFBLEdBQUssU0FBQyxDQUFEO1NBQU8sWUFBQSxDQUFhLENBQWI7QUFBUDs7QUFDTCxNQUFBLEdBQVMsU0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUw7U0FBVyxPQUFBLENBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFBLEdBQUUsQ0FBZCxFQUFnQixDQUFBLEdBQUUsQ0FBbEI7QUFBWDs7QUFDVCxFQUFBLEdBQUssU0FBQyxNQUFEO1NBQVksTUFBQSxDQUFPLE9BQUEsQ0FBUSxNQUFSLENBQVA7QUFBWjs7QUFDTCxLQUFBLEdBQVEsT0FBTyxDQUFDOztBQUVoQixLQUFBLEdBQVEsU0FBQTtBQUNOLE1BQUE7RUFBQSxDQUFBLEdBQUksU0FBUyxDQUFDO0VBQ2QsSUFBRyxDQUFBLEtBQUcsQ0FBTjtBQUNFLFdBQU8sQ0FBQyxDQUFDLEtBQUYsQ0FBUSxTQUFVLENBQUEsQ0FBQSxDQUFsQixFQURUO0dBQUEsTUFFSyxJQUFHLENBQUEsS0FBRyxDQUFOO0FBQ0gsV0FBTyxDQUFDLENBQUMsS0FBRixDQUFRLFNBQVUsQ0FBQSxDQUFBLENBQWxCLEVBQXFCLFNBQVUsQ0FBQSxDQUFBLENBQS9CLEVBREo7R0FBQSxNQUVBLElBQUcsQ0FBQSxLQUFHLENBQU47QUFDSCxXQUFPLENBQUMsQ0FBQyxLQUFGLENBQVEsU0FBVSxDQUFBLENBQUEsQ0FBbEIsRUFBcUIsU0FBVSxDQUFBLENBQUEsQ0FBL0IsRUFBa0MsU0FBVSxDQUFBLENBQUEsQ0FBNUMsRUFESjs7QUFOQzs7QUFTUixhQUFBLEdBQWdCLFNBQUMsQ0FBRDtBQUE4QixNQUFBOztJQUE3QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7O1NBQVMsQ0FBQyxDQUFDLE1BQUY7O0FBQVM7QUFBQTtTQUFBLHFDQUFBOzttQkFBQSxDQUFDLENBQUMsS0FBRixDQUFRLEdBQVI7QUFBQTs7TUFBVDtBQUE5Qjs7QUFDaEIsTUFBQSxDQUFPLGFBQUEsQ0FBYyx1REFBZCxDQUFQLEVBQStFO0VBQUMsR0FBQSxFQUFJLEdBQUw7RUFBVSxHQUFBLEVBQUksR0FBZDtDQUEvRSIsInNvdXJjZXNDb250ZW50IjpbImFzc2VydCA9IChhLGIpIC0+XHJcbiAgaWYgIV8uaXNFcXVhbChhLGIpXHJcbiAgICBwcmludCBcIkFzc2VydCBmYWlsZWQ6ICN7YX0gIT0gI3tifVwiXHJcblxyXG5maXhDb2xvciA9IChhcmdzKSAtPlxyXG4gIG4gPSBhcmdzLmxlbmd0aFxyXG4gIHI9MFxyXG4gIGc9MFxyXG4gIGI9MFxyXG4gIGE9MVxyXG4gIGlmIG4gPT0gMVxyXG4gICAgciA9IGFyZ3NbMF1cclxuICAgIGcgPSByXHJcbiAgICBiID0gclxyXG4gIGVsc2UgaWYgbiA9PSAzXHJcbiAgICByID0gYXJnc1swXVxyXG4gICAgZyA9IGFyZ3NbMV1cclxuICAgIGIgPSBhcmdzWzJdXHJcbiAgZWxzZSBpZiBuPT00XHJcbiAgICByID0gYXJnc1swXVxyXG4gICAgZyA9IGFyZ3NbMV1cclxuICAgIGIgPSBhcmdzWzJdXHJcbiAgICBhID0gYXJnc1szXSAgICBcclxuICByZXR1cm4gY29sb3IgMjU1ICogciwgMjU1ICogZywgMjU1ICogYiwgMjU1ICogYVxyXG5cclxuZmMgPSAtPiBpZiBhcmd1bWVudHMubGVuZ3RoID09IDAgdGhlbiBub0ZpbGwoKSBlbHNlIGZpbGwgZml4Q29sb3IgYXJndW1lbnRzXHJcbnNjID0gKHIsIGcsIGIpIC0+IGlmIGFyZ3VtZW50cy5sZW5ndGggPT0gMCB0aGVuIG5vU3Ryb2tlKCkgZWxzZSBzdHJva2UgZml4Q29sb3IgYXJndW1lbnRzXHJcbmJnID0gLT4gYmFja2dyb3VuZCBmaXhDb2xvciBhcmd1bWVudHNcclxuc3cgPSAobikgLT4gc3Ryb2tlV2VpZ2h0IG5cclxuY2lyY2xlID0gKHgseSxyKSAtPiBlbGxpcHNlIHgseSwyKnIsMipyXHJcbnJkID0gKHZpbmtlbCkgLT4gcm90YXRlIHJhZGlhbnMgdmlua2VsXHJcbnByaW50ID0gY29uc29sZS5sb2dcclxuXHJcbnJhbmdlID0gLT5cclxuICBuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gIGlmIG49PTFcclxuICAgIHJldHVybiBfLnJhbmdlIGFyZ3VtZW50c1swXVxyXG4gIGVsc2UgaWYgbj09MlxyXG4gICAgcmV0dXJuIF8ucmFuZ2UgYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXVxyXG4gIGVsc2UgaWYgbj09M1xyXG4gICAgcmV0dXJuIF8ucmFuZ2UgYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSxhcmd1bWVudHNbMl1cclxuXHJcbmdldFBhcmFtZXRlcnMgPSAoaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSAtPiBfLm9iamVjdChmLnNwbGl0ICc9JyBmb3IgZiBpbiBoLnNwbGl0KCc/JylbMV0uc3BsaXQoJyYnKSlcclxuYXNzZXJ0IGdldFBhcmFtZXRlcnMoJ2h0dHA6XFxcXGNocmlzdGVybmlsc3Nvbi5naXRodWIuaW9cXFNob3J0Y3V0XFx3d3c/YT0wJmI9MScpLCB7J2EnOicwJywgJ2InOicxJ31cclxuIl19
//# sourceURL=C:\github\Nilsson\nilsson.coffee