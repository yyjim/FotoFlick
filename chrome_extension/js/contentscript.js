function collectImages(data) {
  var targetImgs = new Array();
  for (var i in data) {
    var img = data[i];
    if (img.width && img.height) {
        if (img.width > 150 || img.height > 150) {
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

var phlickr;

function getPhlickr() {
  if (phlickr == undefined) {
    phlickr = $('<div></div>').attr('id', 'phlickr').addClass('phlickr_container');    
    phlickr.append($('<div></div>').attr('id', 'phlickr_photo_queue'));    
  };
  $('body').prepend(phlickr);
  return phlickr;
}

function iWantPhlickr() {
  var imgs = document.getElementsByTagName('img');
  var targetImgs = collectImages(imgs);

  var phlickr_draggable = $('<div></div>').addClass('phlickr_draggable');
  $.each(targetImgs, function( index, img ) {
    var phlickr_draggable_element = $('<div></div>').addClass('phlickr_draggable_element');
    var new_imag_dom = generateNewImageDom(img);
    phlickr_draggable_element.append($(new_imag_dom));
    phlickr_draggable.append(phlickr_draggable_element);
  });

  var phlickr = getPhlickr();  
  phlickr.append(phlickr_draggable);
//  $('body').prepend(phlickr_container);  
    
  // var interact_dom = document.createElement('div');
  // interact_dom.setAttribute('class', 'style_interact_board');
  // for (var i in targetImgs) {
  //   var img = targetImgs[i];
  //   var new_img_dom = generateNewImageDom(img);
  //   interact_dom.appendChild(new_img_dom);
  // }
  //  document.body.insertBefore(interact_dom, document.body.firstChild);
}

if (phlickr) {
  phlickr.remove();
  phlickr = undefined;
} else {
  iWantPhlickr();
  reload_draggable();  
};


