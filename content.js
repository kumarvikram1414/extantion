function getVideoUrls() {
    const videos = document.querySelectorAll('video');
    const urls = [];
    videos.forEach(video => {
        if (video.src) {
            urls.push(video.src);
        }
        const sources = video.querySelectorAll('source');
        sources.forEach(source => {
            if (source.src) {
                urls.push(source.src);
            }
        });
    });
    return urls;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'scrapeVideos') {
        const urls = getVideoUrls();
        sendResponse({urls: urls});
    }
});
