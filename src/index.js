import './style.css';
import showToday from './today/todayPage';
import HamburgerMenu from './assets/icons/Hamburger_icon.svg';
import MagnifyingGlass from './assets/icons/magnifying-glass.svg';
import Bell from './assets/icons/bell.svg';


const content = document.querySelector('.content');
const todayHeader = document.createElement('div');
todayHeader.classList.add('header');
content.appendChild(todayHeader);

const menuBar = document.createElement('div');
menuBar.classList.add('menu-bar');
content.appendChild(menuBar);

const HamburgerMenuBtn = document.createElement('img')
HamburgerMenuBtn.src = HamburgerMenu;
HamburgerMenuBtn.classList.add('hamburger-menu-img');
menuBar.appendChild(HamburgerMenuBtn);

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

showToday();
