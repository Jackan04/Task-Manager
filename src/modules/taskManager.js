import Task from "./task"
import { taskStorage } from "./storage"

const tasks = []

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

export {addNewTask, deleteTask}