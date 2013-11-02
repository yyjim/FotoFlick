/**
 * Performs an XMLHttpRequest to Twitter's API to get trending topics.
 *
 * @param callback Function If the response from fetching url has a
 *     HTTP status of 200, this function is called with a JSON decoded
 *     response.  Otherwise, this function is called with null.
 */
function fetchTwitterFeed(callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        callback(null);
      }
    }
  }
  // Note that any URL fetched here must be matched by a permission in
  // the manifest.json file!
  var url = 'http://pic-collage.com/api/collages/feed';
  xhr.open('GET', url, true);
  xhr.send();
};

/**
 * Parses text from Twitter's API and generates a bar with trending topics at
 * the top of the current page
 *
 * @param data Object JSON decoded response.  Null if the request failed.
 */
function onText(jsonMsg) {
  // Only render the bar if the data is parsed into a format we recognize.
  if (jsonMsg) {
    // Create the overlay at the top of the page and fill it with data.
    var trends_dom = document.createElement('div');

    for (var i in jsonMsg.collages.data) {
      var img_dom = document.createElement('img');
      var collage = jsonMsg.collages.data[i];
      console.log(collage)
      img_dom.src = collage["image_original"];
      trends_dom.appendChild(img_dom);
    }

    document.body.appendChild(trends_dom);
  }
};

function fetchImage () {
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

