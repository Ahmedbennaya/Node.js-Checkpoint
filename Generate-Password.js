const generator = require('generate-password');

let generatePassword= generator.generate({
    length:10,
    uppercase:true,
    lowercase:true,
    numbers:false
})

console.log(generatePassword)