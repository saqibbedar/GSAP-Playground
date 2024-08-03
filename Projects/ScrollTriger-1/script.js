function splitText(elem, isSpace) {
  let elemText = isSpace ? elem.textContent.split(" ") : elem.textContent.split("");
  let clutter = "";
  elemText.forEach((character) => {
    clutter += `<span class="span">${character}</span>`;
    elem.innerHTML = clutter;
  });
}

function page1Animation() {
  gsap.from(".page1 h1", {
    y: 25,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    stagger: 0.2,
  });
}

function page2Animation() {

  splitText(document.querySelector(".author-name"), false);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
    },
  });
  tl.from(".page2 .author-name span", {
    opacity: 0,
    y: 50,
    duration: 2,
    stagger: 0.3,
  }).from(
    ".page2 .author-link",
    {
      opacity: 0,
      y: 500,
      duration: 5,
    },
    "-= 1.5"
  );
}

function page3Animation() {

  splitText(document.querySelector(".page3 h1"), true);

  gsap.from(".page3 h1 span", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".page3 h1 span",
      scroller: "body",
      start: "top 100%",
      end: "top 60%",
      scrub: 1,
    },
  });
}

page1Animation();
page2Animation();
page3Animation();
