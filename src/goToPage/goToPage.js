import InboxSrc from '../assets/inbox.svg';
import TodaySrc from '../assets/bicycle.svg';
import ProjectSrc from '../assets/illustrations/undraw-project-src.svg';
import { checkCurrentProject, Projects, userProjects } from '../application logic/applicationLogic';
// import { checkCurrentPage } from '../application logic/applicationLogic';
// import { setImageSrc } from '../application logic/applicationLogic';

export default function goToPage() {
  const content = document.querySelector('.content');
  const header = document.querySelector('.header');
  const menuBar = document.querySelector('.menu-bar');
  let currentProject = checkCurrentProject();
  
  const sectionName = document.createElement('h3');
  sectionName.textContent = currentProject.name;
  header.appendChild(sectionName);

  const kebabMenu = document.createElement('div');
  kebabMenu.classList.add('test');
  header.appendChild(kebabMenu);
  
  const sectionContent = document.createElement('div');
  sectionContent.classList.add('section-content');
  content.insertBefore(sectionContent, menuBar);

  const sectionImg = document.createElement('img');
  sectionImg.classList.add('section-image');

  let currentSectionName = currentProject.name;

  setImageSrc();
  sectionContent.appendChild(sectionImg);

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionContent.appendChild(sectionContentInfo);
  const status = document.createElement('p');
  status.setAttribute('style', 'white-space: pre;');
  sectionContentInfo.appendChild(status);

  const para = document.createElement('p');
  sectionContentInfo.appendChild(para);

  checkIfProjectIsEmpty();

  function checkIfProjectIsEmpty() {
    if (currentProject.length === 0) {
      setSectionTextContent();
    } else {
      return
    }
  }

  function setSectionTextContent() {
    if (userProjects.length === 0) {
      status.textContent = currentProject.statusText;
      para.textContent = currentProject.paraText;
    } else {
      status.textContent = userProjects.statusText;
      para.textContent = userProjects.paraText;
    }
  }

  



  // function setSectionTextContent() {
  //   for (let i = 0 ; i < userProjects.length; i++) {
  //     if (userProjects[i] === currentProject) {
  //       status.textContent = userProjects.statusText;
  //       para.textContent = userProjects.paraText;
  //     } else {
  //       status.textContent = currentProject.statusText;
  //       para.textContent = currentProject.paraText;
  //     }
  //   }
  //   console.log(userProjects.length)
  // }

  // function setSectionTextContent() {
  //   for(let i = 0; i < 2; i++) {
  //     if (userProjects[i] === currentProject) {
  //       status.textContent = currentProject.statusText;
  //       para.textContent = currentProject.paraText;
  //     }
  //   }

  //   for (let i = 0 ; i < userProjects.length; i++) {
  //     if (userProjects[i] === currentProject) {
  //       status.textContent = userProjects.statusText;
  //       para.textContent = userProjects.paraText;
  //     }
  //   }
  // }


  function setImageSrc() {
    if (currentSectionName === 'Inbox') {
      sectionImg.src = InboxSrc;
    } else if (currentSectionName === 'Today') {
      sectionImg.src = TodaySrc;
    } else {
      sectionImg.src = ProjectSrc;
    }
  }
}