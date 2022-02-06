// content.js
console.log('Hello from Google Search Button!');

selectedText = window.getSelection().toString();

chrome.runtime.sendMessage(
    { 
        message: "searchGoogle",
        payload: selectedText
    },
    null
);




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

