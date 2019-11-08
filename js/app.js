/* Creating varibale nav to store the element with
the id of navbar__list which is the ul element */
const nav = document.querySelector('#navbar__list');

//The text of the the new a elements that are being created
var text = ["Section 1", "Section 2", "Section 3", "Section 4"];
//The href link for the a elements that are being created
var href = ["#section1", "#section2", "#section3", "#section4"];
//The class of the a elements that are being created
var newClass = ["section1", "section2", "section3", "section4"];
//for loop to create all 4 li and a elements for the navigation 
for(var i = 0; i <= 3; i++)
{
    var a = document.createElement('a');
    var li = document.createElement('li');
    a.innerHTML = text[i];
    a.href = href[i];
    a.className = newClass[i];
    nav.appendChild(li);
    li.appendChild(a);
}

window.onscroll = function() {stickyNav()};

var sticky = nav.offsetTop - 15;

/* When the top of the window paces the top of the top of the
navigation the navigation becomes sticky/fixed */
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');
var section3 = document.querySelector('.section3');
var section4 = document.querySelector('.section4');

const sections = document.querySelectorAll('.section');

/* The function that runs when the user starts scrolling or clicks on a 
navigation link that will add or remove the class of nav-click to change
the style of that section numbers nav element. */
function checkScroll(e) {
  sections.forEach(sections => {
    const activeClass = window.scrollY;

    var section_1 = document.getElementById('section1');
    var section_2 = document.getElementById('section2');
    var section_3 = document.getElementById('section3');
    var section_4 = document.getElementById('section4');

    if (activeClass >= section_1.offsetTop-20 && activeClass < section_2.offsetTop-35) {
      section1.classList.add('nav-click');
      section2.classList.remove('nav-click');
      section3.classList.remove('nav-click');
      section4.classList.remove('nav-click');
    } else if (activeClass >= section_2.offsetTop-35 && activeClass < section_3.offsetTop-25) {
      section1.classList.remove('nav-click');
      section2.classList.add('nav-click');
      section3.classList.remove('nav-click');
      section4.classList.remove('nav-click');
    } else if (activeClass >= section_3.offsetTop-35 && activeClass < section_4.offsetTop-35) {
      section1.classList.remove('nav-click');
      section2.classList.remove('nav-click');
      section3.classList.add('nav-click');
      section4.classList.remove('nav-click');
    } else if (activeClass >= section_4.offsetTop-35) {
      section1.classList.remove('nav-click');
      section2.classList.remove('nav-click');
      section3.classList.remove('nav-click');
      section4.classList.add('nav-click');
    } 
  });
}

window.addEventListener('scroll', checkScroll);