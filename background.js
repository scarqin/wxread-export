chrome.webRequest.onCompleted.addListener((details) => {
  console.log(details)
},{
  urls: ["http://*/*", "https://*/*"],
  types: ["xmlhttprequest"]
})