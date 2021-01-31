import Employe from './Employe';

class Developer extends Employe {
 constructor(name,taskList) {
  super(name,taskList);
  this.type = "Developer"
 }
}