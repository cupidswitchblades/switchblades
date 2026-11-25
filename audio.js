// Starts the track on page load, including inside a cross-origin iframe.
// Strategy: browsers always permit MUTED autoplay, so we start muted, then
// unmute as soon as playback has actually begun. If the browser refuses even
// that, we fall back to the first user interaction anywhere on the page.
(function () {
  var audio = document.getElementById('audio');
  if (!audio) return;

  audio.loop = true;
  audio.volume = 1;

  var unlocked = false;
  var events = ['click', 'pointerdown', 'keydown', 'touchstart', 'scroll'];

  function stopListening() {
    for (var i = 0; i < events.length; i++) {
      document.removeEventListener(events[i], unlock, true);
    }
  }

  function unmute() {
    if (unlocked) return;
    unlocked = true;
    try {
      audio.muted = false;
      audio.volume = 1;
    } catch (e) { /* ignore */ }
    stopListening();
  }

  function play() {
    // Muted playback is never blocked by autoplay policy.
    audio.muted = true;
    var p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(unmute, function () {
        // Even muted playback was refused: wait for a real gesture.
        audio.muted = false;
        for (var i = 0; i < events.length; i++) {
          document.addEventListener(events[i], unlock, true);
        }
      });
    } else {
      unmute();
    }
    return p;
  }

  function unlock() {
    audio.muted = false;
    play();
    unmute();
    stopListening();
  }

  play();
})();
