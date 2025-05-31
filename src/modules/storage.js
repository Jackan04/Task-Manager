const taskStorage = {
    
    save: (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Tasks saved!");
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

}

export {taskStorage}