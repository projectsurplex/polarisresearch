(function(){
  'use strict';
  
  var p      = document.getElementsByTagName('h1')[1],
      chars  = p.textContent.split(''),
      length = chars.length,
      shift  = 360 / length,
      angle  = 0,
      span, t;
  
  p.innerHTML = chars.map(function (char) {
    return '<span>' + char + '</span>';
  }).join('');
  
  span = p.children;
  
  function frame() {
    for (var i = 0; i < length; i++) {
      span[i].style.color = 'hsl(' + (angle + Math.floor(i * shift)) + ', 60%, 70%)';
    }
    angle++;
  }
  
  t = setInterval(frame, 10);
}());
