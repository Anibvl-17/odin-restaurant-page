import './styles.css';
import HomeDiv from './components/home/home.js';
import MenuDiv from './components/menu/menu.js';
import AboutDiv from './components/about/about.js';

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    navButtons.forEach((button) => button.classList.remove('active'));
    btn.classList.add('active');
    switch (btn.id) {
      case 'home-btn':
        updateContent(HomeDiv());
        break;
      case 'menu-btn':
        updateContent(MenuDiv());
        break;
      case 'about-btn':
        updateContent(AboutDiv());
        break;
      default:
        break;
    }
  });
});

function updateContent(component) {
  const contentDiv = document.getElementById('content');
  contentDiv.textContent = '';
  contentDiv.appendChild(component);
}

// Initial page content
updateContent(HomeDiv());