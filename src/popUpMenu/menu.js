import Tray from './tray.svg';
import Calendar from './calendar.svg';
import Close from './x.svg'

export default function showMenu() {
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

 const projectsSectionTitle = document.createElement('span');
 projectsSectionTitle.textContent = 'Projects';
 projectsSectionTitle.classList.add('projects-section-title');
 projectsSection.appendChild(projectsSectionTitle);

 const projectsSectionList = document.createElement('ul');
 projectsSectionList.classList.add('projects-section-list');
 projectsSection.appendChild(projectsSectionList);

 const arrayOfProjectTitles = ['Welcome', 'Try Boards', 'Organize your life'];
 arrayOfProjectTitles.forEach(title => {
   const projectItem = document.createElement('li');
   projectItem.classList.add('project-item');
   projectsSectionList.appendChild(projectItem);
   const projectSpan = document.createElement('span');
   projectSpan.textContent = title;
   projectSpan.classList.add('project-span');
   projectItem.appendChild(projectSpan);
 });

 const projectItems = document.querySelectorAll('.projects-section-list li');
 projectItems.forEach(projectItem => {
   const circle = document.createElement('span');
   circle.classList.add('circle');
   projectItem.insertBefore(circle, projectItem.firstChild);
   circle.style.backgroundColor = `${getColor()}`;
 })
 
 function getColor() {
  return "hsla(" + ~~(360 * Math.random()) + "," +
  "70%,"+
  "80%,1)"
 }

}
  

