import { createNewProject } from "./taskManager"

const body = document.querySelector("body")
let currentProject = ""



function renderProjectPage(projectTitle, projectId){

}

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
        buttonCloseForm.setAttribute("class", "color-danger")
        buttonAddProject.setAttribute("class", "color-success")

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
        })
    

}

function renderProjectList(){
        projects.forEach(project => {
        const listItem = document.createElement("li")
        listItem.textContent = project.title
        projectList.appendChild(listItem)
    });
}



function setupEventListeners(){
    
    const buttonAddNewProject = document.querySelector("#btn-new-project")
    buttonAddNewProject.addEventListener("click", () =>{
        renderNewProjectForm()
    })
    
   
 

}

export {setupEventListeners}

