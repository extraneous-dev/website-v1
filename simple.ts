const canvas = <HTMLCanvasElement> document.getElementById('animCanvas');
const context = canvas.getContext('2d');

const sections: any = document.querySelectorAll('section').keys();
// console.log(sections)

// const intersectionOptions = {
//     threshold: .75
// }

// const callback = (entries: IntersectionObserverEntry[]) => {
//     const item = entries[0];

//     if (item.isIntersecting) {
//         console.log("AAAA");
//     } 
// }

// const observer = new IntersectionObserver(callback, intersectionOptions);

// sections.map(val => observer.observe(val));
