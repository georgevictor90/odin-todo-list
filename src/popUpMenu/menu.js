import Tray from './tray.svg';
import Calendar from './calendar.svg';
import Close from './x.svg'
import PlusCircle from './plus-circle-solid.svg';
import ManageProjectsIcon from './cog-solid.svg';
import { userProjects, setCurrentProject,defaultSections, getCurrentProject } from '../currentProjectFunctions';
import { goToPage } from '../goToPage/goToPage';
import Circle from '../assets/icons/mycircle.svg';
import { updateProjectsSectionList } from '../newProjectForm/newProjectForm';

// export default function showMenu() {
//  const content = document.querySelector('.content');
//  const menu = document.createElement('nav');
//  menu.classList.add('popup-menu');
//  menu.classList.add('close');
//  menu.role = 'navigation';
//  content.appendChild(menu);

//  const closeBtn = document.createElement('img');
//  closeBtn.src = Close;
//  closeBtn.classList.add('close-button');
//  menu.appendChild(closeBtn);

//  const menuSections = document.createElement('div');
//  menuSections.classList.add('menu-sections');
//  menu.appendChild(menuSections);

//  const menuSectionsList = document.createElement('ul');
//  menuSectionsList.classList.add('menu-sections-list');
//  const inboxItem = document.createElement('li');
 
//  const todayItem = document.createElement('li');
 
//  menuSections.appendChild(menuSectionsList);
//  menuSectionsList.appendChild(inboxItem);
//  menuSectionsList.appendChild(todayItem);

//  const inboxIcon = document.createElement('img');
//  inboxIcon.src = Tray;
//  inboxItem.appendChild(inboxIcon);
//  inboxIcon.classList.add('section-icon');

//  const todayIcon = document.createElement('img');
//  todayIcon.src = Calendar;
//  todayItem.appendChild(todayIcon);
//  todayIcon.classList.add('section-icon');

//  const inboxSpan = document.createElement('span');
//  const todaySpan = document.createElement('span');
//  inboxSpan.textContent = 'Inbox';
//  todaySpan.textContent = 'Today';
//  inboxItem.appendChild(inboxSpan);
//  todayItem.appendChild(todaySpan);

//  const projectsSection = document.createElement('div');
//  projectsSection.classList.add('projects-section');
//  menu.appendChild(projectsSection);

//  const projectsSectionHeader = document.createElement('div');
//  projectsSectionHeader.classList.add('project-section-header');
//  projectsSection.appendChild(projectsSectionHeader);

//  const projectsSectionTitle = document.createElement('span');
//  projectsSectionTitle.textContent = 'Projects';
//  projectsSectionTitle.classList.add('projects-section-title');
//  projectsSectionHeader.appendChild(projectsSectionTitle);

//  const newProjectBtn = document.createElement('img');
//  newProjectBtn.src = PlusCircle;
//  newProjectBtn.classList.add('new-project-button');
//  projectsSectionHeader.appendChild(newProjectBtn);

//  const projectsSectionList = document.createElement('ul');
//  projectsSectionList.classList.add('projects-section-list');
//  projectsSection.appendChild(projectsSectionList);

//  updateProjectsSectionList();
// }
  
////////////////////////////////////////////////////////////////

export function showMenu() {
  const content = document.querySelector('.content');
  const menu = document.createElement('nav');
  menu.classList.add('popup-menu');
  menu.classList.add('close');
  menu.role = 'navigation';
  content.appendChild(menu);
 
  const closeBtn = document.createElement('img');
  closeBtn.src = Close;
  closeBtn.classList.add('close-button');
  menu.appendChild(closeBtn);
 
  const menuSections = document.createElement('div');
  menuSections.classList.add('menu-sections');
  menu.appendChild(menuSections);
 
  const menuSectionsList = document.createElement('ul');
  menuSectionsList.classList.add('menu-sections-list');
  const inboxItem = document.createElement('li');
  
  const todayItem = document.createElement('li');
  
  menuSections.appendChild(menuSectionsList);
  menuSectionsList.appendChild(inboxItem);
  menuSectionsList.appendChild(todayItem);
 
  const inboxIcon = document.createElement('img');
  inboxIcon.src = Tray;
  inboxItem.appendChild(inboxIcon);
  inboxIcon.classList.add('section-icon');
 
  const todayIcon = document.createElement('img');
  todayIcon.src = Calendar;
  todayItem.appendChild(todayIcon);
  todayIcon.classList.add('section-icon');
 
  const inboxSpan = document.createElement('span');
  const todaySpan = document.createElement('span');
  inboxSpan.textContent = 'Inbox';
  todaySpan.textContent = 'Today';
  inboxItem.appendChild(inboxSpan);
  todayItem.appendChild(todaySpan);
 
  const projectsSection = document.createElement('div');
  projectsSection.classList.add('projects-section');
  menu.appendChild(projectsSection);
 
  const projectsSectionHeader = document.createElement('div');
  projectsSectionHeader.classList.add('project-section-header');
  projectsSection.appendChild(projectsSectionHeader);
 
  const projectsSectionTitle = document.createElement('span');
  projectsSectionTitle.textContent = 'Projects';
  projectsSectionTitle.classList.add('projects-section-title');
  projectsSectionHeader.appendChild(projectsSectionTitle);
 
  const newProjectBtn = document.createElement('img');
  newProjectBtn.src = PlusCircle;
  newProjectBtn.classList.add('new-project-button');
  projectsSectionHeader.appendChild(newProjectBtn);
 
  const projectsSectionList = document.createElement('ul');
  projectsSectionList.classList.add('projects-section-list');
  projectsSection.appendChild(projectsSectionList);

  const manageProjectsBtn = document.createElement('div');
  manageProjectsBtn.classList.add('manage-projects-button');
  const manageProjectsIcon = document.createElement('img');
  manageProjectsIcon.src = ManageProjectsIcon;
  manageProjectsIcon.classList.add('manage-projects-icon');
  const manageProjectsBtnText = document.createElement('span');
  manageProjectsBtnText.textContent = 'Manage projects';
  manageProjectsBtn.appendChild(manageProjectsIcon);
  manageProjectsBtn.appendChild(manageProjectsBtnText);
  projectsSection.appendChild(manageProjectsBtn);
 
  updateProjectsSectionList();

  const hamburgerMenuButton = document.querySelector('.hamburger-menu-img');
  hamburgerMenuButton.addEventListener('click', () => {
    menu.classList.toggle('close');
    updateProjectsSectionList();
  });
  
  closeBtn.addEventListener('click', () => {
    menu.classList.toggle('close');
    if (userProjects.length === 0) {
      console.log(defaultSections[1].name);
      setCurrentProject(defaultSections, defaultSections[1].name);
      let currentProject = getCurrentProject();
      goToPage(currentProject);
    }
  });

  const defaultSectionsLinks = document.querySelectorAll('.menu-sections li');
  defaultSectionsLinks.forEach( sectionLink => {
    sectionLink.addEventListener('click', () => {
      menu.classList.toggle('close');
      setCurrentProject(defaultSections, sectionLink.textContent);
      let currentProject = getCurrentProject();
      goToPage(currentProject);
    })
  })
 }

//  function updateProjectsSectionList() {
//   const projectsSectionList = document.querySelector('.projects-section-list');
//   projectsSectionList.innerHTML = '';
//   for (let i = 0; i < userProjects.length; i++) {
//     const projectItem = document.createElement('li');
//     projectItem.classList.add('project-item');
//     projectsSectionList.appendChild(projectItem);

//     const circle = document.createElement('img');
//     circle.src = Circle;
//     circle.classList.add('circle');
//     projectItem.insertBefore(circle, projectItem.firstChild);
//     circle.style.filter = userProjects[i].filter;

//     const projectItemName = document.createElement('span');
//     projectItemName.textContent = userProjects[i].name;
//     projectItem.appendChild(projectItemName);
//   }
// }

