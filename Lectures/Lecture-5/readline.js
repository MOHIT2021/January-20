
// node module
const readline = require("readline");
// interface
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "mohit>"
});

console.clear();
reader.prompt();
// 

// predefined => readline module
reader.on("line", function(data) {
  console.log("Did You Just said " + data);
  reader.prompt();
});

reader.on("close",function(){
  console.log("Thank You for using our cli");
})
