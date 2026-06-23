const saveButton = document.getElementById("save-button");
const apiKeyInput = document.getElementById("api-key");
const successMessage = document.getElementById("success-message");
// Load saved Gemini API key when settings page opens
chrome.storage.sync.get(["gemini"], (result) => {
    if (result.gemini) {
        apiKeyInput.value = result.gemini;
    }
});
// Save API key to Chrome storage
saveButton.addEventListener("click", () => {

    const apiKey = apiKeyInput.value.trim();

    if (!apiKey) {
        alert("Please enter a Gemini API key");
        return;
    }

    chrome.storage.sync.set(
        {
            gemini: apiKey
        },
        () => {
            successMessage.style.display = "block";
        }
    );
});