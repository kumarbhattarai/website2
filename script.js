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

const h1Element = document.getElementById('scroll-hide');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        h1Element.style.display = 'none';
    } else {
        h1Element.style.display = 'block';
    }
});

function scrollDown() {
    window.scrollBy({
        top: 820,
        left: 0,  
        behavior: 'smooth',
    });
}
window.addEventListener('DOMContentLoaded', () => {
    // Check if the page has been loaded before
    if (!localStorage.getItem('isFirstLoad')) {
        // Set a timeout to hide the loader after 2 seconds
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none'; 
            document.body.classList.remove('loading'); 
        }, 2000);

        // Mark that the page has been loaded once by setting a flag in localStorage
        localStorage.setItem('isFirstLoad', 'true');
    }
    else{
        document.getElementById('loader').style.display = 'none'; 
        document.body.classList.remove('loading'); 
    }
});


const about_me = document.querySelectorAll('.me');
about_me.forEach((el)=>{
document.addEventListener('scroll', () => {
    if (isMobileDevice()) {
        if (about_me && window.scrollY > 100) {
            el.classList.add("animate__animated", "animate__fadeInDown", "text-center");
            el.style.visibility="visible";
        }
        else{
            el.classList.remove("animate__animated", "animate__fadeInDown", "text-center");
            el.style.visibility="hidden";
        }
      }
      else{
    if (about_me && window.scrollY > 250) {
        el.classList.add("mt-2", "animate__animated", "animate__fadeInDown", "text-center");
        el.style.visibility="visible";
    }
    else{
        el.classList.remove("mt-2", "animate__animated", "animate__fadeInDown", "text-center");
        el.style.visibility="hidden";
    }
}
});
});
const left = document.querySelector('.left');
document.addEventListener('scroll', () => {
    if (isMobileDevice()) {
        if (left && window.scrollY > 300) {
            left.classList.add("animate__animated", "animate__fadeInUp", "text-center");
            left.style.visibility="visible";
        }
        else{
            left.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
            left.style.visibility="hidden";
        }
      }
      else{
            if (left && window.scrollY > 400) {
                left.classList.add("animate__animated", "animate__fadeInUp", "text-center");
                left.style.visibility="visible";
    }
            else{
                left.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
                left.style.visibility="hidden";
    }
}
});
const right = document.querySelector('.right');
document.addEventListener('scroll', () => {
    if (isMobileDevice()) {
        if (right && window.scrollY > 750) {
            right.classList.add("animate__animated", "animate__fadeInUp", "text-center");
            right.style.visibility="visible";
        }
        else{
            right.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
            right.style.visibility="hidden";
        }
      }
      else{
            if (right && window.scrollY > 400) {
                right.classList.add("animate__animated", "animate__fadeInUp", "text-center");
                right.style.visibility="visible";
    }
            else{
                right.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
                right.style.visibility="hidden";
    }
}
});
const mid = document.querySelector('.mid');
document.addEventListener('scroll', () => {
    if (isMobileDevice()) {
        if (mid && window.scrollY > 500) {
            mid.classList.add("animate__animated", "animate__fadeInUp", "text-center");
            mid.style.visibility="visible";
        }
        else{
            mid.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
            mid.style.visibility="hidden";
        }
      }else{
    if (mid && window.scrollY > 400) {
        mid.classList.add("animate__animated", "animate__fadeInUp", "text-center");
        mid.style.visibility="visible";
    }
    else{
        mid.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
        mid.style.visibility="hidden";
    }
}
});
const footer = document.querySelector('.footer');
document.addEventListener('scroll', () => {
    if (isMobileDevice()) {
        if (footer && window.scrollY >1750) {
            footer.classList.add("animate__animated", "animate__fadeInUp", "text-center");
            footer.style.visibility="visible";
        }
        else{
            footer.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
            footer.style.visibility="hidden";
        }
      }else{
    if (footer && window.scrollY > 1250) {
        footer.classList.add("animate__animated", "animate__fadeInUp", "text-center");
        footer.style.visibility="visible";
    }
    else{
        footer.classList.remove("animate__animated", "animate__fadeInUp", "text-center");
        footer.style.visibility="hidden";
    }
}
});


