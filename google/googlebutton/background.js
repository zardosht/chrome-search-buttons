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
