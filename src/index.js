import "./styles.css" 
import Task from "./modules/task"
import { addNewTask, deleteTask } from "./modules/taskManager"
import { setupEventListeners } from "./modules/ui"
import { renderProjectsList } from "./modules/ui"
import { projectStorage, taskStorage } from "./modules/storage"


renderProjectsList()
setupEventListeners()



