class Project {
    constructor(title){
        this.id = crypto.randomUUID(),
        this.title = title
    }

    set title(newTitle){
        this._title = newTitle
    }

    get title(){
        return this._title
    }

}

export {Project}