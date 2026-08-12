/* Config - modifiez ces valeurs */
const WEDDING_DATE = "2027-06-12T14:30:00";

const LINKS = {
  cagnotte: "#",
  photos: "#",
  booklet: "assets/pdf/church-booklet.pdf",
  directions: "index.html#directions",
  info: "index.html",
};

document.querySelectorAll("[data-link]").forEach(function (el) {
  const key = el.dataset.link;
  if (LINKS[key]) el.setAttribute("href", LINKS[key]);
});

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
  document.querySelectorAll(".nav-menu a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });
}

const countdown = document.getElementById("countdown");
if (countdown) {
  const target = new Date(WEDDING_DATE).getTime();

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = Date.now();
    let diff = Math.floor((target - now) / 1000);

    if (diff <= 0) {
      document.getElementById("countdown").style.display = "none";
      return;
    }

    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff - minutes * 60;

    document.getElementById("cd-days").textContent = pad(days);
    document.getElementById("cd-hours").textContent = pad(hours);
    document.getElementById("cd-minutes").textContent = pad(minutes);
    document.getElementById("cd-seconds").textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
}
