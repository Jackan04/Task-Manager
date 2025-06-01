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

        buttonAddProject.textContent = "Add"
        inputTitle.placeholder = "Write title here"

        form.setAttribute("id", "newProjectForm")
        inputTitle.setAttribute("id", "inputProjectTitle")
        buttonAddProject.setAttribute("id", "buttonAddProject")
        buttonAddProject.setAttribute("class", "button-success")

        formContent.appendChild(inputTitle)
        formContent.appendChild(buttonAddProject)

        form.appendChild(formContent)
        body.appendChild(form)
        form.showModal()

}


function setupEventListeners(){
    const buttonAddNewProject = document.querySelector("#btn-new-project")

    buttonAddNewProject.addEventListener("click", () =>{
        renderNewProjectForm()
    })
 

}

export {setupEventListeners}

