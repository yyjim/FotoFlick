function fetchImage() {
  var imgs = document.getElementsByTagName('img');
  var targetImgs = new Array();
  for (var i in imgs) {
    var img = imgs[i];
    if (img.width && img.height) {
        if (img.width > 100 && img.height > 100) {
            targetImgs.push(img);
        }
    }
  }
  console.log(targetImgs);
}

fetchImage();

