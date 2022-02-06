// background.js

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
    chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function(response){
      searchGoogle(response.data);
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, responseCallback) {
  if (request.message === "searchGoogle") {
      selectedText = request.payload;
      console.log("Selected text: " + selectedText);
      searchGoogle(selectedText);
  }
});


function searchGoogle(selectedText) {
	 var query = "http://google.com/search?q=" + selectedText;
     chrome.tabs.create({url: query});
} 







// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

// chrome.action.onClicked.addListener(function(tab) {
//     chrome.action.setTitle({tabId: tab.id, title: "You are on tab:" + tab.id});
// });



// function searchGoogle(selectedText) {
// 	 var query = "http://google.com/search?q=" + selectedText;
//      chrome.tabs.create({url: query});
// }

// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
// 	console.log("it works!" + tab.id);
// 	// chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function(response){
//     //    searchGoogle(response.data);
//     // });
// });

// chrome.runtime.onMessage.addListener(function(request, sender, responseCallback) {
//     if (request.method == "getSelection")
//       responseCallback({data: window.getSelection().toString()});
//     else
//       responseCallback({}); // snub them.
// });