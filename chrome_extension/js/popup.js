//Executed when the extension's icon is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "js/contentscript.js"});
});

var selectedId = -1;
chrome.tabs.onUpdated.addListener(function(tabId, props) {
  if (props.status == "complete" && tabId == selectedId) {
    chrome.tabs.executeScript(null, {file: "js/badge.js"});
  }
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, props) {
  selectedId = tabId;
  chrome.tabs.executeScript(null, {file: "js/badge.js"});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  var img_count = request.img_count;
  console.log(img_count);
  var count_text = '' + img_count;
  if (img_count > 999) {
    count_text = '999+';
  }
  chrome.browserAction.setBadgeText({"text": count_text});
});