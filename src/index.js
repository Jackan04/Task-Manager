import "./styles.css" 
import Task from "./modules/task"
import { addNewTask, deleteTask } from "./modules/taskManager"
import { setupEventListeners } from "./modules/ui"


setupEventListeners()

const newTask = addNewTask("Hello World!")
newTask.toggleCompleted()

deleteTask(newTask.id)


