const nav = document.querySelector('#navbar__list');

var text = ["Section 1", "Section 2", "Section 3", "Section 4"]
for(var i = 0; i <= 3; i++)
{
    var a = document.createElement('a');
    var li = document.createElement('li');
    a.innerHTML = text[i];
    nav.appendChild(li);
    li.appendChild(a);
}