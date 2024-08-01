document.getElementById('scrapeBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'scrapeVideos'}, (response) => {
            if (response && response.urls) {
                chrome.runtime.sendMessage({action: 'downloadVideos', urls: response.urls});
            }
        });
    });
});
