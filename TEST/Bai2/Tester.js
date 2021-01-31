import Employe from "./Employe";

class Tester extends Employe {
  constructor(name, taskList) {
    super(name, taskList);
    this.type = "Tester";
  }
}
