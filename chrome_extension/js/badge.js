function updateAvailableImgCount() {
    var imgs = document.getElementsByTagName('img');
    var img_count = 0;

    for (var i in imgs) {
        var img = imgs[i];
        if ($(img).hasClass('phlickr_draggable')) continue;

        if (img.width && img.height) {
            if (img.width > 150 || img.height > 150) {
                img_count++;
            }
        }
    }
    return img_count;
}

chrome.runtime.sendMessage({img_count: updateAvailableImgCount()}, function(response) {});
