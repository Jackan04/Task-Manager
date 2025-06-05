class Task {
    
    constructor(title, notes, date, projectId){
        this.id = crypto.randomUUID(),
        this.title = title,
        this.notes = notes,
        this.isCompleted = false,
        this.date = date,
        this.projectId = projectId
    }

    set title(newTitle){
        this._title = newTitle
    }

    get title(){
        return this._title
    }

    set notes(newNotes){
        this._notes = newNotes
    }

    get notes(){
        return this._notes
    }

    set date(newDate){
        this._date = newDate
    }

    get date(){
        return this._date
    }


}

export default Task