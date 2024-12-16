function showSidebar(){
const sidebar=document.querySelector('.sidebar')
sidebar.style.display='flex'
sidebar.style.width='130px'
}
function closeBar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
    sidebar.style.width='0px'
}
const h1Element = document.getElementById('scroll-hide');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            h1Element.style.display = 'none';
        } else {
            h1Element.style.display = 'block';
        }
    });