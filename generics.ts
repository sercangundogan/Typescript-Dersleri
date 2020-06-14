// Farklı tiplerle aynı işlemi yapmak için kullanılır.
function deger(x: number): Number {
  return x;
}

let sayi = deger(10);
console.log(sayi)



function deger2(x: string): string {
    return x;
}

let sayi2 = deger2("Ankara");
console.log(sayi2)



// Aynı işlemi yapıyoruz sadece tipler farklı;
// T, type'dan geldiği için genelde o kullanılır.
function deger3<T>(x:T):T{
    return x
}

let sayi3 = deger3<number>(3)
// let sehir3 = deger3<string>(3) -> Hata
let sehir3 = deger3<string>("Ankara")


// Generic Class 
class GenericClass<T>{
    degisken: T
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()
// sinif.degisken -> Number
let sinif2 = new GenericClass<string>()
// sinif2.fonksiyon("Ankara") -> String