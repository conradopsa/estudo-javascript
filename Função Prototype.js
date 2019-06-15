Number.prototype.entre = function(x, y){
    return this >= x && this <= y;
}

if ((10).entre(11,15))
    console.log("Sim!");
else
    console.log("Não!");