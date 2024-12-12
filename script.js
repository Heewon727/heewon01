const BORDER_HIGHLIGHT_COLOR = "#7b3e19"; 
const BORDER_DEFAULT_COLOR = "";          
const BORDER_STYLE = "solid";
const BORDER_WIDTH = "2px";


function highlight(element) {
    element.style.borderColor = BORDER_HIGHLIGHT_COLOR;
    element.style.borderStyle = BORDER_STYLE;
    element.style.borderWidth = BORDER_WIDTH;
}

function removeHighlight(element) {
    element.style.borderColor = BORDER_DEFAULT_COLOR;
    element.style.borderStyle = BORDER_DEFAULT_COLOR;
    element.style.borderWidth = BORDER_DEFAULT_COLOR;
}

let sections = document.querySelectorAll('.section-content');
sections.forEach(function(section) {
    section.addEventListener('mouseover', function() {
        highlight(section);
    });
    section.addEventListener('mouseout', function() {
        removeHighlight(section);
    });
});

document.getElementById('openbtn').addEventListener('click', function() {
    document.getElementById('navbar_list').style.display = 'block';
    document.getElementById('navbar_list').classList.remove('hidden');
    document.getElementById('openbtn').style.display = 'none';
    document.getElementById('closebtn').style.display = 'inline-block';
});

document.getElementById('closebtn').addEventListener('click', function() {
    document.getElementById('navbar_list').style.display = 'none';
    document.getElementById('navbar_list').classList.add('hidden');
    document.getElementById('closebtn').style.display = 'none';
    document.getElementById('openbtn').style.display = 'inline-block';
});







