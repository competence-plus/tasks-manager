class MembreTache extends Entity{    

  constructor(object) {
    super(object);
    if(!object){
      this.Id = ""
      this.IdProjet = ""
      this.Question = ""
      this.Phase = ""
      this.Membre = ""

      this.Tache = "";
      this.References = "";
      this.Remarques = "";
      this.RemarquesChefProjet = "";
      
      this.Livrable = "";
      this.Etat = "";
      this.DateDebut = "";
      this.DateFin = "";

      this.DateCreation = new Date();
      this.DateModification = new Date();

      this.MembreToString = "";
      this.QuestionToString = "";
      this.PhaseToString = "";
      this.ProjetToString = "";
      this.ToString = "";
    }else{

      this.Id = object.Id;
      this.IdProjet = object.IdProjet;
      this.Question = object.Question;
      this.Phase = object.Phase;
      this.Membre = object.Membre;


      this.Tache = object.Tache;
      this.References = object.References;
      this.Remarques = object.Remarques;
      this.RemarquesChefProjet = object.RemarquesChefProjet;

      this.Livrable = object.Livrable;
      this.Etat = object.Etat;
      this.DateDebut = object.DateDebut;
      this.DateFin = object.DateFin;


      this.MembreToString = object.MembreToString;
      this.QuestionToString = object.QuestionToString;
      this.PhaseToString = object.PhaseToString;
      this.ProjetToString = object.ProjetToString;
      this.ToString = object.ToString;

    }


  }

  toString() {
    return this.Tache;
  }
 

}