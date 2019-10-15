// code.gs
function doGet() {
  //var html = HtmlService.createTemplateFromFile("index").evaluate();
  //html.setTitle("Scoreboard");
  //.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  //return html; 
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
}

function getData(){
  var sheet = SpreadsheetApp.openById('1_5cbkF42CiiWC5PHiNVISFuhNHURSvcN16JnRtP1RlQ').getSheetByName('data_processed');
  //.getSheets()[0];
  var range = sheet.getDataRange().getLastRow();
  
  return sheet.getDataRange().getValues();



}

