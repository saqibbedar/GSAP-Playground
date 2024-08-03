let tl = gsap.timeline();

tl.from("nav h1", {
    y: -20,
    opacity: 0,
    duration: .6,
    delay: 1    
})
tl.from("nav .nav-menu h4", {
    y: -20,
    opacity: 0,
    duration: .33,
    delay: .2,
    stagger: .2
})
tl.from(".main-text", {
    scale: 0.5,
    opacity : 0,
    duration: .33,
    delay: .2,
})