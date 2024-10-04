const navLinks = document.querySelector('.nav-links')

var menuButton = document.getElementById("menu");
menuButton.addEventListener("click", onToggleMenu);
function onToggleMenu()
{
    menuButton.setAttribute("name", 'menu' == menuButton.getAttribute("name") ? 'x' : 'menu')
    navLinks.classList.toggle('top-[5%]')
}