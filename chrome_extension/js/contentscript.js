function fetchImage() {
  var imgs = document.getElementsByTagName('img');
  for (var i in imgs) {
    var img = imgs[i];
    if (img.width && img.height) {
        if (img.width > 100 && img.height) {
            console.log(img.src);
        }
    }
  }
}

fetchImage();

