let imgContainer = document.querySelector(".img-container");
let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  });
});

imgContainer.addEventListener("mouseenter", (dets) => {
  cursor.textContent = "View More";
  gsap.to(cursor, {
    scale: 6,
    background: '#fff5',
  })
});

imgContainer.addEventListener("mouseleave", (dets) => {
  cursor.textContent = "";
  gsap.to(cursor, {
    scale: 1,
    background: '#fff',
  })
});
