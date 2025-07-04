PK     �C�Z!1?2  2  
   index.html<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BPSC 70th - 2024 Portal</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="theme-toggle" onclick="toggleTheme()">
    <i class="fas fa-sun"></i>
    <i class="fas fa-moon" style="display:none;"></i>
  </div>

  <div class="container-fluid py-5 text-center">
    <h1 class="brand-title">
      <a href="https://t.me/AnandxExtractor" class="text-decoration-none text-reset">
        <i class="fas fa-bolt"></i> ANAND x PRO <i class="fas fa-bolt"></i>
      </a>
    </h1>
    <h2 class="header-title">BPSC 70th - 2024 on-line (P.T + Mains + Essay)</h2>
    <p class="lead">
      <a href="https://t.me/AnandxExtractor" class="badge bg-primary me-2"><i class="fas fa-robot"></i> JOIN @AnandxExtractor</a>
      <a href="http://t.me/itzAnandXD" class="badge bg-warning"><i class="fas fa-bolt"></i> ANAND</a>
    </p>
  </div>

  <div class="container mb-5">
    <div class="glass-card">
      <div class="video-container">
        <video id="player" playsinline controls></video>
      </div>
      <div class="url-input-wrapper">
        <input type="text" class="custom-url-input" id="customUrl" placeholder="Enter video URL to play..." />
        <button class="custom-url-btn" onclick="playCustomUrl()">
          <i class="fas fa-play"></i> Play Video
        </button>
      </div>
    </div>
  </div>

  <div class="container mb-4">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#videos">Videos</a></li>
      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#pdfs">PDFs</a></li>
      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#others">Others</a></li>
    </ul>

    <div class="tab-content">
      <div id="videos" class="tab-pane fade show active p-3">
        <div class="list-group">
          <div class="list-group-item" onclick="playVideo('https://www.example.com/video1.mp4')">
            <i class="fas fa-play-circle me-2"></i>Lecture 1: भारतीय संविधान
          </div>
          <div class="list-group-item" onclick="playVideo('https://www.example.com/video2.mp4')">
            <i class="fas fa-play-circle me-2"></i>Lecture 2: प्रस्तावना
          </div>
        </div>
      </div>
      <div id="pdfs" class="tab-pane fade p-3">
        <ul class="link-list">
          <li class="link-item"><a href="#">Download Polity Notes PDF</a></li>
        </ul>
      </div>
      <div id="others" class="tab-pane fade p-3">
        <ul class="link-list">
          <li class="link-item"><a href="#">Important Website Link</a></li>
        </ul>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
PK     �C�Z��h�   �   	   style.cssbody {
  font-family: 'Inter', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
}
.brand-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.video-container video {
  width: 100%;
  border-radius: 12px;
}
PK     �C�Z�p��  �  	   script.jsconst player = new Plyr('#player');

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

function playVideo(encodedUrl) {
  try {
    const url = atob(encodedUrl);
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

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.querySelector('.fa-sun').style.display = isDark ? 'none' : 'inline';
  document.querySelector('.fa-moon').style.display = isDark ? 'inline' : 'none';
}
PK     �C�Z!1?2  2  
           ��    index.htmlPK     �C�Z��h�   �   	           ��Z  style.cssPK     �C�Z�p��  �  	           ��g  script.jsPK      �   J    