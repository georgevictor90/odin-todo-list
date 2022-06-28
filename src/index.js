import './style.css';
import showToday from './today/todayPage';
import HamburgerMenu from './assets/icons/Hamburger_icon.svg';
import MagnifyingGlass from './assets/icons/magnifying-glass.svg';
import Bell from './assets/icons/bell.svg';
import showInbox from './inbox/inbox';
import showMenu from './popUpMenu/menu';
import showTaskEditor from './task editor/taskEditor';
import showNewProjectForm from './newProjectForm/newProjectForm';
import showColorChoices from './projectColors/projectColors';
import { emptyElement, newProject ,Projects, updateProjectsSectionList, userProjects } from './application logic/applicationLogic';
import goToPage from './goToPage/goToPage';
import { setCurrentProject } from './application logic/applicationLogic';
import { setDefaultCurrentProjectsToFalse } from './application logic/applicationLogic';
import { listenForProjectClick } from './application logic/applicationLogic';
import { removeFromDOM } from './application logic/applicationLogic';
import { setProjectFilter } from './application logic/applicationLogic';
import { newTodo } from './application logic/applicationLogic';
import { updateFolders } from './application logic/applicationLogic';
import { updateFolderButtonOptions } from './application logic/applicationLogic';


const content = document.querySelector('.content');
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

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

export let folders = [Projects[0].name, Projects[1].name];


goToPage();
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
const projectsSectionList = document.querySelector('.projects-section-list');

newProjectSave.addEventListener('click', () => {
  const userProject = newProject(newProjectNameInput.value, selectedProjectColor.textContent);
  setProjectFilter(userProject);
  Projects[2].addElem(userProject);
  setCurrentProject(userProjects, newProjectNameInput.value);
  setDefaultCurrentProjectsToFalse();
  clearNewProjectForm();
  emptyElement(projectsSectionList);
  updateProjectsSectionList();
  listenForProjectClick();
  removeFromDOM();
  goToPage();
  updateFolders();
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
sectionLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('close');
    removeFromDOM();
    setCurrentProject(Projects, link.textContent);
    if (Projects[2].length > 0) {
      setCurrentProject(Projects[2], link.textContent)
    };
    goToPage();
  })
})

addTaskBtn.addEventListener('click', () => {
  modal.showModal();
  updateFolderButtonOptions();
})

window.addEventListener('click', (e) => {
 if (e.target.tagName !== 'DIALOG') return
 modal.close();
})

const colorFormGroup = document.querySelector('.color-form-group');
const colorChoicesContainer = document.querySelector('.color-choices-container');
colorFormGroup.addEventListener('click', () => {
  colorChoicesContainer.classList.toggle('close-color-choices');
})

const newTaskSubmit = document.querySelector('.submit-button');
const newTaskTitle = document.querySelector('.task-title-input');
const newTaskDescription = document.querySelector('.task-description-input');
const newTaskDate = document.querySelector('.due-date-button');
const newTaskFolder = document.querySelector('.folder-select-button');

newTaskSubmit.addEventListener('click', () => {
  if (newTaskTitle.value.length === 0) return

  // console.log(newTaskTitle.value, newTaskDescription.value, newTaskDate.value, newTaskFolder.value);

  const task = newTodo(newTaskTitle.value, newTaskDescription.value, newTaskDate.value);

  for (let i = 0; i < userProjects.length; i++) {
    if (userProjects[i].name === newTaskFolder.value) {
      // console.log(userProjects[i]);
      userProjects[i].addTodos(task);
    }
  }
  // console.log(task);
  
})
