import Task from "./task"
import { taskStorage, projectStorage } from "./storage"
import { Project } from "./project"

const tasks = []
const projects = []

function addNewTask(title, notes, date, projectId){
    const newTask = new Task(title, notes, date, projectId)
    tasks.push(newTask)
    taskStorage.save(tasks)
    console.log(`"${newTask.title}" was saved.`)
    return newTask
}

function deleteTask(taskId){
    const newTaskList = tasks.filter(task => task.id !== taskId)
    taskStorage.save(newTaskList)
    console.log(`${taskId} was deleted.`)
    return newTaskList

}

function createNewProject(title){
    const newProject = new Project(title)
    projects.push(newProject)
    projectStorage.save(projects)
    console.log(`${newProject.title} was created.`)


}

export {addNewTask, deleteTask, createNewProject}