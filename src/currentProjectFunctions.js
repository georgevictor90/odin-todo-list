export const defaultSections = [];
export const userProjects = [];

export function getCurrentProject() {
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

export function setCurrentProject(container, projectname) {
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