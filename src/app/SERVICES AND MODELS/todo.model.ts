class Todo {
    _id : String;
    title : String;
    description : String;
    date : Date;
    status : String;
    
    constructor () {
        this.title = "";
        this.description = "";
        this.date = new Date();
        this.status = "";
    }
}

export default Todo;