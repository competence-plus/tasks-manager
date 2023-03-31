class MembresTachesDAO extends BaseDAO{    
 
  constructor() {
    super();
    this.sheetName = "Tâches-cnmh";
    this.initTamotsu();
    this.Entity = MembreTache;
    this.toStringColumnsNames = ["MembreToString","QuestionToString","PhaseToString","ProjetToString","ToString"];
  }

  findAllByIdProjet(idProjet){
    var data;
    let rowsObjects = this.table.where({IdProjet: idProjet}).all();
    data = rowsObjects.map( rowObject => {
       return new this.Entity(rowObject)
    })
    return data;
  }


}