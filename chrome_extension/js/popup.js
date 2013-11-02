console.log("Background javascript loaded");

//Executed when the extension's icon is clicked
chrome.browserAction.onClicked.addListener(function(tab)
{
    console.log("Get images we need and add them on to the pages");
    chrome.tabs.executeScript(null, {file: "js/contentscript.js"});
});