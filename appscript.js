function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.respondentName,
    data.respondentEmail,
    data.respondentPhone,
    data.childAge,
    data.timeline,
    data.currentCare,
    data.currentCareOther,
    data.mainConcern,
    data.mainConcernOther,
    (data.programPrefs || []).join(", "),
    data.schedule,
    data.priceRange,
    data.pricingModel,
    data.interest,
    data.comments,
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
