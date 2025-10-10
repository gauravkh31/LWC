import { LightningElement } from 'lwc';

export default class ToDoApplication extends LightningElement {
    taskname = "";
    taskdate = null;
    incompletetask = [];
    completetask = [];


    changeHandler(event) {
       let {name,value} = event.target;
       if(name === 'taskname'){

        this.taskname = value;


    }else if(name === 'taskdate'){

this.taskdate = value;


    }
}

resetHandler(event){
    this.taskname = "";
    this.taskdate = null;
}



addTaskHandler(event){
// if enddate is missing then today date is end date
    if(!this.taskdate){
this.taskdate = new Date().toISOString().slice(0,10);
}

if(this.validateTask()){
this.incompletetask = [...this.incompletetask,{
    taskname : this.taskname,
    taskdate : this.taskdate
}]

}
}

validateTask(){

    
    let isValid = true;
    if(!this.taskname){
        // check if task is empty
        isValid = false;
    }else{

        // check if array is containing the same task already, if it do have , it will return task item if not found, it will return undeffined 
        let taskitem = this.iscompletetask.find(currItem => currItem.taskname === this.taskname && currItem.taskdate === this.taskdate)

        if(taskitem){
            isValid = false;
        } 
    }
}

}f


// 29 minutes