// To start with GSAP, we will write the keyword GSAP and it has several methods, for now will use to & from. 
// Note: we writing GSAP and using these methods because we have linked the GSAP CDN in our index.html file, so it mandatory to add the GSAP CDN before we start working on GSAP.

// 1. to() method: it takes two parameters, one the targeted element and other object where you will perform your animation logic/ animation properties. In curly braces (object), we can write all css properties but with camelCase and use other GSAP built-in properties. Here is how: background-color -> backgroundColor

// to() method is applies when we want animate an element from its current position to the specific position while from () method is its reverse.

gsap.to(".box1", {
    x: 1000,
    duration: 1,
    delay: 1,
    rotate: 360,
    borderRadius: "50%",
    backgroundColor: "yellow"
})

// 2. from() method: It also takes two parameters, one is targeted element and other is the object for animations properties. You can pass any css property, in camelCase, to animate element from specific position to the initial position. 

gsap.from(".box2", {
    x: 1000,
    duration: 1,
    delay: 1,
    rotate: 360,
    borderRadius: "50%",
    backgroundColor: "yellow"
})
