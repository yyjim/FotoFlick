function collectImages(data) {
  var targetImgs = new Array();
  for (var i in data) {
    var img = data[i];
    if (img.width && img.height) {
        if (img.width > 100 && img.height > 100) {
            targetImgs.push(img);
        }
    }
  }
  return targetImgs;
}

function generateNewImageDom(img) {
  var new_img_dom = document.createElement('img');
  if (img.width > img.height) {
      new_img_dom.setAttribute('width', '300');
    } else {
      new_img_dom.setAttribute('height', '300');
    }
    new_img_dom.setAttribute('src', img.src);
    return new_img_dom;
}

function iWantPhlickr() {
  var imgs = document.getElementsByTagName('img');
  var targetImgs = collectImages(imgs);

  var interact_dom = document.createElement('div');
  interact_dom.setAttribute('class', 'style_interact_board');
  for (var i in targetImgs) {
    var img = targetImgs[i];
    var new_img_dom = generateNewImageDom(img);
    interact_dom.appendChild(new_img_dom);
  }
  document.body.insertBefore(interact_dom, document.body.firstChild);
}

iWantPhlickr();

