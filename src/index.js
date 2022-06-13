import './style.css';
import showToday from './today/todayPage';
import HamburgerMenu from './assets/icons/Hamburger_icon.svg';
import MagnifyingGlass from './assets/icons/magnifying-glass.svg';
import Bell from './assets/icons/bell.svg';
import showIndex from './inbox/inbox';
import showMenu from './popUpMenu/menu';

const content = document.querySelector('.content');
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);
const sectionName = document.querySelector('h3');
const kebabMenu = document.querySelector('.test');
const sectionContent = document.querySelector('.section-content');

const menuBar = document.createElement('div');
menuBar.classList.add('menu-bar');
content.appendChild(menuBar);

const hamburgerMenuButton = document.createElement('img')
hamburgerMenuButton.src = HamburgerMenu;
hamburgerMenuButton.classList.add('hamburger-menu-img');
menuBar.appendChild(hamburgerMenuButton);

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-button');
addTaskBtn.type = 'button';
addTaskBtn.textContent = '+';
menuBar.appendChild(addTaskBtn);

const searchBtn = document.createElement('img');
searchBtn.classList.add('search-button');
searchBtn.src = MagnifyingGlass;
menuBar.appendChild(searchBtn);

const notificationsBtn = document.createElement('img');
notificationsBtn.classList.add('notifications-button');
notificationsBtn.src = Bell;
menuBar.appendChild(notificationsBtn);

// showToday();
showIndex();
showMenu();

const menu = document.querySelector('.popup-menu');
hamburgerMenuButton.addEventListener('click', () => {
  menu.classList.toggle('close');
});

const closeBtn = document.querySelector('.close-button');
closeBtn.addEventListener('click', () => {
  menu.classList.toggle('close');
});

const sectionLinks = document.querySelectorAll('.menu-sections-list>li');
sectionLinks[0].addEventListener('click', () => {
  menu.classList.toggle('close');
  removeFromDOM();
  showIndex();
});

sectionLinks[1].addEventListener('click', () => {
  menu.classList.toggle('close');
  removeFromDOM();
  showToday();  
});

function removeFromDOM() {
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  content.childNodes[1].parentNode.removeChild(content.childNodes[1]);
}