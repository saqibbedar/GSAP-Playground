// gsap.registerPlugin(ScrollTrigger);

// Note: To use scrollTrigger make sure to insert the scrollTrigger CDN after the gsap CDN.
// scrollTrigger: To animate specific element based on the scrolling, we use scrollTrigger. scrollTrigger has various properties but important are as follows:

// 1. trigger: include element to which you want animate based on scrolling.
// 2. scroller: mostly we use "body" its as a value, for more search on google.
// 3. markers: these gives you stating and end point for visualization, remove these after you have setup the animations.
// 4. start: it tells the position from where the animation will start.
// 5. end: tells position where animation will stop.
// 6. scrub: most important to perform animation based on the scroll, this will animate element based on start and ending point.
// 7. pin: it takes boolean values and pin element until whole scroll is completed, remember always trigger the parent element  

gsap.from(".page1 .box",{
    scale: 0,
    delay: 1,
    duration: 2,
    rotation: -360
})


gsap.from(".page2 .box",{
    scale: 0,
    delay: 1,
    duration: 2,
    rotation: -360,
    scrollTrigger : {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start : "top 70%",
        end : "top 30%",
        scrub: 1,
    }
})

gsap.from(".page3 .box",{
    scale: 0,
    delay: 1,
    duration: 2,
    rotation: -360,
    scrollTrigger : {
        trigger: ".page3 .box",
        scroller: "body",
        markers: true,
        start : "top 70%",
        end : "top 30%",
        scrub: 1,
    }
})