const topBar = document.getElementById('topColorBar');
const bottomBar = document.getElementById('colorBar');
const colors = ['black', 'white', 'gray', 'green'];
let current = 0;

function changeColor() {
  current = (current + 1) % colors.length;
  topBar.style.backgroundColor = colors[current];
  bottomBar.style.backgroundColor = colors[current];
}

setInterval(changeColor, 3000);



  const ball = document.getElementById("ball");
  let position = 0;
  let direction = 2;

  function moveBall() {
    const maxPosition = window.innerWidth - 50;

    position += 4 * direction;

    if (position >= maxPosition || position <= 0) {
      direction *= -1;
    }

    ball.style.left = position + "px";
    requestAnimationFrame(moveBall);
  }

  moveBall();
