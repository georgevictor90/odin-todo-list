import './style.css';
import showToday from './today/todayPage';
import HamburgerMenu from './assets/icons/Hamburger_icon.svg';
import MagnifyingGlass from './assets/icons/magnifying-glass.svg';
import Bell from './assets/icons/bell.svg';
import showIndex from './inbox/inbox';
import showMenu from './popUpMenu/menu';
import showTaskEditor from './task editor/taskEditor';
import showNewProjectForm from './newProjectForm/newProjectForm';
import showColorChoices from './projectColors/projectColors';
import { Projects } from './application logic/applicationLogic';


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

export const arrayOfProjectTitles = ['Welcome', 'Try Boards', 'Organize your life'];
export const folders = ['Inbox', 'Today', ...arrayOfProjectTitles];
// showToday();
showIndex();
showMenu();
showTaskEditor();
showNewProjectForm();
showColorChoices();

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

const menu = document.querySelector('.popup-menu');
hamburgerMenuButton.addEventListener('click', () => {
  menu.classList.toggle('close');
});

const closeBtn = document.querySelector('.close-button');
closeBtn.addEventListener('click', () => {
  menu.classList.toggle('close');
});

const newProjectBtn = document.querySelector('.new-project-button');
const newProjectForm = document.querySelector('.new-project-form');
const backBtn = document.querySelector('.new-project-form-back');
const newProjectSave = document.querySelector('.new-project-form-save');
newProjectSave.addEventListener('click', () => {
  Projects.addElem({name: newProjectNameInput.value, color: selectedProjectColor.textContent})
  console.log(Projects);
  clearNewProjectForm();
})

newProjectBtn.addEventListener('click', () => {
  menu.classList.toggle('close');
  newProjectForm.classList.toggle('close-project-form');
})

const newProjectNameInput = document.querySelector('.new-project-name-input');
const mainColorIcon = document.querySelector('.main-color-icon');
const selectedProjectColor = document.querySelector('.selected-project-color');
backBtn.addEventListener('click', () => {
  clearNewProjectForm();
})

function clearNewProjectForm() {
  newProjectForm.classList.toggle('close-project-form');
  newProjectNameInput.value = '';
  mainColorIcon.style.filter = 'unset';
  mainColorIcon.classList.add('default-color');
  selectedProjectColor.textContent = 'Charcoal';
}

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

addTaskBtn.addEventListener('click', () => {
  modal.showModal();
})

// closeModal.addEventListener('click', () => {
//   modal.close();
// })

window.addEventListener('click', (e) => {
 if (e.target.tagName !== 'DIALOG') return
 modal.close();
})


// const submitBtn = document.querySelector('.submit-button');
// submitBtn.addEventListener('click', () => {
  
// })

const colorFormGroup = document.querySelector('.color-form-group');
const colorChoicesContainer = document.querySelector('.color-choices-container');
colorFormGroup.addEventListener('click', () => {
  colorChoicesContainer.classList.toggle('close-color-choices');
})
