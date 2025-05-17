let alertConfig = {
    speed: 5, // Speed of the alert movement
    textColor: '#FFFFFF', // Color of the text
    imageUrl: 'https://example.com/image.png', // URL of the image to display above the text
    videoUrl: '', // URL of the video to display above the text (leave empty if not using a video)
    width: 200, // Width of the alert element
    height: 100, // Height of the alert element
    soundUrl: 'https://example.com/sound.mp3', // URL of the sound to play in the background
    message: 'New Follower!', // Default alert message
    backgroundColour: '#FF0000', // Background color of the alert
    type: 'image', // Type of media to display ('image' or 'video')
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
    alertElement.style.backgroundColor = alertConfig.backgroundColour;
    alertElement.style.borderRadius = '10px';

    if (alertConfig.type === 'video' && alertConfig.videoUrl) {
        const video = document.createElement('video');
        video.src = alertConfig.videoUrl;
        video.style.width = '100%';
        video.style.height = 'auto';
        video.autoplay = true;
        video.loop = true;
        video.muted = true; // Ensure the video is muted
        alertElement.appendChild(video);
    } else if (alertConfig.type === 'image' && alertConfig.imageUrl) {
        const image = document.createElement('img');
        image.src = alertConfig.imageUrl;
        image.style.width = '100%';
        image.style.height = 'auto';
        alertElement.appendChild(image);
    }

    const text = document.createElement('div');
    text.innerText = alertConfig.message;

    alertElement.appendChild(text);

    document.body.appendChild(alertElement);

    return alertElement;
}
