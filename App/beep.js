function playBeep(frequency, duration) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

// Function to play a success sound
function playSuccessSound() {
    playBeep(523, 300); 
}

// Function to play an error sound
function playErrorSound() {
    playBeep(311, 300); 
}

// Function to play a notification sound
function playNotificationSound() {
    playBeep(622, 200); 

// Function to play the default soundtrack
function playDefaultSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/default.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the jazz soundtrack
function playJazzSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/jazz.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the classical soundtrack
function playClassicalSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/classical.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the electronic soundtrack
function playElectronicSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/electronic.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the rock soundtrack
function playRockSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/rock.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the ambient soundtrack
function playAmbientSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/ambient.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the hip-hop soundtrack
function playHipHopSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/hiphop.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the pop soundtrack
function playPopSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/pop.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the reggae soundtrack
function playReggaeSoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/reggae.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

// Function to play the country soundtrack
function playCountrySoundtrack() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('path/to/country.mp3');
    
    const source = audioContext.createBufferSource();

    fetch(audioElement.src)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
            source.buffer = decodedData;
            source.connect(audioContext.destination);
            source.start();
        })
        .catch(error => console.error('Error decoding audio data', error));
}

export {
    playBeep,
    playSuccessSound,
    playErrorSound,
    playNotificationSound,
    playDefaultSoundtrack,
    playJazzSoundtrack,
    playClassicalSoundtrack,
    playElectronicSoundtrack,
    playRockSoundtrack,
    playAmbientSoundtrack,
    playHipHopSoundtrack,
    playPopSoundtrack,
    playReggaeSoundtrack,
    playCountrySoundtrack
};
