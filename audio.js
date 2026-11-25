// Starts the track on page load. If the browser blocks autoplay with sound,
// the first interaction anywhere on the page starts it instead.
(function () {
  var audio = document.getElementById('audio');
  if (!audio) return;

  audio.loop = true;
  audio.volume = 1;

  var events = ['click', 'pointerdown', 'keydown', 'touchstart', 'scroll'];

  function stopListening() {
    for (var i = 0; i < events.length; i++) {
      document.removeEventListener(events[i], unlock, true);
    }
  }

  function play() {
    var p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(stopListening, function () {
        /* blocked: waits for the next interaction */
      });
    }
    return p;
  }

  function unlock() {
    play();
    stopListening();
  }

  for (var i = 0; i < events.length; i++) {
    document.addEventListener(events[i], unlock, true);
  }

  play();
})();
