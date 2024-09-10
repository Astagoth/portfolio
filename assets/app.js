import './bootstrap.js';
import 'boxicons';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'x' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}

// console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
