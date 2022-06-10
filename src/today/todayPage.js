import Bicycle from './bicycle.svg';

export default function showToday() {
  const content = document.querySelector('.content');
  const todayHeader = document.querySelector('.header');
  const menuBar = document.querySelector('.menu-bar');
  
  const sectionName = document.createElement('h3');
  sectionName.textContent = 'Today';
  todayHeader.appendChild(sectionName);

  const kebabMenu = document.createElement('div');
  kebabMenu.classList.add('test');
  todayHeader.appendChild(kebabMenu);

  const sectionContent = document.createElement('div');
  sectionContent.classList.add('section-content');
  content.insertBefore(sectionContent, menuBar);

  const bicycleImg = document.createElement('img');
  bicycleImg.classList.add('section-image');
  bicycleImg.src = Bicycle;
  sectionContent.appendChild(bicycleImg);

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionContent.appendChild(sectionContentInfo);
  const status = document.createElement('p');
  status.setAttribute('style', 'white-space: pre;');
  status.textContent = "You're all done for today! \n Congratulations!";
  sectionContentInfo.appendChild(status);
  const para = document.createElement('p');
  para.textContent = 'Enjoy the rest of the day!';
  sectionContentInfo.appendChild(para);

}