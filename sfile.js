var fs = require("fs");
var csv2array = require('csv2array');

var wholeFile = fs.readFileSync('democsvfile.csv','utf8');
var data=csv2array(wholeFile);

var head=data[0];
var rows=data.length;
var cols=head.length;

var arr=[];
var i=0,j=0;

for(i=1;i<rows;i=i+1)
{
 var obj={};
 var abc=data[i];
 //console.log(abc);
 for(j=0;j<cols;j++)
 {
   var header=head[j].substring(0,head[j].length);
   var value= abc[j].substring(0,abc[j].length);
   obj[header]=value;
 };
 if((obj.Age==22)&&(obj.Age==25))
 {

   arr.push(obj);
   console.log(obj);
 }

 // if((obj.Description=="OVER $500") || (obj.Description=="$500 AND UNDER"))
 // {
 // arr.push(obj["Primary"+" "+"Type"]);
 // arr.push(obj.Description);
 // arr.push(obj.Year);

 //fs.writeFile('./write.json', JSON.stringify(arr) , 'utf-8');
 //}

};

console.log(arr);
//console.log(arr);
console.log("file Writing done");
