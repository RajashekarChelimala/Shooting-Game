$(document).ready(function() {
    var container = $('#game-container');
    var ship = container.find('.ship');
    var aliens = [];
    var bullets = [];
    var bulletSpeed = 5;
    var alienSpeed = 2;
    var alienInterval = 2000;
  
    // Move ship left or right
    $(document).keydown(function(e) {
      if (e.keyCode == 37) {
        ship.css('left', '-=10');
      } else if (e.keyCode == 39) {
        ship.css('left', '+=10');
      }
    });
  
    // Shoot bullet
    $(document).keydown(function(e) {
      if (e.keyCode == 32) {
        var bullet = $('<div class="bullet"></div>');
        bullet.css({
          left: ship.offset().left + ship.width() / 2 - 5,
          bottom: ship.height() + 10
        });
        container.append(bullet);
        bullets.push(bullet);
      }
    });
  
    // Move bullets and check collision
    setInterval(function() {
      bullets.forEach(function(bullet) {
        var top = bullet.offset().top;
        bullet.css('top', top - bulletSpeed);
        if (top <= 0) {
          bullet.remove();
          bullets.splice(bullets.indexOf(bullet), 1);
        } else {
          aliens.forEach(function(alien) {
            if (isColliding(bullet, alien)) {
              alien.remove();
              aliens.splice(aliens.indexOf(alien), 1);
              bullet.remove();
              bullets.splice(bullets.indexOf(bullet), 1);
            }
          });
        }
      });
    }, 10);
  
    // Create aliens and move them
    setInterval(function() {
      var alien = $('<div class="alien"></div>');
      alien.css({
        left: getRandomInt(0, container.width() - alien.width()),
        top: -alien.height()
      });
      container.append(alien);
      aliens.push(alien);
    }, alienInterval);
  
    setInterval(function() {
      aliens.forEach(function(alien) {
        var top = alien.offset().top;
        alien.css('top', top + alienSpeed);
        if (top >= container.height()) {
          alien.remove();
          aliens.splice(aliens.indexOf(alien), 1);
        }
      });
    }, 10);
  
    // Check collision between two elements
    function isColliding(element1, element2) {
      var rect1 = element1[0].getBoundingClientRect();
      var rect2 = element2[0].getBoundingClientRect();
      return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
      );
    }
  
    // Get random integer between min and max (inclusive)
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  