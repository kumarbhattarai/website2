document.addEventListener('contextmenu', (e) => e.preventDefault());
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar.style.width === '0px' || !sidebar.style.width) {
        sidebar.style.display = 'flex';
        sidebar.style.transition = 'width 0.3s ease';
        sidebar.style.width = '130px';
        document.body.addEventListener('click', handleClickOutside, true); 
    }
}

function closeBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '0px';
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
    document.body.removeEventListener('click', handleClickOutside, true);
}

function handleClickOutside(event) {
    const sidebar = document.querySelector('.sidebar');
    const openButton = document.querySelector('.hideOnPc');


    if (!sidebar.contains(event.target) && !openButton.contains(event.target)) {
        closeBar();
    }
}

function scrollDown() {
    window.scrollBy({
        top: 820,
        left: 0,  
        behavior: 'smooth',
    });
}
var typed = new Typed(".info", {
    strings: ["Student", "Backend Developer", "Coder"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
});

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'; 
        document.body.classList.remove('loading'); 
    },2000);
});

const liscence=document.getElementById("lisc")
date=new Date().getFullYear()
liscence.innerText=date
document.addEventListener('scroll', () => {
    const el = document.getElementById("down");
    const el2 = document.getElementById('left');
    const elements = document.querySelectorAll('.right');

    const scrollThresholdDown = isMobileDevice() ? 100 : 200;
    const scrollThresholdLeft = isMobileDevice() ? 80 : 200;
    const scrollThresholdRight = isMobileDevice() ? 150 : 200;

    if (el && window.scrollY > scrollThresholdDown) {
        el.classList.add("animate__animated", "animate__slideInDown");
        el.style.visibility = "visible";
    } else {
        el.classList.remove("animate__animated", "animate__slideInDown");
        el.style.visibility = "hidden";
    }

    if (el2 && window.scrollY > scrollThresholdLeft) {
        el2.classList.add("animate__animated", "animate__zoomIn", "text-center");
        el2.style.visibility = "visible";
    } else {
        el2.classList.remove("animate__animated", "animate__zoomIn", "text-center");
        el2.style.visibility = "hidden";
    }

    elements.forEach(el3 => {
        if (window.scrollY > scrollThresholdRight) {
            el3.classList.add("animate__animated", "animate__pulse");
            el3.style.visibility = "visible";
        } else {
            el3.classList.remove("animate__animated", "animate__pulse");
            el3.style.visibility = "hidden";
        }
    });
});
