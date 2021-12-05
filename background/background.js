chrome.webRequest.onCompleted.addListener(
  (details) => {
    console.log(details);
  },
  {
    urls: ["https://*/*"],
    types: ["xmlhttprequest"],
  }
);
