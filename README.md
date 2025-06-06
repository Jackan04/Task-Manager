# Task Manager
This project was developed as part of *The Odin Project Curriculum*. Link to the project: https://www.theodinproject.com/lessons/node-path-javascript-todo-list/project_submissions?page=1

It’s a simple, modern project management app built using vanilla JavaScript, HTML, and CSS.
All data is stored locally in your browser using localStorage, ensuring privacy and persistence across sessions.

## Features

- **Create Projects:** Organize your work into multiple projects.
- **Add Tasks:** Add tasks to any project, with title, notes, and due date. 
- **View task details:** Click on a task to see it's notes and due date
- **Mark Tasks as Complete:** Check off tasks as you finish them.
- **Delete Projects:** Remove a project and all its tasks.
- **Persistent Storage:** All data is saved in your browser (localStorage).
- **Responsive UI:** Clean, modern interface with sidebar navigation.

## Still to be implemented
Some planned features and improvements include:

- Add a welcome/ help message 
- Add sorting for completed tasks
- Add the option to hide completed tasks
- Add option to delete individual tasks
- Add a Today view
- Task indicators: Visual cues (e.g. icons or styling) to show when a task includes notes or a due date.
- Icons: Add consistent iconography across the app to improve usability and visual design.


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2. Install dependencies

This project uses only vanilla JS, HTML, and CSS.  
If you want to use a bundler (like webpack), install dependencies:

```bash
npm install
```

### 3. Run the app

You can open `index.html` directly in your browser, or use a local server:

```bash
# With Python 3
python -m http.server

# Or use VS Code Live Server extension
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Project Structure

```
src/
  modules/
    task.js
    project.js
    taskManager.js
    storage.js
    ui.js
  styles.css
  index.js
index.html
```

- **modules/**: All app logic (tasks, projects, storage, UI)
- **styles.css**: App styling
- **index.js**: App entry point

*Designed and built by Jacob Asker*
