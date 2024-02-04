document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".m-sli");
  let curimg = 0;
  let intervalId;

  function cgimg() {
    imgs.forEach((img) => img.classList.remove("active"));
    curimg = (curimg + 1) % imgs.length;
    imgs[curimg].classList.add("active");
  }

  function startInterval() {
    intervalId = setInterval(cgimg, 4500);
  }

  function stopInterval() {
    clearInterval(intervalId);
  }

  // Start the interval when the document is loaded
  startInterval();

  // Add event listeners for hover
  imgs.forEach((img) => {
    img.addEventListener("mouseover", stopInterval);
    img.addEventListener("mouseout", startInterval);
  });
});
