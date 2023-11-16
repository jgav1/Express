var fs = require("fs");
/* //Sincrono
var data = fs.readFileSync("./package-lock.json", "utf8");
console.log(data);
*/
//Asincrono
 /*
fs.readFile("./package.json", "utf8", function(err, data){
    console.log(data);
})

console.log("Hola saludos a todos!");
*/

//Escritura Asincrona
/*
fs.writeFile("./output.txt", "Hola a todos!", function(err){
    if(err){
        console.log("Err: " + err);
    }
    console.log("Se completó la escritura!");
})

console.log("Hola saludos a todos!");
*/
/*
fs.stat("./package.json", function(err,stats){
    if(err) throw err;

    console.log(stats);
    console.log(" el archivo tiene las siguientes estadisticas " + stats.isFile());
})

*/

// creacion de directorios
/*
fs.mkdir("./documentos", "0666", function(err){
    if(err) throw err;
    console.log("Cree un folder llamado documentos");

    
}) */

fs.rmdir("./documentos", function(err) {
    if(err) throw err;
    console.log("El folder Documentos, fue borrado");
})