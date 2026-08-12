/* Config - modifiez ces valeurs */
const WEDDING_DATE = "2026-09-26T14:30:00";

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

const ICONS = {
  church:
    '<path d="M18 7l4 2v11"/><path d="M22 20H9.5"/><path d="M6 20H2V9l4 2"/><path d="M10 20V7l4-4 4 4v13"/><path d="M10 14h4"/><path d="M12 3v4"/><path d="M14 5h-4"/>',
  "book-open":
    '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  wine:
    '<path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>',
  shirt:
    '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  "circle-parking":
    '<circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',
  "bed-double":
    '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/>',
  camera:
    '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  gift:
    '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
  "map-pin":
    '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  info:
    '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  sparkle:
    '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
};

document.querySelectorAll("[data-icon]").forEach(function (el) {
  const name = el.dataset.icon;
  if (!ICONS[name]) return;
  el.innerHTML =
    '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    ICONS[name] +
    "</svg>";
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
