function searchWikipedia(selectedText) {
	 var query = "http://de.wikipedia.com/wiki/" + selectedText;
     chrome.tabs.create({url: query});
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
        searchWikipedia(response.data);
    });
});
