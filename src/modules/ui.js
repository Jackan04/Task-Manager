import { createNewProject } from "./taskManager"
import { projectStorage, taskStorage } from "./storage"

const body = document.querySelector("body")
 const app = document.querySelector("#app")
let currentProject = ""

function renderNewProjectForm(){

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

        buttonCloseForm.addEventListener("click", () => {
        form.close();
        form.remove();
        });

        buttonAddProject.addEventListener("click", () =>{
            createNewProject(inputTitle.value)
            form.close()
        })
    

}

function renderProjectPage(projectTitle, projectId){
    app.innerHTML = ""
    const pageHeader = document.createElement("header")
    const pageTitle = document.createElement("h1")
    const buttonAddNewTask = document.createElement("button")
    const buttonDeleteProject = document.createElement("button")
    const taskList = document.createElement("ul")


    buttonAddNewTask.textContent = "New Task"
    pageTitle.textContent = projectTitle
    buttonDeleteProject.textContent = "Delete Project"

    buttonAddNewTask.setAttribute("class", "btn-neutral")
    buttonAddNewTask.setAttribute("id", "btn-new-task")
    buttonDeleteProject.setAttribute("class", "btn-danger")
    buttonDeleteProject.setAttribute("id", "btn-delete-project")

    pageHeader.appendChild(pageTitle)
    pageHeader.appendChild(buttonDeleteProject)
    app.appendChild(pageHeader)
    app.appendChild(buttonAddNewTask)
    app.appendChild(taskList)
    


}

function renderProjectsList() {
    const projectsList = document.querySelector("#projects-list");
    projectsList.innerHTML = "";
    const projects = projectStorage.load(); 
    
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = project._title;
        listItem.setAttribute("class", "project-list-item")
        listItem.dataset.id = project._id;
        projectsList.appendChild(listItem);

        listItem.addEventListener("click", () =>{
            const projectId = listItem.dataset.id;
            renderProjectPage(project._title,projectId)
        })
    });
}


function setupEventListeners(){
    
    const buttonAddNewProject = document.querySelector("#btn-new-project")
    buttonAddNewProject.addEventListener("click", () =>{
        renderNewProjectForm()
    })
    
   
 

}

export {setupEventListeners, renderProjectsList, renderProjectPage}

