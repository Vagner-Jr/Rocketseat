let body = document.querySelector("body");
let sitcher = document.getElementById("sitcher");

sitcher.addEventListener("click", () => {
  let containClassDark = body.classList.contains("dark");
  if (!containClassDark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
