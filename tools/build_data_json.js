var fs = require('fs');
var marked = require('marked');
var XLSX = require('xlsx');

marked.setOptions({
  smartypants: true
});

var SHEETS = [
  'QUOTES'
];

var DATA = {};

var workbook = XLSX.readFile('data.xlsx');

SHEETS.forEach(function(sheet) {
  'use strict';

  var worksheet = workbook.Sheets[sheet];
  // var test = XLSX.utils.sheet_to_json(worksheet);

  // test.forEach(function(e) {
  //   if (!e['Bio']) {
  //     return;
  //   }
  //   console.log(marked(e['Bio']));
  // });
  var data = XLSX.utils.sheet_to_json(worksheet);

  data.forEach(function(e) {
    if (!e.blurb) {
      return;
    }
    e.blurb = marked(e.blurb);

  });

  DATA[sheet] = data;
});

fs.writeFileSync('data.json', JSON.stringify(DATA, null, 2));
