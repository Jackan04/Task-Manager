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
        console.log(`"${newTask.title}" was saved.`)
        return newTask
    }else{
        return
    }
   
}

function deleteTask(taskId){
    const newTaskList = tasks.filter(task => task.id !== taskId)
    taskStorage.save(newTaskList)
    console.log(`${taskId} was deleted.`)
    return newTaskList

}

function createNewProject(title){

    if(title){
        const newProject = new Project(title)
        projects.push(newProject)
        projectStorage.save(projects)
        console.log(`${newProject.title} was created.`)
        renderProjectsList()
    }else{
        return
    }
 

}

function deleteProject(projectId){
    const projectsToKeep = projects.filter((project) => project.id !== projectId)
    const tasksToKeep = tasks.filter((task) => task.projectId !== projectId)
    projectStorage.save(projectsToKeep)
    taskStorage.save(tasksToKeep)
    projects.push(projectsToKeep)
}


export {addNewTask, deleteTask, createNewProject, deleteProject}