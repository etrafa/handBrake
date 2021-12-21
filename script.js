"using strict";

const windowsShowButton = document.querySelector(".windows-show");
const windowsShowClass = document.querySelector(".download-box-windows");
const macShowButton = document.querySelector(".mac-show");
const macShowClass = document.querySelector(".download-box-mac");
const linuxShowButton = document.querySelector(".linux-show");
const linuxShowClass = document.querySelector(".download-box-linus");
const otherShowButton = document.querySelector(".other-show");
const otherShowClass = document.querySelector(".download-box-others");

windowsShowButton.addEventListener("click", () => {
  windowsShowClass.classList.toggle("download-box-windows");
});

macShowButton.addEventListener("click", () => {
  macShowClass.classList.toggle("download-box-mac");
});

linuxShowButton.addEventListener("click", () => {
  linuxShowClass.classList.toggle("download-box-linus");
});

otherShowButton.addEventListener("click", () => {
  otherShowClass.classList.toggle("download-box-others");
});
