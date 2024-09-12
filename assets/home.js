const navLinks = document.querySelector('.nav-links')

var menuButton = document.getElementById("menu");
menuButton.addEventListener("click", onToggleMenu);
function onToggleMenu()
{
    menuButton.name = menuButton.name === 'menu' ? 'x' : 'menu'
    navLinks.classList.toggle('top-[5%]')
}