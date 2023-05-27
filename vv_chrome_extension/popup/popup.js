document.getElementById("translateButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const sourceLanguage = document.getElementById("sourceLanguage").value;
  const targetLanguage = document.getElementById("targetLanguage").value;
  const translatedText = document.getElementById("translatedText");

  if (inputText.trim() === "" || sourceLanguage === targetLanguage) {
    translatedText.textContent = "Please select a source language different from the target language.";
    return;
  }

  const apiKey = "AIzaSyCLfbgcdr4Xc8YWP95saMbqPgcKbtolKDg";
  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&source=${sourceLanguage}&target=${targetLanguage}&q=${encodeURIComponent(inputText)}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      translatedText.textContent = data.data.translations[0].translatedText;
    })
    .catch((error) => {
      console.error("Error fetching translation:", error);
      translatedText.textContent = "An error occurred while translating the text.";
    });
});

document.getElementById("gotoVault").addEventListener("click", function(){
    const vvURL = "https://www.vocabvault.study/" 
    chrome.tabs.create({ url:vvURL});
})