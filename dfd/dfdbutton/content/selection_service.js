chrome.extension.onRequest.addListener(function(request, sender, responseCallback) {
    if (request.method == "getSelection")
      responseCallback({data: window.getSelection().toString()});
    else
      responseCallback({}); // snub them.
});