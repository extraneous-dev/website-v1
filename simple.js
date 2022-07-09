var canvas = document.getElementById('animCanvas');
var context = canvas.getContext('2d');
var sections = document.querySelectorAll('section').keys();
console.log(sections);
var intersectionOptions = {
    threshold: .75
};
var callback = function (entries) {
    var item = entries[0];
    if (item.isIntersecting) {
        console.log("AAAA");
    }
};
var observer = new IntersectionObserver(callback, intersectionOptions);
sections.map(function (val) { return observer.observe(val); });
