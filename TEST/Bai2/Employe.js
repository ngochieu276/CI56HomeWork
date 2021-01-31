class Employe {
  constructor(name, taskList) {
    this.name = name;
    this.taskList = taskList;
  }

  displayInfor() {
    console.log(this.name);
  }
}

export default Employe;

console.log("hello");
