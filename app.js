let pcc = document.getElementById("project-cards-container");

let projects_data = [
  {
    project_name: "GSAP to & from methods",
    demo_url:
      "https://saqibbedar.github.io/GSAP-Playground/00-GSAP-to-from-methods/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/00-GSAP-to-from-methods",
  },
  {
    project_name: "GSAP Stagger",
    demo_url: "https://saqibbedar.github.io/GSAP-Playground/01-GSAP-Stagger/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/01-GSAP-Stagger",
  },
  {
    project_name: "GSAP Repeat Property",
    demo_url: "https://saqibbedar.github.io/GSAP-Playground/02-GSAP-repeat/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/02-GSAP-repeat",
  },
  {
    project_name: "GSAP timeline",
    demo_url: "https://saqibbedar.github.io/GSAP-Playground/03-GSAP-timeline/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/02-GSAP-repeat",
  },
  {
    project_name: "GSAP ScrollTrigger",
    demo_url:
      "https://saqibbedar.github.io/GSAP-Playground/04-GSAP-ScrollTrigger/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/04-GSAP-ScrollTrigger",
  },
  {
    project_name: "Project1: Cursor Animation",
    demo_url:
      "https://saqibbedar.github.io/GSAP-Playground/Projects/Cursor-Animation/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/Projects/Cursor-Animation",
  },
  {
    project_name: "Project2: GSAP timeline",
    demo_url:
      "https://saqibbedar.github.io/GSAP-Playground/Projects/GSAP-timeline/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/Projects/GSAP-timeline",
  },
  {
    project_name: "Project3: SVG String Animation",
    demo_url:
      "https://saqibbedar.github.io/GSAP-Playground/Projects/SVG-String-Animation/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/Projects/SVG-String-Animation",
  },
  {
    project_name: "Project4: ScrollTrigger-1",
    demo_url:
      "https://saqibbedar.github.io/GSAP-Playground/Projects/ScrollTriger-1/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/Projects/ScrollTriger-1",
  },
  {
    project_name: "Project5: ScrollTrigger-2",
    demo_url:
      "https://saqibbedar.github.io/GSAP-Playground/Projects/ScrollTrigger-2/",
    source_code_url:
      "https://github.com/saqibbedar/GSAP-Playground/tree/main/Projects/ScrollTrigger-2",
  },
];

const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

let clutter = "";

projects_data.sort().map(({ project_name, demo_url, source_code_url }) => {
    clutter += `<div class="bg-white p-6 rounded-lg shadow-lg">
                 <div class="flex items-center gap-3 mb-4">
                              <svg class="w-8 h-8 text-green-500 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="inherit" width="inherit" xmlns="http://www.w3.org/2000/svg"><path d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"></path></svg>

                               <span class="text-xl font-semibold text-black">${truncateText(
                                 project_name,
                                 25
                               )}</span>

                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
                            <a href='${demo_url}' target="_blank" class="flex gap-2 items-center justify-center bg-green-500 text-white font-medium py-2 px-4 rounded-md">Live demo
                                <svg class="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="inherit" width="inherit" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"></path></svg>
                            </a>
                            <a href='${source_code_url}' target="_blank" class="flex items-center justify-center gap-2 bg-green-500 text-white font-medium py-2 px-4 rounded-md">Source code
                                <svg class="h-6 w-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512"  xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> 
                            </a>
                        </div>
            </div>`;
});

pcc.innerHTML = clutter;

// animations

let tl = gsap.timeline();

function introAnimation() {
  tl.from("#intro-slide", {
    xPercent: "-100",
    duration: 1.3,
    delay: 0.3,
  })
    .from("#intro-slide h1", {
      opacity: 0,
      y: "+=30",
      stagger: 0.5,
    })
    .to("#intro-slide h1", {
      opacity: 0,
      y: "-=30",
      stagger: 0.5,
    })
    .to("#intro-slide", {
      xPercent: "-100",
      duration: 1.5,
    })
    .from("#welcome", {
      opacity: 0,
      duration: 0.5,
    });
}

introAnimation();