function selamVer(isim : string){
    return "Merhaba " + isim
}

let message  = selamVer("Sercan")

console.log(message);

// VERİ TİPLERİ

// Veri tiplerini belirlemek için : "type" şeklinde kullanım yapılır
// Number
let sayi:number
sayi = 10
sayi = 10.4
// String ifade yazdığımızı düşünürsek hata alırız.
// sayi="sercan"


// String
let sehir:string
sehir="Izmir"
sehir="Istanbul"
// Aynı şekilde hata aldık
// sehir=10


// Boolean
let dogruMu : boolean
dogruMu=true
dogruMu=false


// Direk atama da yapılabilir.
let sayi2 : number = 19
let sehir2 : string = "İzmir"


// Number Array
let sayilar : number[] = [1,2,3]
// veya
let sayilar2 : Array<number> = [1,2,3]

let dizi : [number,string] = [2, "Ankara"]
// dizi[0]
// dizi[1]


// MAGIC STRING
// Her yerde "Sercan" yazdığımızı düşünelim. Bunu değiştirmek istersek, yazdığımız
// her yeri değiştirmek zorunda kalırim. Bundan kurtulmak için kullanılır.
// enum aslında class mantığı gibi de düşünelibir.
enum Renk {Kirmizi = 1, Siyah, Mavi}
let renk : Renk = Renk.Kirmizi


// ANY
// Diyelim ki bir api'den dosya çekicez. Fakat dosyanın hangi tipte olduğunu
// bilmiyoruz. O zamanlar, herhangi bir tipte diyebiliriz.
let deger : any = "Ankara"
let deger2 : any = 29
let deger3 : any = {deger4: "deger4"}


// VOID
// Fonksiyonlarda kullanılır. Any'e benzer. Diyelimki bir fonksiyonumuz var
// ve bir değer dönüyor. Fakat bu döndüğü değerin type'ını belirtmek istemiyoruz.
// Dolayısıyla void herhangi bir type değerine sahip değildir.
// String değer, number değer verilemez. 
let deger4 : void = undefined

// Void Örnek - Bir değer dönmeyiz. Return kullanılmaz yani
function selamVer2(): void {
    console.log("Merhaba")
    // return 5
}


// Undefined - Null
let yas : number; // Undefined
yas = 10  //Undefined -> Defined hale geldi.

class Musteri{} // Buna ulaşmaya çalışırsak bu "null" dır. Yani herhangi bir referansı yoktur.


