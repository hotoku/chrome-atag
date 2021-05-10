function watch_change() {
  console.log("change");
}

const observer = new MutationObserver(watch_change);

observer.observe(document.getElementsByTagName("body")[0], {
  attributes: true,
  childList: true,
});

window.MyHoge = "hoge";
