import Arrow from './arrow-left-solid.svg';
import Check from './check-solid.svg';
import ListAlt from './list-alt.svg';
import Circle from '../assets/icons/mycircle.svg';
import { newProject } from '../factoryFunctions';
import { userProjects,setCurrentProject, getCurrentProject } from '../currentProjectFunctions';
import { goToPage } from '../goToPage/goToPage';
import { updateManageProjectsList } from '../manageProjects/manageProjects';

export function showNewProjectForm() {
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

  newProjectFormSaveBtn.addEventListener('click', () => {
    makeNewProject();
  });

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
  showColorChoices();
  
  const colorChoicesContainer = document.querySelector('.color-choices-container');
  colorFormGroup.addEventListener('click', () => {
    colorChoicesContainer.classList.toggle('close-color-choices');
  })
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

export function showColorChoices() {
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
  });

  const listItems = document.querySelectorAll('.color-list-item');
  listItems.forEach(item => {
    item.addEventListener('click', (e) => {
      //remove default color
      mainColorIcon.classList.remove('default-color');

      const editMainColorIcon = document.querySelector('.edit-main-color-icon');
      editMainColorIcon.classList.remove('edit-default-color');

      // Set the main color icon to the color of the new selected color
      mainColorIcon.style.filter = e.target.closest('li').firstChild.style.filter;

      editMainColorIcon.style.filter = e.target.closest('li').firstChild.style.filter;

      //Set the project color name to the user selected color
      selectedProjectColor.textContent = e.target.closest('li').children[1].textContent;
      
      const editSelectedProjectColor = document.querySelector('.edit-selected-project-color');
      editSelectedProjectColor.textContent = e.target.closest('li').children[1].textContent;

      //Close the color choice form
      colorChoicesContainer.classList.toggle('close-color-choices');
    })
  })
}

export function clearNewProjectForm() {
  const newProjectForm = document.querySelector('.new-project-form');
  const newProjectNameInput = document.querySelector('.new-project-name-input');
  const mainColorIcon = document.querySelector('.main-color-icon');
  const selectedProjectColor = document.querySelector('.selected-project-color');

  newProjectForm.classList.toggle('close-project-form');
  newProjectNameInput.value = '';
  mainColorIcon.style.filter = 'unset';
  mainColorIcon.classList.add('default-color');
  selectedProjectColor.textContent = 'Charcoal';
}

export function makeNewProject() {
  const newProjectNameInput = document.querySelector('.new-project-name-input');
  const selectedProjectColor = document.querySelector('.selected-project-color');
  if (newProjectNameInput.value === '') return
  const userProject = newProject(newProjectNameInput.value, selectedProjectColor.textContent);

  //add unique id to project
  userProject.id = Math.random().toString(16).slice(2);
  
  setProjectFilter(userProject);
  userProjects.push(userProject);
  setCurrentProject(userProjects, newProjectNameInput.value);
  clearNewProjectForm();

  const projectsSectionList = document.querySelector('.projects-section-list');
  const manageProjectsList = document.querySelector('.manage-projects-list');
  updateManageProjectsList();
  updateProjectsSectionList();
  
  let currentProject = getCurrentProject();
  goToPage(currentProject);
}

export function setProjectFilter(project) {
  let index = colorNamesAndFilters.findIndex(arr => arr[0] === project.color);
  project.filter = colorNamesAndFilters[index][1];
}

export function updateProjectsSectionList() {
  const projectsSectionList = document.querySelector('.projects-section-list');
  projectsSectionList.innerHTML = '';
  for (let i = 0; i < userProjects.length; i++) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.classList.add(userProjects[i].id);
    projectsSectionList.appendChild(projectItem);
    const menu = document.querySelector('.popup-menu');

    const circle = document.createElement('img');
    circle.src = Circle;
    circle.classList.add('circle');
    projectItem.insertBefore(circle, projectItem.firstChild);
    circle.style.filter = userProjects[i].filter;

    const projectItemName = document.createElement('span');
    projectItemName.textContent = userProjects[i].name;
    projectItem.appendChild(projectItemName);

    projectItem.addEventListener('click', () => {
      console.log('LISTEN')
      menu.classList.toggle('close');
      setCurrentProject(userProjects, projectItemName.textContent);
      let currentProject = getCurrentProject();
      goToPage(currentProject);
    })
   }
}