const SuperBowl = require("../models/SuperBowl");
const csvToJson = require("csvtojson");
const fs = require("fs");
let fileInputName = "./db/csv/halftime_musicians.csv";
let fileOutputName = "halftime_musicians.json";

csvToJson()
  .fromFile(fileInputName)
  .then(jsonObj => {
    fs.writeFile(fileOutputName, jsonObj);
  });
