function watch_change() {
  const elms = document.querySelectorAll("a");
  elms.forEach((elm) => {
    if (elm.attributes.href) {
      console.log(
        "watch_change: " + Date.now() + " " + elm.attributes.href.value
      );
      elm.setAttribute("target", "_blank");
      elm.setAttribute("rel", "noopener");
      elm.removeAttribute("tabindex");
    }
  });
}

const observer = new MutationObserver(watch_change);

observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true,
});

console.log("content-script");
