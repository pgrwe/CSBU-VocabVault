chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'highlightedText') {
    console.log(message.text);
  }
});

chrome.contextMenus.create({
    id: "Vocab vault",
    title: "Add \"%s\" to vault",
    contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(function(info, tab){
    // temp code -> need to store info.selectionText and pass it through 
    baseURl = "https://www.vocabvault.study/";
    // var newURL = baseURl + info.selectionText;
    chrome.tabs.create({ url:baseURl});
    chrome.tabs.sendMessage(tab.id, { textInput: message.text });
});