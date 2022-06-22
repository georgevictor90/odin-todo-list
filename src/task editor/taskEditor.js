import Calendar from '../assets/icons/calendar.svg';
import PaperPlane from '../assets/icons/paper-plane-right.svg';
import { folders } from '..';
import { arrayOfProjectTitles } from '..';

export default function showTaskEditor() {
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
  folders.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder.toLowerCase();
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