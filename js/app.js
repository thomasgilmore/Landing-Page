const nav = document.querySelector('#navbar__list');

var text = ["Section 1", "Section 2", "Section 3", "Section 4"];
var href = ["#section1", "#section2", "#section3", "#section4"];
var newClass = ["section1", "section2", "section3", "section4"];
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

window.onscroll = function() {myFunction()};

var sticky = nav.offsetTop - 15;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

function test () {
  console.log('hello');
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');
var section3 = document.querySelector('.section3');
var section4 = document.querySelector('.section4');
section1.addEventListener('click', test);
section2.addEventListener('click', test);
section3.addEventListener('click', test);
section4.addEventListener('click', test);