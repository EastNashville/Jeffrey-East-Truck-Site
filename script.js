
function enterTruck(event) {
  event.preventDefault();
  document.getElementById('ignitionSound').play();
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('interior').classList.remove('hidden');
}

// Create twinkling stars
const starsContainer = document.getElementById('stars');
const numberOfStars = 100;
for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (1 + Math.random() * 2).toFixed(2) + 's';
  starsContainer.appendChild(star);
}
