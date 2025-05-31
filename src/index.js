import "./styles.css" 
import Task from "./modules/task"
import { addNewTask, deleteTask } from "./modules/taskManager"

const newTask = addNewTask("Hello World!")
newTask.toggleCompleted()

deleteTask(newTask.id)


