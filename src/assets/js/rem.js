/* eslint-disable */
; (function (win, lib) {    //监听浏览器的屏幕大小
  var win = window;
  var doc = win.document;
  var docEl = doc.documentElement;
  var tid;

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width >= 1920 ? 1920 : docEl.getBoundingClientRect().width;
    var rem = width / 30;
    docEl.style.fontSize = rem + 'px';
  }

  win.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 100);
  }, false);

  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 100);
    }
  }, false);

  win.onresize = function () {
    refreshRem();
  };
  win.onload = function () {
    refreshRem();
  };
})(window, window['lib'] || (window['lib'] = {}));
/* eslint-disable */
