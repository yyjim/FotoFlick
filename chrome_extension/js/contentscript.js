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

  var interact_dom = document.createElement('div');
  interact_dom.setAttribute('class', 'style_interact_board');
  for (var i in targetImgs) {
    var img = targetImgs[i];
    var new_img_dom = document.createElement('img');
    if (img.width > img.height) {
      new_img_dom.setAttribute('width', '300');
    } else {
      new_img_dom.setAttribute('height', '300');
    }
    new_img_dom.setAttribute('src', img.src);
    interact_dom.appendChild(new_img_dom);
  }
  document.body.insertBefore(interact_dom, document.body.firstChild);
}

fetchImage();

