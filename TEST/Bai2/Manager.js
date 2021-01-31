import Employe from "./Employe";

import Employe from "./Employe";
class Manager extends Employe {
  constructor(name, taskList, list_to_Manager) {
    super(name, taskList);
    this.listToManager = list_to_Manager;
    this.type = "Manager";
  }

  addEmployee(employee) {
    this.listToManager.push(employee);
  }
}
