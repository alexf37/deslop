chrome.webNavigation.onCommitted.addListener(
  function (details) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["content.js"]
    })
  },
  { url: [{ hostSuffix: "google.com", pathPrefix: "/search" }] }
)
