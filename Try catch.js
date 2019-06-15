function printNameUp(obj){
    try{
        console.log(obj.name.toUpperCase());
    }    
    catch (erro){
        console.log('[catch]');
        throw '[throw]: Error... ' + erro.name;
    }
    finally{
        console.log('[finally]');
    }
   
    console.log('[Fora do try]');
}

printNameUp({nome: 'Jailson'});