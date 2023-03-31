function test(){
  let entity = { DateDebut: '',
  References: 'aa',
  IdPhaseProjet: null,
  ProjetToString: '',
  IdQuestion: 28,
  Remarques: 'bb',
  IdProjet: 2,
  Membre: "Ben ayad Aicha",
  Id: null,
  Tache: 'cc',
  DateFin: '',
  Etat: 'Terminée',
  Livrable: 'dd' }
  SaveEntityRowGmView(entity);


}
function InitApp(){
  AfficherToast("showSidebar");
  showSidebar();
}



function onOpen(){
  AfficherToast("Creation de menu");
  // createMenu();
}



function createMenu(){
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createMenu('Gestion de projet');
  menu.addItem('Ajouter une tâche', 'AjouterTache');
  menu.addToUi();
}


  /**
   * Create Template for Form to be evaluated
   * @param entity The value of Entity to be updated or added
   */
  function getEntityFormTemplate(entity){
    let entityForm = "5.Views/TacheForm";
    let idProjet = 2;
    let questions = new QuestionsBL().findByIdProjet(idProjet);
    let phasesProjet = new PhasesProjetsBL().findByIdProjet(idProjet);
    let membres = new MembresBL().findAll();

    let template = HtmlService.createTemplateFromFile(entityForm);
    template.jsonEntity = JSON.stringify(entity);
    template.questions = JSON.stringify(questions);
    template.phasesProjet = JSON.stringify(phasesProjet);
    template.membres = JSON.stringify(membres);
    template.idProjet = idProjet;
    return template;
  }



function showEntityForm(entity,title){
    let template = getEntityFormTemplate(entity);
    var form = HtmlService.createHtmlOutput(template.evaluate());
    let formWidth =  850;
    let formHeight = 500;
    form.setWidth(formWidth);
    form.setHeight(formHeight);
    SpreadsheetApp.getUi().showModalDialog(form,title);
  }


function AjouterTache(){
    let entityData = new TachesBO().newEntity();
    let modalTitle = "Ajouter une tâche "  
    this.showEntityForm(entityData,modalTitle);
}


/**
 * Enregistrer le formulaire 
 */
function SaveEntityRowGmView(entityRow){
    
    if(entityRow.DateDebut) entityRow.DateDebut = new Date(JSON.parse(entityRow.DateDebut)); 
    if(entityRow.DateFin) entityRow.DateFin = new Date(JSON.parse(entityRow.DateFin)); 

    console.log("saveEntityRow 4");
    console.log(entityRow);
    new TachesBO(entityRow).saveEntityRow(entityRow);
}



// function showSidebar() {
//   var html = HtmlService.createHtmlOutputFromFile('menuPrincipale')
//       .setTitle('Admin');
//   SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
//       .showSidebar(html);
// }
// function gestionMembresMenuItem(){
//   InitViewManager("Membre")
// }


 

// function drawinLab(){
//   var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
// // for (var i = 0; i < drawings.length; i++) {
// //   Logger.log(drawings[i].getOnAction());
// // }

  
//     for (var i = 0; i < drawings.length; i++) {
//         const drawing = drawings[i];
//         if (drawing.getOnAction() === "GenericManagerAfficherData") {
//             drawing.setWidth(40);
//             drawing.setHeight(40);
//             break;
//         }
//     }



// }


