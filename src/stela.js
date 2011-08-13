
var stela = (function() {
  
  var scale = 2;
  var resolution = {w:192, h:160}; // 192x160 
  
  var fgColor = "#f0f0f0";
  var bgColor = "#00ff00";
  var x = 0;
  
  var canvas = document.createElement('canvas');
  canvas.width = resolution.w * scale;
  canvas.height = resolution.h * scale;
  var ctx = canvas.getContext("2d");

  return {
    init: function() {
      document.body.appendChild(canvas);
    },
    // fgColor: function(color) {
    // },
    field: function(p) {
      for(var i = 0; i < p.length; i++ ) {
        if (p[i] == 1) {
          ctx.fillStyle = fgColor;
        } else {
          ctx.fillStyle = bgColor;          
        }
        ctx.fillRect (x, 0, 10, 10);
        x+=10;
      }
    }
  };
})();




