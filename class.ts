// Nesne de diyebileceğimiz bir yapıdır aslında Class

// Class bir referans tiptir. Aynen Array'ler gibi.
// Yani bir classtan mesela Ev Class'ından üretmek için
// new Ev demek gerekir, yani bir örneğini oluşturmak denir aslında.
// O yüzden bu objelerin içine bir değer girilmezse null döner.

class Ev{
    // Özellikler
    odaSayisi : number;
    pencereSayisi : number;
    kat : number;

    // Yeni bir ev üretildiğinde "new Ev()"" gibi constructor yapısı çalışır
    constructor(odaSayisi:number, pencereSayisi:number, kat:number){
        // Fakat burdaki odaSayisi ile Yukarıdaki odaSayisi na ayrı ayrı nasıl ulaşıcaz?
        // İşte burada this kelimesi devreye giriyor.
        this.odaSayisi = odaSayisi
        this.pencereSayisi = pencereSayisi
        this.kat = kat
    }
    
    yemekYe(){
        console.log(this.kat + " katlı evde" + "Yemek Yiyildi")
    };
}

// Yeni bir ev oluşturmak 
let ev = new Ev(3, 4, 5)
// ev'in yemekYe adlı fonksiyon olan özelliğini kullanmak.
ev.yemekYe()




// INHERITANCE - MİRAS
// Kişi bir class olabilir. Aynı zamanda bir de personel veya müşteri olarak
// farklı bir class vardır. İşte burada personel aynı zamanda bir kişi olduğu 
// için Kişi class'ından miras alır aslında. Müşteri de aynı şekilde.

// Burada classları aynı dosyada yazacağız fakat normalde class'ların her biri farklı
// dosyalarda bulunur.

class Kisi{
    kaydet(){
        console.log("Kişi kaydedildi.")
    }
}


class Musteri extends Kisi{
    satisYap(){
        console.log("Satış Yapıldı")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş Ödendi")
    }
}

let musteri = new Musteri()
// Normalde müsteri class'ında kaydet'i kullanmadık fakat miras aldığımız
// için onu da kullanabiliyoruz.
musteri.kaydet();
musteri.satisYap();

let personel = new Personel()
personel.kaydet();
// personel.satisYap() -> Hata
personel.maasOde();



// PRIVATE PROTECTED PUBLIC - ERISIM BILDIRGECLERI

class Ev2{
    // Özellikler
    private odaSayisi : number;
    pencereSayisi : number;
    kat : number;

    // Yeni bir ev üretildiğinde "new Ev()"" gibi constructor yapısı çalışır
    constructor(odaSayisi:number, pencereSayisi:number, kat:number){
        // Fakat burdaki odaSayisi ile Yukarıdaki odaSayisi na ayrı ayrı nasıl ulaşıcaz?
        // İşte burada this kelimesi devreye giriyor.
        this.odaSayisi = odaSayisi
        this.pencereSayisi = pencereSayisi
        this.kat = kat
    }
    
    yemekYe(){
        console.log(this.kat + " katlı evde" + "Yemek Yiyildi")
    };
}


// odaSayisi'ni private yaparsak artık dışarıdan erişme sağlanamaz.
// Yani private, sadece tanımlandığı class içerisinde tanımlıdır
let ev2 = new Ev2(3,4,5)
// console.log(ev2.odaSayisi) -> Hata

class Kisi2{    
    private isim : string
    protected soyad : string
    public email : string
    kaydet(){
        console.log("Kişi kaydedildi.")
    }
}


class Musteri2 extends Kisi2{
    // Kisi2'deki private'leri de alamayız
    // isim -> Hata
    // this.isim -> Hata
    
    // this.soyad Hata

    soyad // Hata yok
    email // Hata yok
    
}


let musteri2 = new Musteri2();
musteri2.soyad
musteri2.email 

let kisi = new Kisi2()
// kisi.soyad Hata


// Getter ve Setter - Kapsülleme İşlemi
class Kisi3{
    // private olduğunda genelde _ kullanılır isimlerde.
    private _isim : string

    get isim() :string{
        return "Sayın: " + this._isim
    }
    
    set isim(ad: string){
        this._isim = ad
    }
}

let kisi3 = new Kisi3();
kisi3.isim = "Sercan" // Set'i çalıştırır.
console.log(kisi3.isim) // Get'i çalıştırır.


// ABSTRACT SINIFLAR