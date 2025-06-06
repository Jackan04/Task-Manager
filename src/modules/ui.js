import { createNewProject, addNewTask, deleteProject } from "./taskManager"
import { projectStorage, taskStorage } from "./storage"

const body = document.querySelector("body")
const app = document.querySelector("#app")
let currentProject = ""

function clearAndCloseForm(form) {
    form.close()
    form.remove()
}

function renderNewProjectForm() {
    const form = document.createElement("dialog")
    const formContent = document.createElement("div")
    const inputTitle = document.createElement("input")
    const buttonAddProject = document.createElement("button")
    const buttonCloseForm = document.createElement("button")

    buttonAddProject.textContent = "Add"
    buttonCloseForm.textContent = "Close"
    inputTitle.placeholder = "Enter project title"

    form.setAttribute("id", "newProjectForm")
    inputTitle.setAttribute("id", "inputProjectTitle")
    buttonAddProject.setAttribute("id", "buttonAddProject")
    buttonCloseForm.setAttribute("class", "btn-danger")
    buttonAddProject.setAttribute("class", "btn-success")

    formContent.appendChild(inputTitle)
    formContent.appendChild(buttonAddProject)
    formContent.appendChild(buttonCloseForm)

    form.appendChild(formContent)
    body.appendChild(form)
    form.showModal()

    buttonCloseForm.addEventListener("click", () => clearAndCloseForm(form))

    buttonAddProject.addEventListener("click", () => {
        createNewProject(inputTitle.value)
        clearAndCloseForm(form)
        renderProjectsList()
    })
}

function renderProjectPage(projectTitle, projectId) {
    app.innerHTML = ""
    const pageHeader = document.createElement("header")
    const pageTitle = document.createElement("h1")
    const buttonAddNewTask = document.createElement("button")
    const buttonDeleteProject = document.createElement("button")
    let taskList = document.createElement("ul")

    buttonAddNewTask.textContent = "New Task"
    pageTitle.textContent = projectTitle
    buttonDeleteProject.textContent = "Delete Project"
    taskList.setAttribute("id", "task-list")

    buttonAddNewTask.setAttribute("class", "btn-neutral")
    buttonAddNewTask.setAttribute("id", "btn-new-task")
    buttonDeleteProject.setAttribute("class", "btn-danger")
    buttonDeleteProject.setAttribute("id", "btn-delete-project")

    pageHeader.appendChild(pageTitle)
    pageHeader.appendChild(buttonDeleteProject)
    app.appendChild(pageHeader)
    app.appendChild(buttonAddNewTask)
    app.appendChild(taskList)

    currentProject = projectId
    renderTasks(currentProject)


    buttonAddNewTask.addEventListener("click", renderNewTaskForm)
    buttonDeleteProject.addEventListener("click", () => {
                const confirmation = confirm("This will permanently delete the project and all it's tasks. Are you sure you want to continue?")
        if (confirmation) {
            deleteProject(currentProject)
            renderProjectsList()
            app.innerHTML = "" 
        }
    })
}

function renderTasks(projectId) {
    const taskList = document.querySelector("#task-list")
    taskList.innerHTML = ""
    const tasks = taskStorage.load()
    const projectTasks = tasks.filter((task) => task.projectId === projectId)



    projectTasks.forEach(task => {
        const listItem = document.createElement("li")
        listItem.setAttribute("class", "task-item")
        listItem.dataset.id = task.id

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.isCompleted

        if (task.isCompleted) {
            listItem.classList.add("completed")
            checkbox.classList.add("completed")
        }

        const titleSpan = document.createElement("span")
        titleSpan.textContent = task._title

        listItem.appendChild(checkbox)
        listItem.appendChild(titleSpan)
        taskList.appendChild(listItem)

        titleSpan.addEventListener("click", () =>{
            showTaskDetails(task._title, task._notes, task._date)
        })

        checkbox.addEventListener("click", () => {
            task.isCompleted = !task.isCompleted
            listItem.classList.toggle("completed", task.isCompleted)
            checkbox.classList.toggle("completed", task.isCompleted)

            const allTasks = taskStorage.load()
            const idx = allTasks.findIndex(t => t.id === task.id)
            if (idx !== -1) {
                allTasks[idx].isCompleted = task.isCompleted
                taskStorage.save(allTasks)
            }
        })
    })
}

function showTaskDetails(title, notes, date) {
    const modal = document.createElement("dialog")
    modal.setAttribute("id", "task-details-modal")

    const content = document.createElement("div")
    content.style.display = "flex"
    content.style.flexDirection = "column"
    content.style.gap = "1rem"

    const titleElem = document.createElement("h2")
    titleElem.textContent = title

    const notesElem = document.createElement("p")
    notesElem.textContent = notes ? notes : "No notes for this task."

    const dateElem = document.createElement("p")
    dateElem.textContent = date ? `Due: ${date}` : "No due date set."

    const closeBtn = document.createElement("button")
    closeBtn.textContent = "Close"
    closeBtn.className = "btn-danger"

    content.appendChild(titleElem)
    content.appendChild(notesElem)
    content.appendChild(dateElem)
    content.appendChild(closeBtn)

    modal.appendChild(content)
    document.body.appendChild(modal)
    modal.showModal()

    closeBtn.addEventListener("click", () => {
        modal.close()
        modal.remove()
    })
}

function renderNewTaskForm() {
    const form = document.createElement("dialog")
    const formContent = document.createElement("div")
    const inputTitle = document.createElement("input")
    const inputNotes = document.createElement("textarea")
    const inputDate = document.createElement("input")
    const buttonAddTask = document.createElement("button")
    const buttonCloseForm = document.createElement("button")

    inputTitle.placeholder = "Enter task title"
    inputNotes.placeholder = "Enter notes"
    inputDate.type = "date"
    buttonAddTask.textContent = "Add Task"
    buttonCloseForm.textContent = "Close"

    form.setAttribute("id", "newTaskForm")
    inputTitle.setAttribute("id", "inputTaskTitle")
    inputNotes.setAttribute("id", "inputTaskNotes")
    inputDate.setAttribute("id", "inputTaskDate")
    buttonAddTask.setAttribute("id", "buttonAddTask")
    buttonAddTask.setAttribute("class", "btn-success")
    buttonCloseForm.setAttribute("class", "btn-danger")

    formContent.appendChild(inputTitle)
    formContent.appendChild(inputNotes)
    formContent.appendChild(inputDate)
    formContent.appendChild(buttonAddTask)
    formContent.appendChild(buttonCloseForm)

    form.appendChild(formContent)
    body.appendChild(form)
    form.showModal()

    buttonCloseForm.addEventListener("click", () => {
        clearAndCloseForm(form)
        renderTasks(currentProject)
    })

    buttonAddTask.addEventListener("click", () => {
        addNewTask(
            inputTitle.value,
            inputNotes.value,
            inputDate.value,
            currentProject
        )
        clearAndCloseForm(form)
        renderTasks(currentProject)
    })
}

function renderProjectsList() {
    const buttonAddNewProject = document.querySelector("#btn-new-project")
    const projectsList = document.querySelector("#projects-list")
    projectsList.innerHTML = ""
    const projects = projectStorage.load()

    projects.forEach(project => {
        const listItem = document.createElement("li")
        listItem.textContent = project._title
        listItem.setAttribute("class", "project-list-item")
        listItem.dataset.id = project.id
        
        projectsList.appendChild(listItem)
        listItem.addEventListener("click", () => {
            document.querySelectorAll('.project-list-item').forEach(item => {
                item.classList.remove('active')
            })
            listItem.classList.add('active')

            const projectId = listItem.dataset.id
            renderProjectPage(project._title, projectId)
        })
    })

    buttonAddNewProject.addEventListener("click", renderNewProjectForm)
}

export {renderProjectsList, renderProjectPage }

