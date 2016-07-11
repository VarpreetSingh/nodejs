var fs = require("fs");
var data = fs.readFileSync('democsvfile.csv');
var stringData=data.toString();
console.log(stringData);
var arrayOne= stringData.split('\r\n');
//till here read the contents of the csv file and store it in a variable


var header=arrayOne[0].split(',');
var noOfRow=arrayOne.length;
var noOfCol=header.length;
var jArray=[];
var i=0,j=0;
//declare the required variables here to  be used and perform required operations.

for (i = 1; i < noOfRow-1; i++)
{
    var obj = {};
    var myNewLine=arrayOne[i].split(',');
    for (j = 0; j< noOfCol; j++) {
        var headerText = header[j].substring(0,header[j].length);
        var valueText = myNewLine[j].substring(0,myNewLine[j].length);
        obj[headerText] = valueText;
    };
    jArray.push(obj);
};
//the above for loop scans the entire arrayOne variable and read the data to display on console.

console.log( jArray);
//displat the data on the console.
