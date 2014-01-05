function searchFreeDictionary(selectedText) {
	 var query = "http://www.thefreedictionary.com/" + selectedText;
     chrome.tabs.create({url: query});
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function(response){
        searchFreeDictionary(response.data);
    });
});
