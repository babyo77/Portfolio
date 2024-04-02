const appear = document.querySelector('.appear');
const cb = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
};
const io = new IntersectionObserver(cb);
io.observe(appear);




const items = document.querySelectorAll('.appear2');

const active = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview2');
    } else {
      entry.target.classList.remove('inview2');
    }
  });
};
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {if (window.CP.shouldStopExecution(0)) break;
  io2.observe(items[i]);
}window.CP.exitedLoop(0);


document.addEventListener("DOMContentLoaded", function() {
    const appear3 = document.querySelector('.appear3');
    if (appear3) {
        const cb3 = function (entries, observer) { // Added observer parameter
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('inview');
                    observer.unobserve(entry.target); // Use observer to unobserve
                }
            });
        };
        const io3 = new IntersectionObserver(cb3);
        io3.observe(appear3);
    } else {
        console.error("Element with class 'appear3' not found.");
    }
});



const io3 = new IntersectionObserver(cb3);
io3.observe(appear3);