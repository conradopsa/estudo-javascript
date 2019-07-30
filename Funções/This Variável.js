/* O this pode se apresentar de diversas formas,
   uma boa prática para descobrir sua identidade é
   fazendo um: console.log(this); */

console.log('this eh', this);
console.log(this === module.exports);

//Na arrow function, o this se apresenta como o module.exports
let arrowF = () => console.log('this eh ', this);
arrowF();

//Na function tradicional, o this se apresenta como global
let f = function() {
            console.log(this === global);
            console.log('this eh ', this);
        };
f();


//Na classe, o this é o próprio objeto
class Cl{
    name;
    
    printThis = function(){
        console.log('this eh ', this);
    }

    printThisName = function(){
        console.log('this.name eh', this.name);
    }
}

let cl = new Cl;
cl.name = 'teste';

cl.printThis();
cl.printThisName();