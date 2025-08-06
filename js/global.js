// Volume controls on 'loops' page
let audioElements = document.querySelectorAll("audio");

audioElements.forEach(function(audio) {
  audio.volume = 0.5;
});

document.addEventListener('play', function(e) {
    var loops = document.getElementsByTagName('audio');

    for (var i = 0, len = loops.length; i < len; i++) {
        if (loops[i] != e.target) {
            loops[i].pause();
        }
    }
}, true);