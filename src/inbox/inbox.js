import HappyNews from './inbox.svg';

export default function showInbox() {
  const content = document.querySelector('.content');
  const header = document.querySelector('.header');
  const menuBar = document.querySelector('.menu-bar');
  
  const sectionName = document.createElement('h3');
  sectionName.textContent = 'Inbox';
  header.appendChild(sectionName);

  const kebabMenu = document.createElement('div');
  kebabMenu.classList.add('test');
  header.appendChild(kebabMenu);

  const sectionContent = document.createElement('div');
  sectionContent.classList.add('section-content');
  content.insertBefore(sectionContent, menuBar);

  const inboxImg = document.createElement('img');
  inboxImg.classList.add('section-image');
  inboxImg.src = HappyNews;
  sectionContent.appendChild(inboxImg);

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionContent.appendChild(sectionContentInfo);
  const status = document.createElement('p');
  status.setAttribute('style', 'white-space: pre;');
  status.textContent = "All clear";
  sectionContentInfo.appendChild(status);
  const para = document.createElement('p');
  // para.setAttribute('style', 'white-space: pre;');
  para.textContent = "Looks like everything's organized in the right place. \n Tap + to add a task";
  sectionContentInfo.appendChild(para);
}