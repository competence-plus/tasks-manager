function debug(){
  CopyData()
  // createMemberTaskManagerIfNotExist()


}


function CopyData(){
  let ss = SpreadsheetApp.getActive();
  let tasks = ss.getSheetByName("Tâches-cnmh").getDataRange().getValues();
  tasks.shift();

  let membersArray = [];
  let members = ss.getSheetByName("Membres").getDataRange().getValues();
  members.shift();
  // members = members.splice(1,2);

  for(member of members){

    var fullName = member[2] + " " + member[3];
    var memberSheetName = member[0];
    let memberSheet = ss.getSheetByName(memberSheetName);
    if(memberSheet.getLastRow() > 1)
      memberSheet.getRange(2,1,memberSheet.getLastRow() -1, memberSheet.getLastColumn()).clearContent();

    for(let taks of tasks ){
      let row = [];
      
      if(fullName != taks[2]) continue;

      // Question	Tache	RemarquesChefProjet	Etat	Livrable	DateDebut	DateFin	Phase	References	Remarques	Id	IdQuestion				
      row[0] = taks[8];
      row[1] = taks[1]
      row[2] = taks[11];
      row[3] = taks[3];
      row[4] = taks[4];
      row[5] = taks[5];
      row[6] = taks[6];
      row[7] = taks[7]; // Phase
      row[8] = taks[9];
      row[9] = taks[10];
      row[10] = taks[0];
      row[11] = "";
   

  
      memberSheet.appendRow(row);
  }


  }

  
}



/**
 * Création des feuille de gestion pour chaque membre
 */
function createMemberTaskManagerIfNotExist(){
  let ss = SpreadsheetApp.getActive();
  let members = ss.getSheetByName("Membres").getDataRange().getValues();
  members.shift();
  // members = members.slice(0,3);
  for( let member of members){
    let fullName = member[2] + " " + member[3];

    copyTemplateToSheet("Template-Tâches",member[0],member[6],fullName )
  }
}


function copyTemplateToSheet(sheetSourceName,sheetDestinationName,memberEmail,fullName) {
  
  AfficherToast("Création de feuille de gestion pour : " + fullName)
  
  let ss = SpreadsheetApp.getActiveSpreadsheet();

  let sheetSource = ss.getSheetByName(sheetSourceName);
  let sheetDestination = ss.getSheetByName(sheetDestinationName);

  // init source 
  sheetSource.getRange(1,2).setValue("Tâche - " + fullName);
  let sourceDataRange = sheetSource.getDataRange()
  if(sourceDataRange.getNumRows() > 1)
    sheetSource.getRange(2,1,sourceDataRange.getNumRows() - 1, sourceDataRange.getNumColumns()).clearContent();

  // if destination sheet exist
  if(sheetDestination){

    // copy data to template 
    let sheetDestinationValues = sheetDestination.getDataRange().getValues();
    sheetDestinationValues.shift();
    if(sheetDestinationValues.length > 0)
      sheetSource.getRange(2,1,sheetDestinationValues.length,sheetDestinationValues[0].length).setValues(sheetDestinationValues);

    // Delete destination
    ss.deleteSheet(sheetDestination);
  }

  // Copy 
  sheetDestination = sheetSource.copyTo(ss);
  sheetDestination.setName(sheetDestinationName);

  // Add protection
  var protection = sheetDestination.protect().setDescription(fullName);
  protection.removeEditors(protection.getEditors());
  protection.addEditors([memberEmail])

}


 