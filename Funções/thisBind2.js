function contador(){
    this.cont = 0;

    thisCont = this;
    setInterval(function contar(){
                    thisCont.cont++;
                    console.log(thisCont.cont);
    }/*.bind(this)*/, 1000);

    /* Duas possíveis soluções são usar o bind ou 
    criar uma variável para referenciar o this */
}

contador();