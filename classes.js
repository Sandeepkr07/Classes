const player = new Plyr('#player');

// Play video from custom URL
function playCustomUrl() {
  const url = document.getElementById('customUrl').value;
  if (url.trim()) {
    player.source = {
      type: 'video',
      sources: [{ src: url, provider: 'html5' }]
    };
    player.play();
  }
}

// Play video from encoded or direct link
function playVideo(encodedUrl) {
  try {
    const url = atob(encodedUrl); // decode base64 if used
    player.source = {
      type: 'video',
      sources: [{ src: url, provider: 'html5' }]
    };
    player.play();
  } catch {
    player.source = {
      type: 'video',
      sources: [{ src: encodedUrl, provider: 'html5' }]
    };
    player.play();
  }
}

// Dark/Light Theme Toggle
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.querySelector('.fa-sun').style.display = isDark ? 'none' : 'inline';
  document.querySelector('.fa-moon').style.display = isDark ? 'inline' : 'none';
}
