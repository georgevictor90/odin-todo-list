import './style.css';
import HamburgerMenu from './assets/icons/Hamburger_icon.svg';
import { goToPage } from './goToPage/goToPage';
import { defaultSections, userProjects, getCurrentProject, setCurrentProject } from './currentProjectFunctions';
import { newProject } from './factoryFunctions';
import { showMenu } from './popUpMenu/menu';
import { showNewProjectForm, clearNewProjectForm} from './newProjectForm/newProjectForm';
import {showTaskEditor, updateFolderButtonOptions} from './task editor/taskEditor';
import { showManageProjects } from './manageProjects/manageProjects';
import { showEditProjectForm } from './editProjectForm/editProjectForm';
import GithubIcon from './assets/icons/github.svg';
import Fullscreen from './assets/icons/expand-arrows-alt-solid.svg';

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

const copyrightDiv = document.createElement('div');
copyrightDiv.classList.add('copyright-div');
menuBar.appendChild(copyrightDiv);

const githubLink = document.createElement('a');
githubLink.classList.add('github-link');
githubLink.href = 'https://github.com/georgevictor90';
githubLink.target = '_blank';
copyrightDiv.appendChild(githubLink);

const githubIcon = document.createElement('img');
githubIcon.src = GithubIcon;
githubIcon.classList.add('github-icon');
githubLink.appendChild(githubIcon);

const copyright = document.createElement('span');
copyright.textContent = `\u00A9 George Victor Lacatus`;
copyright.classList.add('copyright');
menuBar.appendChild(copyright);

const sectionName = document.createElement('h3');
sectionName.classList.add('section-name');
header.appendChild(sectionName);

const fullscreenIcon = document.createElement('img');
fullscreenIcon.classList.add('fullscreen-icon');
fullscreenIcon.src = Fullscreen;
header.appendChild(fullscreenIcon);

const sectionContent = document.createElement('div');
sectionContent.classList.add('section-content');
content.insertBefore(sectionContent, menuBar);

const projectsSectionList = document.querySelector('.projects-section-list');
const newProjectNameInput = document.querySelector('.new-project-name-input');
const mainColorIcon = document.querySelector('.main-color-icon');
const selectedProjectColor = document.querySelector('.selected-project-color');
const sectionLinks = document.querySelectorAll('.popup-menu li');
const colorFormGroup = document.querySelector('.color-form-group');
const colorChoicesContainer = document.querySelector('.color-choices-container');
const newTaskSubmit = document.querySelector('.submit-button');
const newTaskTitle = document.querySelector('.task-title-input');
const newTaskDescription = document.querySelector('.task-description-input');
const newTaskDate = document.querySelector('.due-date-button');
const newTaskFolder = document.querySelector('.folder-select-button');

const Inbox = newProject('Inbox','green', false);
Inbox.statusText = "All clear";
Inbox.paraText = "Looks like everything's organized in the right place. \n Tap + to add a task";

const Today = newProject('Today','blue', true);
Today.statusText = "You're all done for today! \n Congratulations!";
Today.paraText = "Enjoy the rest of the day!";

defaultSections.push(Inbox, Today);
setCurrentProject(defaultSections, Today.name);
let currentProject = getCurrentProject();

goToPage(currentProject);
showMenu();
showNewProjectForm();
showTaskEditor();
showManageProjects();
showEditProjectForm();

//event listeners
const modal = document.querySelector('.modal');

addTaskBtn.addEventListener('click', () => {
  modal.showModal();
  updateFolderButtonOptions();
})

const newProjectBtn = document.querySelector('.new-project-button');
const menu = document.querySelector('.popup-menu');
const newProjectForm = document.querySelector('.new-project-form');

newProjectBtn.addEventListener('click', () => {
  menu.classList.toggle('close');
  newProjectForm.classList.toggle('close-project-form');
})

const backBtn = document.querySelector('.new-project-form-back');
backBtn.addEventListener('click', () => {
  clearNewProjectForm();
})

const editProjectForm = document.querySelector('.edit-project-form');

const editBackBtn = document.querySelector('.edit-project-form-back');
editBackBtn.addEventListener('click', () => {
  editProjectForm.classList.toggle('close-edit-project-form');
})

///////////////////////////////////////////
function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

  if (requestMethod) { // Native full screen.
      requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
          wscript.SendKeys("{F11}");
      }
  }
}

var elem = document.body; // Make the body go full screen.