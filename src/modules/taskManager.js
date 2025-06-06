import Task from "./task"
import { taskStorage, projectStorage } from "./storage"
import { Project } from "./project"
import { renderProjectsList } from "./ui"

const tasks = taskStorage.load()
const projects = projectStorage.load()

function addNewTask(title, notes, date, projectId){

    if(title){
        const newTask = new Task(title, notes, date, projectId)
        tasks.push(newTask)
        taskStorage.save(tasks)
        return newTask
    }else{
        return
    }
   
}

function deleteTask(taskId){
    const newTaskList = tasks.filter(task => task.id !== taskId)
    taskStorage.save(newTaskList)
    return newTaskList

}

function createNewProject(title){

    if(title){
        const newProject = new Project(title)
        projects.push(newProject)
        projectStorage.save(projects)
        renderProjectsList()
    }else{
        return
    }
 

}

function deleteProject(projectId){
    const projectsToKeep = projects.filter((project) => project.id !== projectId)
    const tasksToKeep = tasks.filter((task) => task.projectId !== projectId)
    
    projects.lenght = 0
    projects.push(...projectsToKeep)
    tasks.lenght = 0
    tasks.push(...tasksToKeep)

    projectStorage.save(projectsToKeep)
    taskStorage.save(tasksToKeep)

}


export {addNewTask, deleteTask, createNewProject, deleteProject}