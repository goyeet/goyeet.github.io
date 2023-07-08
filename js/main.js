let navbar = document.getElementById("navbar");
let headerText = document.getElementById("header-text");
let navPos = navbar.getBoundingClientRect().top;
let headerPos = headerText.getBoundingClientRect().top;
console.log(headerPos);
let opac = 0;

/* window.onscroll = function(e) {
    let scrollDirection;
    (this.oldScroll > this.scrollY) ? scrollDirection = 'up' : scrollDirection = 'down';
    this.oldScroll = this.scrollY;

    headerPos = headerText.getBoundingClientRect().top;
    console.log('headerPos', headerPos);

    // If scrolling down and not past header
    if (scrollDirection == 'up' && headerPos + 20 > 55) {
        // console.log('scrolling up');
        opac = opac - 0.1;
        navbar.style.backgroundColor = "rgba(20, 22, 28, 0)";
    }
    else if (scrollDirection == 'down' && headerPos - 60 < 0) {
        // console.log('scrolling down');
        opac = opac + 0.1;
        navbar.style.backgroundColor = "rgba(20, 22, 28, 1)";
    }
    // console.log('opac: ', opac);
} */

function showMoreInfo(id) {
    document.getElementById(id).style.display = "block";
}

function closeInfo(id) {
    document.getElementById(id).style.display = "none";
}

