function imgSlider (anything) {
    document.querySelector ('.starbucks').src = anything;
}
function changeColor (color) {
    const circle = document.querySelector ('.circle');
    circle.style.background = color;
}

const menubar = document.querySelector ('.menu');
const close = document.querySelector ('.close');
const sideNavbar = document.querySelector ('.sideNav');
const items = document.querySelector ('.items');
const section = document.querySelector ('.section');

menubar.addEventListener ('click', () => {
    items.style.visibility = 'visible';
    sideNavbar.style.visibility = 'visible';
    sideNavbar.style.width = '200px';
    menubar.style.visibility = 'hidden';
    close.style.visibility = 'visible';
    section.style.background = '#95989A';
    
});
close.addEventListener ('click', () => {
    items.style.visibility = 'hidden';
    sideNavbar.style.width = '0px';
    sideNavbar.style.visibility = 'hidden';
    close.style.visibility = 'hidden';
    menubar.style.visibility = 'visible';
    section.style.background = '#fff';
});
