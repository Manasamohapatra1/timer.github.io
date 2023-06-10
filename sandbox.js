// Get DOM elements
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');

// Initialize timer variables
let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to update the timer display
function updateTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  timerElement.textContent = formattedTime;
}

// Event listeners for buttons
startButton.addEventListener('click', () => {
  if (timer === null) {
    timer = setInterval(updateTime, 1000);
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerElement.textContent = '00:00:00';
});

