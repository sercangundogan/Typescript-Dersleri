// Class gibi düşünülebilir. 
// Fakat parametrelerinin verilmesi obje ile gerçekleşir.
// Interface ile class arasındaki fark,
// Interfaceler'de tüm parametreler verilmek zorundadır.

interface Product{
    id : number;
    name : string;
    unitPrice : number;

}

function save(product:Product){
    console.log(product.name + " kaydedildi!")
}

// Parametre verilirken obje kullanılır.
save({id:1, name:"Laptop", unitPrice:10 })

// Fakat bu class olarak da yazılabilir.
class Product2 {
    id: number;
    name: string;
    unitPrice: number;
}

function save2(product2:Product2){
    console.log(product2.name + " kaydedildi!")
}


let mouse = new Product2();
mouse.name="ATech";

save2(mouse)




interface PersonService{
    save();
}

class CustomerService /* extends yerine*/ implements PersonService{
    constructor(parameters){

    }
    save() {
    }
}

