document.addEventListener('mouseup', () => {
  const selected_text = window.getSelection().toString();
  if (selected_text){
    chrome.runtime.sendMessage({ type: 'highlightedText', text: selected_text });
  }
});