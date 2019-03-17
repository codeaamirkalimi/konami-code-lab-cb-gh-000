const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;
function init() {
  // your code here

  document.body.addEventListener('keydown', function(){konamiCodeHandler(event)})
}

function konamiCodeHandler(e) {
  const key = e.key
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Congrats, you unlocked the konami code special")
      index = 0;
    }
  } else {
    index = 0;
  }
}
