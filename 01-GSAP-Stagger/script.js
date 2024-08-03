// Stagger: It is used to animate elements one by one, for example in our main div we have 3 h1's and we want to animate reveal h1 one by one so we will use stagger and give the stagger value in seconds to show after how much time next element should be visible.

// Example: 

gsap.from(".main h1", {
    opacity: 0,
    duration: .3,
    y: 30,
    delay: 1,
    stagger: 0.1
})
