chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'downloadVideos') {
        message.urls.forEach(url => {
            chrome.downloads.download({
                url: url,
                saveAs: true
            });
        });
    }
});
