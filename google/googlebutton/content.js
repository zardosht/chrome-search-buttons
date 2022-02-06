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
