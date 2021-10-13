//img active
let imgBx = document.querySelectorAll('.imgBx');
imgBx.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}))
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    
}