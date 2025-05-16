# Auto-Next YouTube Shorts

A simple Chrome extension that automatically skips to the next YouTube Short when a video finishes looping — with an easy toggle to enable or disable the feature.

## 🧠 Features

- 🔁 **Auto-skip looping Shorts** — no more watching the same Short on repeat
- ✅ **Toggle ON/OFF anytime** via popup
- 🧩 Lightweight, no external dependencies
- 🔒 Does **not collect any data**

---

## 🚀 Installation

1. Clone or download this repo
2. Go to `chrome://extensions` in your Chrome browser
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked**
5. Select the folder containing this extension (e.g., `auto-next-shorts`)
6. Done! Click the extension icon to access the toggle

---

## 📁 File Structure
```
auto-next-shorts/
├── manifest.json # Chrome extension config
├── popup.html # Popup UI
├── popup.js # Handles toggle logic
├── popup.css # Styling for the popup
├── content.js # Main logic to monitor Shorts and auto-skip
├── icon.png # Extension icon
└── README.md # This file
```

---

## 🛠️ How It Works

- The extension injects a content script into all YouTube Shorts pages
- It watches for when the video loops (based on playback time jump)
- When detected, it simulates a "Down Arrow" key press to skip to the next Short
- You can turn the feature on/off using the popup toggle — changes take effect instantly

---

## 🧼 Permissions

This extension only uses the following permissions:

- `storage`: to save your toggle preference
- `scripting`: to inject scripts into the Shorts page

**No tracking, ads, or analytics included.**

---

## 📜 License

MIT License — free to use, modify, and share.

---

## 🙋 FAQ

**Q: Will this work on regular YouTube videos?**
A: No — it only runs on `youtube.com/shorts/*`.

**Q: How do I turn it off?**
A: Click the extension icon and use the toggle in the popup.

---

Enjoy smooth, hands-free YouTube Shorts scrolling! 😎
