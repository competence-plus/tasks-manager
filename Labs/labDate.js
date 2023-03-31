function labDate() {

  let dateValue = new Date();
  let dateStringify = JSON.stringify(dateValue);
  let dateAfterParse = JSON.parse(dateStringify);
  let dateFromString = new Date(dateAfterParse);
  let date2 = new Date("2023-03-20T00:00:00.000Z");
}
