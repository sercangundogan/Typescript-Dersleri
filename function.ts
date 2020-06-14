// Javascript fonksiyonu. Burada x, y herhangi bir değeri alabilir ve sıkıntılı bir durumdur bu.
// function topla(x,y){
//     return x+y
// }



// Burada x ve y number değer almak zorunda
// Aynı zamanda fonksiyonda number bir değer döner.
function topla(x:  number, y: number): number{
    return x+y
}


// Anonim Fonksiyon
let topla2 = function(x: number, y:number):number {
    return x+y
}



// Default Parameter - 1. Kullanım(Değer verilmezse y=4)
let topla3 = function(x:number, y:number=4):number{
    return x+y
}
// Default Parameter - 2. Kullanım (Y'yi vermesen de olur.)
// Fakat burda y parametre olarak gelmezse, undefined olur.
// // Şuanda sonuç NaN çıkar yani y verilmezse sıkıntı
// let topla4 = function(x:number, y?:number ):number{
//     return x+y
// }

// O yüzden if kontrolü mutlaka yapılmalıdır.
let topla4 = function(x:number, y?:number ):number{
    // y varsa, y undefined değil, y parametre olarak girilmişse kontrolü
    if(y){
        return x+y
    }
    return x
}


// Aynı zamanda soru işaretli parametre her zaman sonda olmalıdır.
// Yoksa hangi değerin verilip verilmediği anlaşılamaz.




// REST PARAMETER
// Davet edilecek kişi sayısını bilmiyorsun ama en az 1 tane kişi davet etmek gerekir.
// Bu gibi durumda bir tane kisi kesin gelmis olur ve digerlerini string array ile sağlamış oluyoruz.
function davetEt(ilkDavetli:string, ...digerleri:string[]):string{
    return ilkDavetli + digerleri
}

// Eğer kimseyi davet etmeme şansımız da varsa;
function davetEt2(...davetliler:string[]):string{
    return davetliler.join(" ");
}



