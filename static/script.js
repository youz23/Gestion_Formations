let scrollcontainer = document.querySelector(".my-row");
let scrollback = document.getElementById("backBtn");
let scrollnext = document.getElementById("nextBtn");

scrollcontainer.addEventListener ("wheel", (evt) => {
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
  scrollcontainer.style.scrollBehavior = 'auto';
});

scrollback.addEventListener('click', () => {
  scrollcontainer.style.scrollBehavior = 'smooth';
  scrollcontainer.scrollLeft -= 100;
});

scrollnext.addEventListener('click', () => {
  scrollcontainer.style.scrollBehavior = 'smooth';
  scrollcontainer.scrollLeft += 100;
});