import { userProjects } from "../currentProjectFunctions";
import Circle from '../assets/icons/mycircle.svg';
import Edit from './edit.svg';
import Remove from './trash-alt.svg';
import Close from '../popUpMenu/x.svg';
import { updateProjectsSectionList } from "../newProjectForm/newProjectForm";

export function showManageProjects() {
  const content = document.querySelector('.content');
  const manageProjects = document.createElement('div');
  manageProjects.classList.add('manage-projects');
  manageProjects.classList.add('close');
  content.appendChild(manageProjects);

  const manageProjectsHeader = document.createElement('div');
  manageProjectsHeader.classList.add('manage-projects-header');
  manageProjects.appendChild(manageProjectsHeader);

  const manageProjectsTitle = document.createElement('h3');
  manageProjectsTitle.textContent = 'Manage projects';
  manageProjectsTitle.classList.add('manage-projects-title');
  manageProjectsHeader.appendChild(manageProjectsTitle);

  const manageProjectsCloseBtn = document.createElement('img');
  manageProjectsCloseBtn.src = Close;
  manageProjectsCloseBtn.classList.add('manage-projects-close-button');
  manageProjectsHeader.appendChild(manageProjectsCloseBtn);
  manageProjectsCloseBtn.addEventListener('click', () => {
    manageProjects.classList.toggle('close');
  })

  const manageProjectsList = document.createElement('ul');
  manageProjectsList.classList.add('manage-projects-list');
  manageProjects.appendChild(manageProjectsList);

  updateManageProjectsList();
}

export function updateManageProjectsList() {
  const manageProjectsList = document.querySelector('.manage-projects-list');
  manageProjectsList.innerHTML = '';

  for (let i = 0; i < userProjects.length; i++) {
    const manageProjectsItem = document.createElement('li');
    manageProjectsItem.classList.add('manage-projects-item');
    manageProjectsItem.id = userProjects[i].id;
    manageProjectsList.appendChild(manageProjectsItem);

    const manageProjectsItemIconAndTitle = document.createElement('div');
    manageProjectsItemIconAndTitle.classList.add('manage-projects-item-left');
    manageProjectsItem.appendChild(manageProjectsItemIconAndTitle);

    const circle = document.createElement('img');
    circle.src = Circle;
    circle.classList.add('circle');
    manageProjectsItemIconAndTitle.appendChild(circle);
    circle.style.filter = userProjects[i].filter;

    const manageProjectsItemName = document.createElement('span');
    manageProjectsItemName.textContent = userProjects[i].name;
    manageProjectsItemIconAndTitle.appendChild(manageProjectsItemName);

    const manageProjectsItemIcons = document.createElement('div');
    manageProjectsItemIcons.classList.add('manage-projects-item-icons');
    manageProjectsItem.appendChild(manageProjectsItemIcons);
    
    const manageProjectsItemEdit = document.createElement('img');
    manageProjectsItemEdit.classList.add('icon');
    manageProjectsItemEdit.src = Edit;
    manageProjectsItemIcons.appendChild(manageProjectsItemEdit);

    manageProjectsItemEdit.addEventListener('click', () => {
      console.log(userProjects);
      //open edit project form
      const editProjectForm = document.querySelector('.edit-project-form');
      editProjectForm.classList.toggle('close-edit-project-form');
      //populate input fields with name of project and color
      console.log(userProjects[i])
      // editProjectNameInput.value = project.name
      const editProjectNameInput = document.querySelector('.edit-project-name-input');
      editProjectNameInput.value = userProjects[i].name;
      const editSelectedProjectColor = document.querySelector('.edit-selected-project-color');
      editSelectedProjectColor.textContent = userProjects[i].color;
      const editMainColorIcon = document.querySelector('.edit-main-color-icon');
      console.log(editMainColorIcon);
      editMainColorIcon.style.filter = userProjects[i].filter;
      editProjectForm.id = userProjects[i].id;
    })

    const manageProjectsItemRemove = document.createElement('img');
    manageProjectsItemRemove.classList.add('icon');
    manageProjectsItemRemove.classList.add('circle');
    manageProjectsItemRemove.src = Remove;
    manageProjectsItemIcons.appendChild(manageProjectsItemRemove);

    manageProjectsItemRemove.addEventListener('click', () => {
      let result = confirm("Are you sure you want to delete this project?");
      if (result) {
        //delete from manage project list
        manageProjectsList.removeChild(manageProjectsItem);
        //delete from userProjects
        userProjects.splice(userProjects.indexOf(userProjects[i]), 1);
        console.log(userProjects);
        updateProjectsSectionList();
      }
    })
  }
}