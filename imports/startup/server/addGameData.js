import { Meteor } from "meteor/meteor";
// import { Cities } from "../../api/cities";
// import { Offices } from "../../api/offices";
// import { Items } from "../../api/items";
// import { Badges } from "../../api/badges";
// import { Surveys } from "../../api/surveys";

// function createCity(citySpecs) {
//   citySpecs["smallImage"] = "/YourCitySmall/" + citySpecs["city"] + ".jpg";
//   citySpecs["bannerImage"] = "/YourCityPanorama/" + citySpecs["city"] + ".jpg";
//   return citySpecs;
// }
//
// function createOffice(officeSpecs) {
//   officeSpecs["smallImage"] =
//     "/YourOfficeSmall/" + officeSpecs["office"] + "_Small.jpg";
//   officeSpecs["bannerImage"] = "/YourOffice/" + officeSpecs["office"] + ".jpg";
//   return officeSpecs;
// }
//
// function createBadge(badgeSpecs) {
//   badgeSpecs["url"] = "/Badges/" + badgeSpecs["name"] + ".png";
//   return badgeSpecs;
// }
//
// export function addGameData() {
//   var GameData = JSON.parse(Assets.getText("gameData.json"));
//   GameData["cities"].forEach(city =>
//     Meteor.call("cities.insert", createCity(city))
//   );
//   GameData["offices"].forEach(office =>
//     Meteor.call("offices.insert", createOffice(office))
//   );
//   GameData["items"].forEach(item => Meteor.call("items.insert", item));
//   GameData["badges"].forEach(badge =>
//     Meteor.call("badges.insert", createBadge(badge))
//   );
//   GameData["training"].forEach(training =>
//     Meteor.call("training.insert", training)
//   );
// }
//
// export function addSurveyData() {
//   var SurveysData = JSON.parse(Assets.getText("surveys.json"));
//   SurveysData["surveys"].forEach(survey => {
//     Meteor.call("surveys.insert", survey);
//   });
// }
