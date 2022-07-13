function showProjectSection(currentProject) {
  updateSectionTitle();
  clearSectionContent();
  if (currentProject.length === 0) {
    appendImgAndTextToDOM();
  } else {
    showTasks();
  }
}

function updateSectionTitle() {
  const sectionName = document.querySelector('.section-name');
  sectionContent = currentProject.name;
}

function clearSectionContent() {
  const sectionContent = document.querySelector('.section-content');
  sectionContent.innerHTML = "";
}

function appendImgAndTextToDOM() {
  const sectionImg = document.createElement('img');
  sectionImg.classList.add('section-image');
  setImgSrc();
  sectionContent.appendChild(sectionImg);

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionContent.appendChild(sectionContentInfo);
  
  const status = document.createElement('p');
  status.classList.add('status-text');
  status.setAttribute('style', 'white-space: pre;');
  sectionContentInfo.appendChild(status);
  
  const para = document.createElement('p');
  para.classList.add('para-text');
  sectionContentInfo.appendChild(para);

  status.textContent = currentProject.statusText;
  para.textContent = currentProject.paraText;
}

function showTasks() {
  const sectionContent = document.querySelector('.section-content');
    for (let i = 0; i < currentProject.length; i++) {
      const tasksContainer = document.createElement('div');
      tasksContainer.classList.add('tasks-container');
      sectionContent.appendChild(tasksContainer);

      const taskCard = document.createElement('div');
      taskCard.classList.add('task-card');
      tasksContainer.appendChild(taskCard);

      const taskCheckBoxCircle = document.createElement('img');
      taskCheckBoxCircle.classList.add('task-circle');
      taskCheckBoxCircle.src = TaskCircle;
      taskCard.appendChild(taskCheckBoxCircle);

      const taskCardTitle = document.createElement('div');
      taskCardTitle.classList.add('task-card-title');
      taskCardTitle.textContent = currentProject[i].title;
      taskCard.appendChild(taskCardTitle);
    }
}


if (Projects[2].length > 0) {
  setCurrentProject(Projects[2], link.textContent)
} else {
  setCurrentProject(Projects, link.textContent);
}

function setCurrentProject(container, projectname) {
  if (container === Projects) {

    for (let i = 0; i < container.length -1; i++) {
      if (container[i].name === projectname) {
        container[i].isCurrentProject = true;
      } else {
        container[i].isCurrentProject = false;
      }
    }
    
  } else {

    for (let i = 0; i < container.length; i++) {
      if (container[i].name === projectname) {
        container[i].isCurrentProject = true;
      } else {
        container[i].isCurrentProject = false;
      }
    }

  }
}


// link on click {
//   setCurrentProject()
//   setOtherAsFalse()
//   showProjectSection()
// }