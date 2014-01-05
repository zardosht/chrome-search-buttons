function searchGoogle(selectedText) {
	 var query = "http://google.com/search?q=" + selectedText;
     chrome.tabs.create({url: query});
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("it works!");
	chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function(response){
       searchGoogle(response.data);
    });
});
