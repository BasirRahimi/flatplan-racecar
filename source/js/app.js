var currentActiveScreen     = 0;
var background              = null;
var screenPositions         = [];
var navItems                = null;
var progressBar             = null;

document.addEventListener('DOMContentLoaded', ()=>{
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    if(window.innerHeight > window.innerWidth || orientation === 'portrait-secondary' || orientation === 'portrait-primary'){
        document.getElementById('landscapeNotice').style.display = 'block';
        document.addEventListener('orientationchange', ()=>{
            init();
        })
    } else {
        init();
    }
});

function init() {
    document.body.classList.add('initialised');
    background          = document.getElementById('background');
    navItems            = document.getElementsByClassName('nav-item');
    progressBar         = document.getElementById('progress');
    
    var sections = document.getElementsByClassName('art-section');
    for (let i = 0; i < sections.length; i++) {
        screenPositions.push({
            x: sections[i].offsetLeft - (sections[i].offsetLeft * 2),
            y: sections[i].offsetTop - (sections[i].offsetTop * 2)
        })
    }
}

function goToSection(screen) {
    currentActiveScreen = screen;
    updateScreen();
    updateElements();
}

function updateScreen() {
    // move the background
    var position = screenPositions[currentActiveScreen];
    background.style.left = `${position.x}px`;
    background.style.top = `${position.y}px`;
}

function updateElements() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active', 'complete');
    }

    //add active class to the correct nav item
    if(currentActiveScreen < 11) {
        var activeItem = navItems[currentActiveScreen-1];
        if(activeItem) {
            activeItem.classList.add('active');
            prevButton.classList.remove('disabled');
        } else {
            prevButton.classList.add('disabled');
        }
    }
    if(currentActiveScreen < 11) {
        progressBar.style.width = `${Math.abs(currentActiveScreen-10)*10}%`;
        nextButton.classList.remove('disabled');
    } else {
        nextButton.classList.add('disabled');
    }
}

function progressBarTo(section) {
    progressBar.style.width = `${Math.abs(section-10)*10}%`;
}