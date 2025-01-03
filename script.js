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
