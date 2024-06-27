var fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
});


var data = fs.readFileSync('welcome.txt');
console.log(data.toString());

