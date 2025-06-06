const taskStorage = {
    
    save: (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    load:() =>{
        const tasksData = localStorage.getItem("tasks");
        if (!tasksData) {
            return []; 
        }
        try {
            return JSON.parse(tasksData);
        } catch (error) {
            console.error("Failed to load tasks from localStorage:", error);
            return []; 
        }
       
    }
}

const projectStorage = {

    save: (projects) => {
        localStorage.setItem("projects", JSON.stringify(projects));
    },

    load: () => {
         const projectsData = localStorage.getItem("projects");
        if (!projectsData) {
            return [];
        }
        try {
            return JSON.parse(projectsData);
        } catch (error) {
            console.error("Failed to load projects from localStorage:", error);
            return [];
        }
    }
}

export {taskStorage, projectStorage}