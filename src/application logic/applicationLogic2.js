import TaskCircle from '../assets/icons/circle.svg';

export const defaultSections = [];
export const userProjects = [];
// export let currentProject = getCurrentProject();

//CURRENT PROJECT FUNCTIONS

function getCurrentProject() {
  for (let i = 0; i < defaultSections.length; i++) {
    if (defaultSections[i].isCurrentProject === true) {
      return defaultSections[i];
    }
  }

  for (let i = 0; i < userProjects.length; i++) {
    if (userProjects[i].isCurrentProject === true) {
      return userProjects[i];
    }
  }
}

function setCurrentProject(container, projectname) {
  if (container === defaultSections) {
    for (let i = 0; i < container.length; i++) {
      if (container[i].name === projectname) {
        container[i].isCurrentProject = true;
      } else {
        container[i].isCurrentProject = false;
      }
    }
    for (let i = 0; i < userProjects.length; i++) {
      userProjects[i].isCurrentProject = false;
    }

  } else {
    for (let i = 0; i < defaultSections.length; i++) {
      defaultSections[i].isCurrentProject = false;
    }
    for (let i = 0; i < container.length; i++) {
      if (container[i].name === projectname) {
        container[i].isCurrentProject = true;
      } else {
        container[i].isCurrentProject = false;
      }
    }
  }
}


// GO TO PAGE

export function goToPage(currentProject) {
  const content = document.querySelector('.content');
  const header = document.querySelector('.header');
  const menuBar = document.querySelector('.menu-bar');

  updateSectionTitle();
  clearSectionContent();
  if (currentProject.length === 0) {
    appendImgAndTextToDOM();
  } else {
    showTasks();
  }
}

function updateSectionTitle() {
  currentProject = getCurrentProject();
  const sectionName = document.querySelector('.section-name');
  sectionName.textContent = currentProject.name;
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
  currentProject = getCurrentProject();

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

// TASK FORM

function createTaskForm() {
  const content = document.querySelector('.content');
  const modal = document.createElement('dialog');
  modal.classList.add('modal');
  content.appendChild(modal);
  
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('task-editor');
  modal.appendChild(newTaskForm);

  const closeModal = document.createElement('button');
  closeModal.classList.add('close-modal');
  closeModal.innerHTML = '&times';
  newTaskForm.appendChild(closeModal);

  const inputFields = document.createElement('div');
  inputFields.classList.add('input-fields');
  newTaskForm.appendChild(inputFields);

  const extraFields = document.createElement('div');
  extraFields.classList.add('extra-fields');
  newTaskForm.appendChild(extraFields);

  const taskTitleInput = document.createElement('input');
  taskTitleInput.classList.add('task-title-input');
  taskTitleInput.type = 'text';
  taskTitleInput.id = 'title';
  taskTitleInput.name = 'title';
  taskTitleInput.placeholder = 'e.g. Renew gym every May 1st';
  inputFields.appendChild(taskTitleInput);

  const taskDescriptionInput = document.createElement('textarea');
  taskDescriptionInput.classList.add('task-description-input');
  taskDescriptionInput.id = 'description';
  taskDescriptionInput.name = 'description';
  taskDescriptionInput.placeholder = 'Description';
  inputFields.appendChild(taskDescriptionInput);

  const pills = document.createElement('div');
  pills.classList.add('pills');
  const itemActions = document.createElement('div');
  itemActions.classList.add('item-actions');
  extraFields.appendChild(pills);
  extraFields.appendChild(itemActions);

  const dueDateButton = document.createElement('input');
  dueDateButton.id = 'date';
  dueDateButton.type = 'date';
  
  function getFullDate() {
    const d = new Date();
    let day = d.getDate();
    let month;
    if (d.getMonth() < 10) {
      month = '0' + Number(d.getMonth()+1).toString();
    } else {
      month = Number(d.getMonth()+1).toString();
    }
    let year = d.getFullYear();
    let dateMin = `${year}-${month}-${day}`;
    return dateMin
  }

  dueDateButton.min = getFullDate();
  dueDateButton.classList.add('due-date-button');
  pills.appendChild(dueDateButton);

  const folderButton = document.createElement('select');
  folderButton.classList.add('folder-select-button');
  pills.appendChild(folderButton);

  defaultSections.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder;
    folderButton.appendChild(option);
  });

  userProjects.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder;
    folderButton.appendChild(option);
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.formMethod = 'dialog';
  submit.classList.add('submit-button');
  newTaskForm.appendChild(submit);

  const submitBtnImg = document.createElement('img');
  submitBtnImg.src = PaperPlane;
  submitBtnImg.classList.add('submit-button-icon');
  submit.appendChild(submitBtnImg);
}


// POPUP MENU

function showMenu() {
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
 
  updateProjectsSectionList();
 }

 function updateProjectsSectionList() {
  const projectsSectionList = document.querySelector('.projects-section-list');
  for (let i = 0; i < userProjects.length; i++) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectsSectionList.appendChild(projectItem);

    const circle = document.createElement('img');
    circle.src = Circle;
    circle.classList.add('circle');
    projectItem.insertBefore(circle, projectItem.firstChild);
    circle.style.filter = userProjects[i].filter;

    const projectItemName = document.createElement('span');
    projectItemName.textContent = userProjects[i].name;
    projectItem.appendChild(projectItemName);
   }
}


// PROJECT FORM

function showNewProjectForm() {
  const content = document.querySelector('.content');
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('new-project-form');
  newProjectForm.classList.add('close-project-form');
  content.appendChild(newProjectForm);

  const newProjectFormHeader = document.createElement('div');
  newProjectFormHeader.classList.add('new-project-form-header');
  newProjectForm.appendChild(newProjectFormHeader);

  const backBtn = document.createElement('img');
  backBtn.src = Arrow;
  backBtn.classList.add('new-project-form-back');
  newProjectFormHeader.appendChild(backBtn);

  const newProjectFormH3 = document.createElement('h3');
  newProjectFormH3.classList.add('new-project-form-h3');
  newProjectFormH3.textContent = 'Add project';
  newProjectFormHeader.appendChild(newProjectFormH3);

  const newProjectFormSaveBtn = document.createElement('img');
  newProjectFormSaveBtn.src = Check;
  newProjectFormSaveBtn.classList.add('new-project-form-save');
  newProjectFormHeader.appendChild(newProjectFormSaveBtn);

  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group');
  newProjectForm.appendChild(formGroup);

  const label = document.createElement('label');
  label.for = 'projectName';
  label.textContent = 'Name';
  label.classList.add('project-name-label');
  formGroup.appendChild(label);


  const newProjectNameInput = document.createElement('input');
  newProjectNameInput.type = 'text';
  newProjectNameInput.id = 'projectName';
  newProjectNameInput.classList.add('new-project-name-input');
  newProjectNameInput.name = 'name';
  formGroup.appendChild(newProjectNameInput);

  const colorFormGroup = document.createElement('div');
  colorFormGroup.classList.add('color-form-group');
  newProjectForm.appendChild(colorFormGroup);

  const mainColorIcon = document.createElement('img');
  mainColorIcon.src = ListAlt;
  mainColorIcon.classList.add('color-icon');
  mainColorIcon.classList.add('main-color-icon');
  mainColorIcon.classList.add('default-color');
  colorFormGroup.appendChild(mainColorIcon);

  const colorLabelAndName = document.createElement('div');
  colorLabelAndName.classList.add('color-label-and-name')
  colorFormGroup.appendChild(colorLabelAndName);

  const selectedColorLabel = document.createElement('span');
  selectedColorLabel.classList.add('selected-color-label');
  selectedColorLabel.textContent = 'Color';
  colorLabelAndName.appendChild(selectedColorLabel);

  const selectedProjectColor = document.createElement('span');
  selectedProjectColor.classList.add('selected-project-color');
  selectedProjectColor.textContent = 'Charcoal';
  colorLabelAndName.appendChild(selectedProjectColor);
}

const colorNamesAndFilters = [
  ['Berry red', 'invert(16%) sepia(17%) saturate(6011%) hue-rotate(326deg) brightness(94%) contrast(95%)'],
  ['Red', 'invert(15%) sepia(90%) saturate(6449%) hue-rotate(359deg) brightness(108%) contrast(114%)'],
  ['Orange', 'invert(62%) sepia(52%) saturate(1790%) hue-rotate(0deg) brightness(103%) contrast(104%)'],
  ['Yellow', 'invert(85%) sepia(85%) saturate(1322%) hue-rotate(355deg) brightness(103%) contrast(107%)'],
  ['Olive green', 'invert(36%) sepia(100%) saturate(1063%) hue-rotate(40deg) brightness(92%) contrast(105%)'],
  ['Lime green', 'invert(64%) sepia(27%) saturate(4734%) hue-rotate(76deg) brightness(107%) contrast(134%)'],
  ['Green', 'invert(30%) sepia(55%) saturate(1798%) hue-rotate(90deg) brightness(103%) contrast(109%)'],
  ['Mint green', 'invert(95%) sepia(29%) saturate(3178%) hue-rotate(49deg) brightness(119%) contrast(100%)'],
  ['Teal', 'invert(24%) sepia(83%) saturate(2310%) hue-rotate(162deg) brightness(95%) contrast(101%)'],
  ['Sky blue', 'invert(79%) sepia(89%) saturate(1858%) hue-rotate(169deg) brightness(96%) contrast(91%)'],
  ['Light blue', 'invert(89%) sepia(5%) saturate(2127%) hue-rotate(162deg) brightness(100%) contrast(81%)'],
  ['Blue', 'invert(8%) sepia(100%) saturate(7297%) hue-rotate(247deg) brightness(96%) contrast(142%)'],
  ['Grape', 'invert(25%) sepia(50%) saturate(2134%) hue-rotate(250deg) brightness(89%) contrast(105%)'],
  ['Violet', 'invert(83%) sepia(28%) saturate(3562%) hue-rotate(245deg) brightness(95%) contrast(96%)'],
  ['Lavender', 'invert(95%) sepia(74%) saturate(1625%) hue-rotate(180deg) brightness(107%) contrast(96%)'],
  ['Magenta', 'invert(21%) sepia(38%) saturate(7392%) hue-rotate(297deg) brightness(115%) contrast(130%)'],
  ['Salmon', 'invert(67%) sepia(49%) saturate(1646%) hue-rotate(313deg) brightness(100%) contrast(97%)'],
  ['Charcoal', 'invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%)'],
  ['Grey', 'invert(54%) sepia(0%) saturate(1425%) hue-rotate(165deg) brightness(92%) contrast(85%)'],
  ['Taupe', 'invert(21%) sepia(14%) saturate(795%) hue-rotate(345deg) brightness(97%) contrast(88%)']
]

function showColorChoices() {
  const mainColorIcon = document.querySelector('.main-color-icon');
  const selectedProjectColor = document.querySelector('.selected-project-color');
  const content = document.querySelector('.content');
  const colorChoicesContainer = document.createElement('div');
  colorChoicesContainer.classList.add('color-choices-container');
  colorChoicesContainer.classList.add('close-color-choices');
  content.appendChild(colorChoicesContainer);

  const h3Title = document.createElement('h3');
  h3Title.textContent = 'Color';
  colorChoicesContainer.appendChild(h3Title);

  const colorChoicesList = document.createElement('ul');
  colorChoicesList.classList.add('color-choices-list');
  colorChoicesContainer.appendChild(colorChoicesList);

  colorNamesAndFilters.forEach(color => {
    const colorChoiceListItem = document.createElement('li');
    colorChoiceListItem.classList.add('color-list-item');
    colorChoicesContainer.appendChild(colorChoiceListItem);

    const colorIcon = document.createElement('img');
    colorIcon.src = ListAlt;
    colorIcon.classList.add('color-icon');
    colorChoiceListItem.appendChild(colorIcon);
    colorIcon.style.filter = color[1];

    const colorName = document.createElement('span');
    colorName.textContent = color[0];
    colorChoiceListItem.appendChild(colorName);
  })

  const listItems = document.querySelectorAll('.color-list-item');
  listItems.forEach(item => {
    item.addEventListener('click', (e) => {
      //remove default color
      mainColorIcon.classList.remove('default-color');
      // Set the main color icon to the color of the new selected color
      mainColorIcon.style.filter = e.target.closest('li').firstChild.style.filter;
      //Set the project color name to the user selected color
      selectedProjectColor.textContent = e.target.closest('li').children[1].textContent;
      //Close the color choice form
      colorChoicesContainer.classList.toggle('close-color-choices');
    })
  })
}


// // EVENT LISTENERS
// window.addEventListener('click', (e) => {
//   if (e.target.tagName !== 'DIALOG') return
//   modal.close();
//  })

// const menu = document.querySelector('.popup-menu');
// hamburgerMenuButton.addEventListener('click', () => {
//   menu.classList.toggle('close');
// });
// const closeBtn = document.querySelector('.close-button');
// closeBtn.addEventListener('click', () => {
//   menu.classList.toggle('close');
// });

// // li on click
// const sectionLinks = document.querySelectorAll('.popup-menu li');
// sectionLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     menu.classList.toggle('close');

//     setCurrentProject(defaultSections, link.textContent);
//     setCurrentProject(userProjects, link.textContent);
   
//     goToPage();
//   })
// })

//newprojectbtn on click
// newProjectBtn.addEventListener('click', () => {
//   menu.classList.toggle('close');
//   newProjectForm.classList.toggle('close-project-form');
// })

// // backbtn on click
// backBtn.addEventListener('click', () => {
//   clearNewProjectForm();
// })

//savebtn onclick
// newProjectSave.addEventListener('click', () => {
//   const userProject = newProject(newProjectNameInput.value, selectedProjectColor.textContent);
//   setProjectFilter(userProject);
//   userProjects.addElem(userProject);
//   setCurrentProject(userProjects, newProjectNameInput.value);
//   clearNewProjectForm();
//   emptyElement(projectsSectionList);
//   updateProjectsSectionList();
//   listenForProjectClick();
//   // removeFromDOM();
//   goToPage();
//   updateFolders();
// })

// //newtaskbtn on click
// addTaskBtn.addEventListener('click', () => {
//   modal.showModal();
//   updateFolderButtonOptions();
// })


// //submitbtn on click
// newTaskSubmit.addEventListener('click', () => {
//   if (newTaskTitle.value.length === 0) return
//   const task = newTodo(newTaskTitle.value, newTaskDescription.value, newTaskDate.value);
//   for (let i = 0; i < userProjects.length; i++) {
//     if (userProjects[i].name === newTaskFolder.value) {
//       userProjects[i].addTodos(task);
//     }
//   }
//   goToPage()
// })