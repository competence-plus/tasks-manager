const READ_ME_SHEET_NAME = "ReadMe";
const PM_SHEET_NAME = "Summary";

function test(){
  console.log(getSheetsData())
}



function getSheetsData() {

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheets = ss.getSheets();
  let outputArr = [];
  let sheetsMembersNames = ["1","2","3","4","5","6","7","8","10"]
  let columnsNames = ["Id","Taches"]
  outputArr.push(columnsNames);


  for (let sheetMemberName in sheetsMembersNames) {


    let sheet = ss.getSheetByName(sheetMemberName);


    // // if (sheetNm === READ_ME_SHEET_NAME || sheetNm === PM_SHEET_NAME) { continue; }

    // Gets sheets data.
    let values = sheet.getDataRange().getValues();

    // // Gets the first row of the sheet which is the header row.
    // let headerRowValues = values[0];

    
    // // Finds the columns with the heading names 'Owner Name' and 'Status' and gets the index value of each.
    // // Using 'indexOf()' to get the position of each column prevents the script from breaking if the columns change positions in a sheet.
    // let columnOwner = headerRowValues.indexOf("Membre");
    // let columnStatus = headerRowValues.indexOf("Etat");


    // Removes header row.
    values.splice(0,1);
    
   

    // // Gets the 'Owner Name' column value by retrieving the first data row in the array.
    // let owner = values[0][columnOwner];

    // // Counts the total number of tasks.
    // let taskCnt = values.length;

    // // Counts the number of tasks that have the 'Complete' status.
    // // If the options you want to count in your spreadsheet differ, update the strings below to match the text of each option.
    // // To add more options, copy the line below and update the string to the new text.
    // let completeCnt = filterByPosition(values,'Complete', columnStatus).length;
    // // Counts the number of tasks that have the 'In-Progress' status.
    // let inProgressCnt = filterByPosition(values,'In-Progress', columnStatus).length;
    // // Counts the number of tasks that have the 'Scheduled' status.
    // let scheduledCnt = filterByPosition(values,'Scheduled', columnStatus).length;
    // // Counts the number of tasks that have the 'Overdue' status.
    // let overdueCnt = filterByPosition(values,'Overdue', columnStatus).length;
    // // Builds the output array.

    outputArr.push(...values)


    // outputArr.push([owner,taskCnt,completeCnt,inProgressCnt,scheduledCnt,overdueCnt,sheetNm]);
  }
  // Writes the output array.
  return outputArr;
}

/**
 * Below is a helper function that filters a 2-dimenstional array.
 */
function filterByPosition(array, find, position) {
  return array.filter(innerArray => innerArray[position] === find);
}
