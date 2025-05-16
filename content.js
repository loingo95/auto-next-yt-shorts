let autoSkipEnabled = true;

chrome.storage.local.get('autoSkipEnabled', (data) => {
  autoSkipEnabled = data.autoSkipEnabled !== false;
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "TOGGLE_AUTO_SKIP") {
    autoSkipEnabled = message.enabled;
    console.log("📥 Auto-skip toggled to:", autoSkipEnabled);
  }
});

let lastTime = 0;
let loopDetected = false;
let currentVideo = null;

function simulateNextShort() {
  const downArrow = new KeyboardEvent("keydown", {
    key: "ArrowDown", code: "ArrowDown", keyCode: 40, which: 40,
    bubbles: true, cancelable: true
  });
  document.dispatchEvent(downArrow);
  console.log("⏭️ Skipped to next Short");
}

function monitorVideoLoop(video) {
  lastTime = 0;
  loopDetected = false;

  const interval = setInterval(() => {
    if (!autoSkipEnabled) return;

    const time = video.currentTime;
    const duration = video.duration;

    if (lastTime > duration - 0.5 && time < 0.3 && !loopDetected) {
      loopDetected = true;
      simulateNextShort();
    }

    if (time > 1.0) loopDetected = false;
    lastTime = time;
  }, 300);
}

function setupVideoWatcher() {
  const observer = new MutationObserver(() => {
    const video = document.querySelector("video");
    if (video && video !== currentVideo) {
      currentVideo = video;
      monitorVideoLoop(video);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  const initial = document.querySelector("video");
  if (initial) {
    currentVideo = initial;
    monitorVideoLoop(initial);
  }
}

if (window.location.href.includes("youtube.com/shorts")) {
  window.addEventListener("load", setupVideoWatcher);
}
