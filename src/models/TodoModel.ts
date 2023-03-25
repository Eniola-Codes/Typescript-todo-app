class TodoModel {
    text : string;
    id : string;

    constructor(todotext : string ){
        this.text = todotext;
        this.id = new Date().toISOString();
    }
}

export default TodoModel;