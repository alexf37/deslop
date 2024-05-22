import type { PlasmoCSConfig } from "plasmo"

if (!window.location.href.includes("&udm")) {
  // Append "&udm=14" to the URL
  let newUrl = window.location.href + "&udm=14#ip=1"
  window.history.replaceState(null, null, newUrl)
  // Reload the page with new parameters
  window.location.reload()
}

export const config: PlasmoCSConfig = {
  matches: ["*://www.google.com/search*"]
}
