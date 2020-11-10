let banner = document.getElementById('banner');
let title = document.getElementById('title');

function oneButton() {
  banner.src='./assets/images/cartoon-virtual-reality.png';
  title.style.color= '#ffffff';
}

function twoButton() {
  banner.src='./assets/images/cartoon-carried-aroud.png';
  title.style.color= '#ecd4f5';
}

function threeButton() {
  banner.src='./assets/images/cartoon-poiting-galaxy.png';
  title.style.color= '#cdd9ff';
}


gsap.from('.container', {opacity: 0, duration: 1, delay: 0.1, y: 30, stagger: 0.1,})
gsap.from('.container2', {opacity: 0, duration: 1, delay: 0.1, y: 30, stagger: 0.1,})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 0.8, y: 30, stagger: 0.1,})
gsap.from('.section', {opacity: 0, duration: 1, delay: 0.8, y: 30, stagger: 0.1,})
gsap.from('.articles__midle', {opacity: 0, duration: 0.5, delay: 1, y: 30})
