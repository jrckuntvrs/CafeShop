window.addEventListener("load", function () {
  const overlayLoader = document.getElementById("loader");
  setTimeout(() => {
    overlayLoader.classList.add("hidden");
  }, 3000); // Delay of 2 seconds
});
