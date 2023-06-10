let countdownTimer;
let ringtoneAudio;

function startCountdown() {
    // Get the duration from the input field
    const durationInput = document.getElementById("duration");
    const duration = parseInt(durationInput.value);

    // Validate the duration
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    // Disable the input field and start button during the countdown
    durationInput.disabled = true;
    document.querySelector("button").disabled = true;

    // Calculate the countdown end time
    const endTime = Date.now() + duration * 1000;

    // Update the countdown every 1 second
    countdownTimer = setInterval(() => {
        // Get the current time
        const currentTime = Date.now();

        // Calculate the remaining time
        const remainingTime = Math.max(0, endTime - currentTime);

        // Calculate minutes and seconds
        const minutes = Math.floor(remainingTime / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("timer").innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        // If the countdown is finished, play the ringtone and stop the countdown
        if (remainingTime === 0) {
            playRingtone();
            stopCountdown();
        }
    }, 1000);
}

function stopCountdown() {
    // Clear the countdown interval
    clearInterval(countdownTimer);

    // Enable the input field and start button
    document.getElementById("duration").disabled = false;
    document.querySelector("button").disabled = false;
}

function playRingtone() {
    // Get the audio element
    ringtoneAudio = document.getElementById("ringtone");

    // Play the ringtone
    ringtoneAudio.play();
}

function stopRingtone() {
    // Pause the ringtone
    ringtoneAudio.pause();
    ringtoneAudio.currentTime = 0;
}

