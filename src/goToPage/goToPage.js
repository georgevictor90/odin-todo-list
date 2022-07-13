import InboxSrc from '../assets/inbox.svg';
import TodaySrc from '../assets/bicycle.svg';
import ProjectSrc from '../assets/illustrations/undraw-project-src.svg';
import TaskCircle from '../assets/icons/circle.svg';
import TaskCircleChecked from '../assets/icons/check-circle.svg';
import { getCurrentProject, userProjects } from "../currentProjectFunctions";

export function goToPage(project) {
  updateSectionTitle();
  clearSectionContent();

  const sectionContent = document.querySelector('.section-content');
  const sectionImgAndInfo = document.createElement('div');
  sectionImgAndInfo.classList.add('section-img-and-info');
  sectionContent.appendChild(sectionImgAndInfo);

  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('tasks-container');
  sectionContent.appendChild(tasksContainer);

  if (project.length === 0) {
    tasksContainer.classList.toggle('hidden-element');
    appendImgAndTextToDOM();
  } else {
    showTasks();
  }
}

function updateSectionTitle() {
  let currentProject = getCurrentProject();
  const sectionName = document.querySelector('.section-name');
  sectionName.textContent = currentProject.name;
}

function clearSectionContent() {
  const sectionContent = document.querySelector('.section-content');
  sectionContent.innerHTML = "";
}

function appendImgAndTextToDOM() {
  let currentProject = getCurrentProject();

  const sectionImgAndInfo = document.querySelector('.section-img-and-info');
  
  const sectionImg = document.createElement('img');
  sectionImg.classList.add('section-image');
  sectionImgAndInfo.appendChild(sectionImg);
  setImgSrc();

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionImgAndInfo.appendChild(sectionContentInfo);
  
  const status = document.createElement('p');
  status.classList.add('status-text');
  status.setAttribute('style', 'white-space: pre;');
  sectionContentInfo.appendChild(status);
  
  const para = document.createElement('p');
  para.classList.add('para-text');
  sectionContentInfo.appendChild(para);

  status.textContent = currentProject.statusText;
  para.textContent = currentProject.paraText;

  const userProjectStatusText = "What are you planning to get done?";
  const userProjectParaText = "Tap + to add a task to this project";
  currentProject = getCurrentProject();
  for (let i = 0; i < userProjects.length; i++) {
    if (userProjects[i] === currentProject) {
      status.textContent = userProjectStatusText;
      para.textContent = userProjectParaText;
    }
  }
}

function setImgSrc() {
  const sectionImg = document.querySelector('.section-image');
  let currentProject = getCurrentProject();
  if (currentProject.name === 'Inbox') {
    sectionImg.src = InboxSrc;
  } else if (currentProject.name === 'Today') {
    sectionImg.src = TodaySrc;
  } else {
    sectionImg.src = ProjectSrc;
  }
}

function lineThrough(element) {
  element.style.textDecoration = 'line-through';
}
 
export function showTasks() {
  console.log('started show tasks');
  let currentProject = getCurrentProject();
  const tasksContainer = document.querySelector('.tasks-container');
  const sectionImgAndInfo = document.querySelector('.section-img-and-info');

  tasksContainer.innerHTML = '';

  for (let i = 0; i < currentProject.length; i++) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    tasksContainer.appendChild(taskCard);

    const taskAlwaysVisible = document.createElement('div');
    taskAlwaysVisible.classList.add('task-always-visible');
    taskCard.appendChild(taskAlwaysVisible);

    const taskCheckBoxCircle = document.createElement('img');
    taskCheckBoxCircle.classList.add('task-circle');
    taskCheckBoxCircle.src = TaskCircle;
    taskAlwaysVisible.appendChild(taskCheckBoxCircle);
    
    const taskCardTitle = document.createElement('div');
    taskCardTitle.classList.add('task-card-title');
    taskCardTitle.textContent = currentProject[i].title;
    taskAlwaysVisible.appendChild(taskCardTitle);

    taskCheckBoxCircle.addEventListener('click', (e) => {
      taskCheckBoxCircle.src = TaskCircleChecked;
      setTimeout( () => {
        lineThrough(taskCardTitle);
      } ,250);
      setTimeout( () => {
        e.path[3].removeChild(e.path[2]);
      } ,500);
      currentProject.removeTodos(currentProject[i]);
    });

    const taskExpandable = document.createElement('div');
    taskExpandable.classList.add('task-expandable');
    taskCard.appendChild(taskExpandable);

    const taskCardDescription = document.createElement('p');
    taskCardDescription.classList.add('task-card-description');
    taskCardDescription.textContent = currentProject[i].description;
    taskExpandable.appendChild(taskCardDescription);

    const taskCardDueDate = document.createElement('span');
    taskCardDueDate.classList.add('task-card-description');
    taskCardDueDate.textContent = currentProject[i].dueDate;
    taskExpandable.appendChild(taskCardDueDate);

    taskExpandable.classList.add('hidden-element');
    taskCard.addEventListener('click', () => {
      taskExpandable.classList.toggle('hidden-element');
    })
  }

  console.log(currentProject, currentProject.length)
  if (currentProject.length > 0 ) {
    sectionImgAndInfo.innerHTML = "";
    sectionImgAndInfo.classList.add('hidden-element');
    tasksContainer.classList.remove('hidden-element');
  } else {
    sectionImgAndInfo.classList.remove('hidden-element');
    tasksContainer.classList.add('hidden-element');
  }
}