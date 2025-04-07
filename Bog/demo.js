const audio = document.createElement("audio");
const source = document.createElement("source");

source.setAttribute('src', 'audio/Господи помилуй молитва _ Православное пение.mp3');
source.setAttribute('type', 'audio/mpeg');

audio.appendChild(source);
audio.setAttribute('controls', 'controls'); // Allow user interaction
document.body.appendChild(audio);

// Restore audio position when metadata is loaded
audio.addEventListener("loadedmetadata", () => {
    const savedTime = localStorage.getItem("audioCurrentTime");
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }
});

// Save current time periodically
audio.addEventListener("timeupdate", () => {
    localStorage.setItem("audioCurrentTime", audio.currentTime);
});