function contador(){
    this.cont = 0;

    setInterval(() => {
                    //O this em Arrow Function não varia de acordo com quem chama
                    this.cont++;
                    console.log(this.cont);
                 }, 1000);

}

contador();