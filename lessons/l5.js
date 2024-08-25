function Pet(t,n,v) {
    //this={}
    this.type=t;
    this.name=n;
    this.voice=v;
    
    //return this
}

class Pet{
    kind='Питомец';
    constructor(t,n,v){
        this.type=t;
        this.name=n;
        this.voice=v;
    }
    say(){
        return `${this.type} ${this.name} ${this.voice}!!!`;
    }
}
let cat = new Pet('Кошка','Мурка','Мяу');
let dog = new Pet('Собака','Шарик','Гав-Гав');
