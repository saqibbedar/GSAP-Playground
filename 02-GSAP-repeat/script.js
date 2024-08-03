// repeat: In GSAP, repeat is a useful property animate a element again and again, you can pass a solid number or give -1 to animated element infinite.

// yoyo: when we use repeat, we normally also add yoyo property as it helps in bounce backing the element otherwise animation will not bounce back but once animate then it will direct back to its initial position and again animation will start from there, for more, demonstrate through these examples.

// animation will repeat for 2 two times
gsap.from(".main .box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    repeat: 1,
})

// you will see an infinite animation because repeat value is -1
gsap.to(".main .box2", {
    x: 1000,
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo : true
})