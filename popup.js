const toggle = document.getElementById('toggle');

chrome.storage.local.get('autoSkipEnabled', (data) => {
  toggle.checked = data.autoSkipEnabled !== false; // default is true
});

toggle.addEventListener('change', () => {
  const enabled = toggle.checked;
  chrome.storage.local.set({ autoSkipEnabled: enabled });

  // Broadcast to all tabs
  chrome.tabs.query({}, (tabs) => {
    for (const tab of tabs) {
      chrome.tabs.sendMessage(tab.id, {
        type: "TOGGLE_AUTO_SKIP",
        enabled: enabled
      });
    }
  });
});
