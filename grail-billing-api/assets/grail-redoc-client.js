(function () {
  var root = document.getElementById("redoc");
  var fallback = document.querySelector(".api-fallback");

  function showFallback() {
    if (fallback) {
      fallback.setAttribute("data-visible", "true");
    }
  }

  if (!root || !window.Redoc || !window.__GRAIL_OPENAPI_DOCUMENT__) {
    showFallback();
    return;
  }

  window.Redoc.init(
    window.__GRAIL_OPENAPI_DOCUMENT__,
    {
      hideDownloadButton: false,
      nativeScrollbars: true,
      scrollYOffset: 0
    },
    root
  );
})();
