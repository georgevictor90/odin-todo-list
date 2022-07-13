import Arrow from '../newProjectForm/arrow-left-solid.svg';
import Check from '../newProjectForm/check-solid.svg';
import ListAlt from '../newProjectForm/list-alt.svg';
import Circle from '../assets/icons/mycircle.svg';
import { newProject } from '../factoryFunctions';
import { userProjects,setCurrentProject, getCurrentProject } from '../currentProjectFunctions';
import { goToPage } from '../goToPage/goToPage';
import { updateManageProjectsList } from '../manageProjects/manageProjects';
import { setProjectFilter, showColorChoices, updateProjectsSectionList } from '../newProjectForm/newProjectForm';

export function showEditProjectForm() {
  const content = document.querySelector('.content');
  const editProjectForm = document.createElement('form');
  editProjectForm.classList.add('edit-project-form');
  editProjectForm.classList.add('close-edit-project-form');
  content.appendChild(editProjectForm);

  const editProjectFormHeader = document.createElement('div');
  editProjectFormHeader.classList.add('edit-project-form-header');
  editProjectForm.appendChild(editProjectFormHeader);

  const editBackBtn = document.createElement('img');
  editBackBtn.src = Arrow;
  editBackBtn.classList.add('edit-project-form-back');
  editProjectFormHeader.appendChild(editBackBtn);

  const editProjectFormH3 = document.createElement('h3');
  editProjectFormH3.classList.add('edit-project-form-h3');
  editProjectFormH3.textContent = 'Edit project';
  editProjectFormHeader.appendChild(editProjectFormH3);

  const editProjectFormSaveBtn = document.createElement('img');
  editProjectFormSaveBtn.src = Check;
  editProjectFormSaveBtn.classList.add('edit-project-form-save');
  editProjectFormHeader.appendChild(editProjectFormSaveBtn);

  const editFormGroup = document.createElement('div');
  editFormGroup.classList.add('edit-form-group');
  editProjectForm.appendChild(editFormGroup);

  const label = document.createElement('label');
  label.for = 'projectName';
  label.textContent = 'Name';
  label.classList.add('edit-project-name-label');
  editFormGroup.appendChild(label);


  const editProjectNameInput = document.createElement('input');
  editProjectNameInput.type = 'text';
  editProjectNameInput.id = 'editProjectName';
  editProjectNameInput.classList.add('edit-project-name-input');
  editProjectNameInput.name = 'name';
  editFormGroup.appendChild(editProjectNameInput);

  const editColorFormGroup = document.createElement('div');
  editColorFormGroup.classList.add('edit-color-form-group');
  editProjectForm.appendChild(editColorFormGroup);

  const editMainColorIcon = document.createElement('img');
  editMainColorIcon.src = ListAlt;
  editMainColorIcon.classList.add('edit-color-icon');
  editMainColorIcon.classList.add('edit-main-color-icon');
  editMainColorIcon.classList.add('edit-default-color');
  editColorFormGroup.appendChild(editMainColorIcon);

  const editColorLabelAndName = document.createElement('div');
  editColorLabelAndName.classList.add('edit-color-label-and-name')
  editColorFormGroup.appendChild(editColorLabelAndName);

  const selectedColorLabel = document.createElement('span');
  selectedColorLabel.classList.add('edit-selected-color-label');
  selectedColorLabel.textContent = 'Color';
  editColorLabelAndName.appendChild(selectedColorLabel);

  const editSelectedProjectColor = document.createElement('span');
  editSelectedProjectColor.classList.add('edit-selected-project-color');
  editSelectedProjectColor.textContent = 'Charcoal';
  editColorLabelAndName.appendChild(editSelectedProjectColor);
  // showColorChoices();

  
  const colorChoicesContainer = document.querySelector('.color-choices-container');
  editColorFormGroup.addEventListener('click', () => {
    colorChoicesContainer.classList.toggle('close-color-choices');  
  })

  const manageProjectsBtn = document.querySelector('.manage-projects-button');
  manageProjectsBtn.addEventListener('click', () => {
    const manageProjects = document.querySelector('.manage-projects');
    manageProjects.classList.toggle('close');
    // editProjectForm.classList.toggle('close-edit-project-form');
  })

  editProjectFormSaveBtn.addEventListener('click', () => {
    console.log(userProjects);
    let proj = userProjects.find(function(project) {
      return project.id === editProjectForm.id;
    })
    editProject(proj);
    console.log(userProjects);
  })
}

function editProject(proj) {
  const editProjectNameInput = document.querySelector('.edit-project-name-input');
  const editSelectedProjectColor = document.querySelector('.edit-selected-project-color');
  proj.name = editProjectNameInput.value;
  proj.color = editSelectedProjectColor.textContent;
  setProjectFilter(proj);
  clearEditProjectForm();
  // update manageProjects
  updateManageProjectsList();
  // update menu
  updateProjectsSectionList();
}

function clearEditProjectForm() {
  const editProjectForm = document.querySelector('.edit-project-form');
  const editProjectNameInput = document.querySelector('.edit-project-name-input');
  const editMainColorIcon = document.querySelector('.edit-main-color-icon');
  const editSelectedProjectColor = document.querySelector('.edit-selected-project-color');

  editProjectForm.classList.toggle('close-edit-project-form');
  editProjectNameInput.value = '';
  editMainColorIcon.style.filter = 'unset';
  editMainColorIcon.classList.add('edit-default-color');
  editSelectedProjectColor.textContent = 'Charcoal';
}