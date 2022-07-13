// import InboxSrc from '../assets/inbox.svg';
// import TodaySrc from '../assets/bicycle.svg';
import { folders } from '..';
import Circle from '../assets/icons/mycircle.svg';

import goToPage from "../goToPage/goToPage";
import { colorNamesAndFilters } from "../projectColors/projectColors";

export function newTodo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    complete: false,
  }
};

function newProjectContainer() {
  return {
    length: 0,
    addElem: function addElem() {
      for (let i = 0; i < arguments.length; i++) {
        [].push.call(this, arguments[i]);
      }
    },
    removeElem: function removeElem() {
      for (let i = 0; i < arguments.length; i++) {
        [].splice.call(this, arguments[i], 1)
      }
    },
  }
}

export function newProject(name, color, isCurrentProject) {
  return {
    length: 0,
    name: name,
    color: color,
    isCurrentProject,
    addTodos: function addTodos() {
      for (let i = 0; i < arguments.length; i++) {
        [].push.call(this, arguments[i]);
      }
    },
    removeTodos: function removeTodos() {
      for (let i = 0; i < arguments.length; i++) {
        [].splice.call(this, arguments[i], 1)
      }
    },
  }
}

const Inbox = newProject('Inbox','green');
Inbox.statusText = "All clear";
Inbox.paraText = "Looks like everything's organized in the right place. \n Tap + to add a task";

const Today = newProject('Today','blue', true);
Today.statusText = "You're all done for today! \n Congratulations!";
Today.paraText = "Enjoy the rest of the day!";

export const Projects = newProjectContainer();
Projects.addElem(Inbox, Today);

export const userProjects = newProjectContainer();
userProjects.statusText = "What are you planning to get done?";
userProjects.paraText = "Tap + to add a task to this project";
Projects.addElem(userProjects);

export function checkCurrentProject() {
  
  
  if (Projects.length == 2) {
    for (let i = 0; i < 2; i++) {
      if (Projects[i].isCurrentProject === true) {
        return Projects[i];
      }
    };
  } else {
    for (let i = 0; i < 2; i++) {
      if (Projects[i].isCurrentProject === true) {
        return Projects[i];
      }
    };
    for (let i = 0; i < Projects[2].length; i++) {
      if (Projects[2][i].isCurrentProject === true) {
        return Projects[2][i];
      }
    };
  }

  // for (let i = 0; i < Projects.length; i++) {
  //   if (Projects[i].isCurrentProject === true) {
  //     return Projects[i];
  //   }
  // };
}

// export function checkCurrentProject() {
//   for (let i = 0; i < Projects.length; i++) {
//     if (Projects[i].isCurrentProject === true) {
//       return Projects[i];
//     }
//   };
// }

export function setDefaultCurrentProjectsToFalse() {
  Projects[0].isCurrentProject = false;
  Projects[1].isCurrentProject = false;
}

export function setCurrentProject(container, projectname) {
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


export function updateProjectsSectionList() {
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

const content = document.querySelector('.content');

export function removeFromDOM() {
  const header = document.querySelector('.header');
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  content.childNodes[1].parentNode.removeChild(content.childNodes[1]);
}

export function listenForProjectClick() {
  const menu = document.querySelector('.popup-menu');
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(projectLink => {
    projectLink.addEventListener('click', () => {
      menu.classList.toggle('close');
      setCurrentProject(userProjects, projectLink.textContent);
      // removeFromDOM();
      goToPage();
      setDefaultCurrentProjectsToFalse();
    })
  })
}

export function emptyElement(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}

export function setProjectFilter(project) {
  let index = colorNamesAndFilters.findIndex(arr => arr[0] === project.color);
  project.filter = colorNamesAndFilters[index][1];
}



export function updateFolders() {
  for (let i = 0; i < userProjects.length; i++) {
    folders.push(userProjects[i].name);
  }
}

export function updateFolderButtonOptions() {
  console.log('started update folder button');
  const folderButton = document.querySelector('.folder-select-button');
  folderButton.innerHTML = "";
  folders.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder;
    folderButton.appendChild(option);
  });
}

export function updateFolderButtonOptions() {
  console.log('started update folder button');
  const folderButton = document.querySelector('.folder-select-button');
  folderButton.innerHTML = "";
  folders.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder;
    folderButton.appendChild(option);
  });
}