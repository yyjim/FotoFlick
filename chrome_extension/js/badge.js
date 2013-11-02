function updateAvailableImgCount() {
  var imgs = document.getElementsByTagName('img');
  var img_count = 0;

  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    // if (img == undefined) continue;
    if (img.hasAttribute('class')) {
      var img_class = img.getAttribute('class');
      if (img_class == 'phlickr_image') continue;
    }
    if (img.clientWidth && img.clientHeight) {
      if (img.clientWidth > 150 || img.clientHeight > 150) {
        img_count++;
      }
    }
  }
  return img_count;
}

chrome.runtime.sendMessage({img_count: updateAvailableImgCount()}, function(response) {});
