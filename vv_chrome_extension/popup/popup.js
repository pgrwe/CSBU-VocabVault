document.getElementById("translateButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const sourceLanguage = document.getElementById("sourceLanguage").value;
  const targetLanguage = document.getElementById("targetLanguage").value;
  const translatedText = document.getElementById("translatedText");

  if (inputText.trim() === "" || sourceLanguage === targetLanguage) {
    translatedText.textContent = "Please select a source language different from the target language.";
    return;
  }

  const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(inputText)}`;

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