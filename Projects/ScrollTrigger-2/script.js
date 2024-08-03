function splitText(elem, isSpace) {
  let elemText = isSpace
    ? elem.textContent.split(" ")
    : elem.textContent.split("");
  let clutter = "";
  elemText.forEach((character) => {
    clutter += `<span class="span">${character}</span>`;
    elem.innerHTML = clutter;
  });
}

gsap.to(".page2 h1", {
    transform: "translate(-167%)",
    duration: 2,
    scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})