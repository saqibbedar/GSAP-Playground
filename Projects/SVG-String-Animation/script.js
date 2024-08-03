var originalSvgPath = "M 10 100 Q 450 100 890 100";

var stringBox = document.querySelector(".string-box");

stringBox.addEventListener("mousemove", (dets)=>{
    let svgPathY = `M 10 100 Q ${dets.x} ${dets.y} 890 100`;
    gsap.to("svg path", {
        attr: {d:svgPathY},
        duration: .2,
        ease: "power3.out"
    })
})

stringBox.addEventListener("mouseleave", ()=>{
    gsap.to("svg path", {
        attr: {d:originalSvgPath},
        duration: .8,
        ease: "elastic.out(1,0.1)"
    })
})