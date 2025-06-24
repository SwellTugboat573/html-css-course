const yearEl = document.querySelector(".year");
const crntDate = new Date().getFullYear();
yearEl.textContent = crntDate;

const menuOpen = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
menuOpen.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////////////
// Sticky menu

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0, //this will be triggered as soon as 0% of the hero section is in the view port. If 1 then only when completely inside view port.
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////////////
// fixing flexboc gap property missin in some safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
