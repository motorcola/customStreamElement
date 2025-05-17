// Define the alert configuration
fetch('./fields.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching JSON:', error));

  const alertConfig = {
    speed: 5, // Speed of the alert movement
    textColor: '#FFFFFF', // Color of the text
    imageUrl: 'https://example.com/image.png', // URL of the image to display above the text
    width: 200, // Width of the alert element
    height: 100, // Height of the alert element
    soundUrl: 'https://example.com/sound.mp3', // URL of the sound to play in the background
    message: 'New Follower!', // Default alert message
};

// Create the alert element
function createAlert() {
    const alertElement = document.createElement('div');
    alertElement.style.position = 'absolute';
    alertElement.style.width = `${alertConfig.width}px`;
    alertElement.style.height = `${alertConfig.height}px`;
    alertElement.style.overflow = 'hidden';
    alertElement.style.textAlign = 'center';
    alertElement.style.color = alertConfig.textColor;
    alertElement.style.fontSize = '16px';
    alertElement.style.fontWeight = 'bold';
    alertElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    alertElement.style.borderRadius = '10px';

    const image = document.createElement('img');
    image.src = alertConfig.imageUrl;
    image.style.width = '100%';
    image.style.height = 'auto';

    const text = document.createElement('div');
    text.innerText = alertConfig.message;

    alertElement.appendChild(image);
    alertElement.appendChild(text);

    document.body.appendChild(alertElement);

    return alertElement;
}

// Play the alert sound
function playAlertSound() {
    const audio = new Audio(alertConfig.soundUrl);
    audio.play();
}

// Animate the alert bouncing around the screen
function animateAlert(alertElement) {
    let x = Math.random() * (window.innerWidth - alertConfig.width);
    let y = Math.random() * (window.innerHeight - alertConfig.height);
    let dx = alertConfig.speed;
    let dy = alertConfig.speed;

    function move() {
        x += dx;
        y += dy;

        if (x <= 0 || x + alertConfig.width >= window.innerWidth) {
            dx = -dx;
        }
        if (y <= 0 || y + alertConfig.height >= window.innerHeight) {
            dy = -dy;
        }

        alertElement.style.left = `${x}px`;
        alertElement.style.top = `${y}px`;

        requestAnimationFrame(move);
    }

    move();
}

// Initialize the alert
function showAlert() {
    const alertElement = createAlert();
    playAlertSound();
    animateAlert(alertElement);

    // Remove the alert after 10 seconds
    setTimeout(() => {
        alertElement.remove();
    }, 10000);
}

// Example usage: Trigger the alert
showAlert();