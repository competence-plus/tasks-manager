class PhasesProjetsBL extends BaseBL{    

  constructor() {
    super();
    this.Dao = new PhasesProjetsDAO();
    this.Entity = PhaseProjet;
  }

  findByIdProjet(idProjet){
    return this.Dao.findByIdProjet(idProjet);
  }

}