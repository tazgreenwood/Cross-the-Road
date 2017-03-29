var isaac = null;

function init() {
  isaac = document.getElementById('isaac');
  isaac.style.position = 'absolute';
  isaac.style.left = 50 + 'vw';
  isaac.style.top = '10px';
  window.addEventListener('keydown', moveSelection);
}

var finish = document.getElementById('finish');

function moveRight(){
  if (isaac.style.left != 90 + "vw") {
    isaac.style.left = parseInt(isaac.style.left) + 20 + 'vw';
  }
}

function moveLeft(){
  if (isaac.style.left != 10 + "vw"){
    isaac.style.left = parseInt(isaac.style.left) - 20 + 'vw';
  }
}

function moveDown(){
  if (isaac.offsetTop < finish.offsetTop) {
    isaac.style.top = parseInt(isaac.style.top) + 91 + 'px';
    window.scrollBy(0, 50);
  }
}

function moveUp(){
  if (isaac.style.top != 10 + "px") {
    isaac.style.top = parseInt(isaac.style.top) - 91 + 'px';
    window.scrollBy(0, -50);
  }
}

var collision = setInterval(collisionDetect, 50);

function collisionDetect() {
  cars = document.getElementsByClassName("car");
  for (var car_key in cars) {
    car = cars[car_key];
    if (isaac.offsetLeft < car.offsetLeft + car.offsetWidth &&
      isaac.offsetLeft + isaac.offsetWidth > car.offsetLeft &&
      isaac.offsetTop < car.offsetTop + car.offsetHeight &&
      isaac.offsetHeight + isaac.offsetTop > car.offsetTop) {
        alert('Oops! You\'ve been hit by a car!');
        window.scrollTo(0,0);
        window.location.reload();
      }
  }
}

function moveSelection(evt) {
  switch (evt.keyCode) {
      case 37:
      moveLeft();
      break;
      case 39:
      moveRight();
      break;
      case 38:
      moveUp();
      break;
      case 40:
      moveDown();
      break;
      }
  }

var win = setInterval(Finished, 100);

function Finished() {
  if (isaac.offsetTop > finish.offsetTop) {
    alert("You Win!");
    window.scrollTo(0,0);
    init();
  }
}

window.onload = init;
