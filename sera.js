
function desviamana(t) {
  var btn = t;
  console.log('aff');
  alert('será?')
  // var newBottom = randomNumber(10, 90) + '%';
  // var newLeft = randomNumber(10, 90) + '%';
  // console.log('Moving to:', newBottom, newLeft);
  btn.style.position = 'absolute';
  btn.style.bottom = randomNumber(10, 90) + '%';
  btn.style.left = randomNumber(10, 90) + '%';
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function sim() {
  window.location.href = 'eai.html';
}
