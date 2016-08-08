class Task {
  done: boolean;
  constructor(public description: string, public priority: string){
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }
  markDone(){
    this.done = true;
  }
}

var tasks: task[] = [];
tasks.push(new Task("do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low"));
tasks.push(new Task("Wash the laundry.", "High"));
tasks[0].markDone();
console.log(tasks);
