function watch_change() {
  const elms = document.querySelectorAll("a");
  elms.forEach((elm) => {
    console.log("watch_change");
    if (elm.attributes.href) {
      console.log(elm.attributes.href);
      elm.setAttribute("target", "_blank");
      elm.setAttribute("rel", "noopener");
    }
  });
}

const observer = new MutationObserver(watch_change);

observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true,
  childList: true,
});

console.log("content-script");
