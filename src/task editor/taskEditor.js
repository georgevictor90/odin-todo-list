import Calendar from '../assets/icons/calendar.svg';
import PaperPlane from '../assets/icons/paper-plane-right.svg';
import { folders } from '..';
// import { updateFolderButtonOptions, updateFolders } from '../application logic/applicationLogic';
import { defaultSections, getCurrentProject, userProjects } from '../currentProjectFunctions';
import { newTodo } from '../factoryFunctions';
import { showTasks } from '../goToPage/goToPage';
import { format } from 'date-fns';

export function showTaskEditor() {
  const today = format(new Date(), 'yyyy-MM-dd');
  
  const content = document.querySelector('.content');
  const modal = document.createElement('dialog');
  modal.classList.add('modal');
  content.appendChild(modal);
  
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('task-editor');
  modal.appendChild(newTaskForm);

  const closeModal = document.createElement('div');
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
    if (d.getDate() < 10) {
      day = '0' + Number(d.getDate()).toString();
    } else {
      day = Number(d.getDate()).toString();
    }
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

  // const dueDateButtonIcon = document.createElement('img');
  // dueDateButtonIcon.src = Calendar;
  // dueDateButtonIcon.classList.add('button-icon');
  // dueDateButton.appendChild(dueDateButtonIcon);

  // const dueDateButtonText = document.createElement('span');
  // dueDateButtonText.textContent = 'Due date';
  // dueDateButtonText.classList.add('button-text');
  // dueDateButton.appendChild(dueDateButtonText);

  const folderButton = document.createElement('select');
  folderButton.classList.add('folder-select-button');
  pills.appendChild(folderButton);
  
  updateFolderButtonOptions();
  // const folders = ['Inbox', 'Today'];
  // folders.forEach(folder => {
  //   console.log('wtf man');
  //   const option = document.createElement('option');
  //   option.textContent = folder;
  //   option.value = folder;
  //   folderButton.appendChild(option);
  // });

  const submit = document.createElement('button');
  submit.type = 'button';
  // submit.formMethod = 'dialog';
  submit.classList.add('submit-button');
  newTaskForm.appendChild(submit);

  const submitBtnImg = document.createElement('img');
  submitBtnImg.src = PaperPlane;
  submitBtnImg.classList.add('submit-button-icon');
  submit.appendChild(submitBtnImg);

  closeModal.addEventListener('click', () => {
    modal.close();
  });

  const newTaskTitle = document.querySelector('.task-title-input');
  const newTaskDescription = document.querySelector('.task-description-input');
  const newTaskDate = document.querySelector('.due-date-button');
  const newTaskFolder = document.querySelector('.folder-select-button');

  submit.addEventListener('click', () => {
    if (newTaskTitle.value.length === 0) return

    const task = newTodo(newTaskTitle.value, newTaskDescription.value, newTaskDate.value);
    task.id = Math.random().toString(16).slice(2);
    for (let i = 0; i < userProjects.length; i++) {
      if (userProjects[i].name === newTaskFolder.value) {
        userProjects[i].addTodos(task);
      }
    };
    for (let i = 0; i < defaultSections.length; i++) {
      if (defaultSections[i].name === newTaskFolder.value) {
        defaultSections[i].addTodos(task);
      } 
    };
    if (newTaskDate.value === today) {
      defaultSections[1].addTodos(task)
    };
    console.log(defaultSections[1]);
    showTasks();
    clearForm();
    // goToPage();
  })
}

function clearForm() {
  const inputs = document.querySelectorAll('.task-title-input, .task-description-input, .due-date-button');
  inputs.forEach(input => {
    input.value = '';
  })
}

export function updateFolderButtonOptions() {
  const folderButton = document.querySelector('.folder-select-button');
  folderButton.innerHTML = "";

  // defaultSections.forEach(section => {
  //   const option = document.createElement('option');
  //   option.textContent = section.name;
  //   option.value = section.name;
  //   folderButton.appendChild(option);
  // });

  const option = document.createElement('option');
  option.textContent = defaultSections[0].name;
  option.value = defaultSections[0].name;
  folderButton.appendChild(option);

  userProjects.forEach(project => {
    const option = document.createElement('option');
    option.textContent = project.name;
    option.value = project.name;
    folderButton.appendChild(option);
  })

  let currentProject = getCurrentProject();
  const options = document.querySelectorAll('select > option');
  options.forEach(option => {
    if (option.textContent === currentProject.name) {
      option.selected = 'selected';
    } else {
      return
    }
  })

}