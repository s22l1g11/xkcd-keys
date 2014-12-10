$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            $(".comicNav a[rel]")[0].click();
        break;

        case 39: // right
            $(".comicNav a[rel]")[1].click();
        break;

        case 68:
            SaveToDisk($('#comic img').attr('src'), $('#comic img').attr('title'));
        break;

        case 82:
            $(".comicNav a")[2].click();
        break;

        case 83:
            window.location.href="http://xkcd.com/";
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function SaveToDisk(fileURL, fileName) {
  // for non-IE
  if (!window.ActiveXObject) {
    var save = document.createElement('a');
    save.href = fileURL;
    save.target = '_blank';
    save.download = fileName || fileURL;
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0,
    false, false, false, false, 0, null);
    save.dispatchEvent(evt);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
  }

  // for IE
  else if ( !! window.ActiveXObject && document.execCommand)     {
    var _window = window.open(fileURL, "_blank");
    _window.document.close();
    _window.document.execCommand('SaveAs', true, fileName || fileURL)
    _window.close();
  }
}
