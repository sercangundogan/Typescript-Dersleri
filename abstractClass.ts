// Bu konu Yazılımcılar tarafından bilinmek zorundadır.
// Mesela kredi çekecek müşteriler olsun. Bu müşteriler konut kredisi veya
// Tüketici kredisi çekebilir. Ama bu işler birbirinden ayrı işler.
// Ayrıca hepsi işlem sonunda kaydedilmek zorunda.
// O yüzden bir tane ana KrediBase class'ı açarız ve işleri birbirinden ayırmak
// için burada sadece kaydet işlemini yazarız, sonrasında işleme göre değişik 
// class'ları çalıştırırız.

// Yani bir tane class yazıp if Musteritipi==Tuketici ise böyle, değilse şöyle
// çalıştır gibi ifadelerden kaçınmış oluruz.
// Onu yaparsak spaghetti kod yazmış oluruz fakat bu şekilde ondan kurtuluruz.


abstract class KrediBase {
    constructor(){
        
    }
    kaydet():void{
        console.log("Kaydedildi")
    }

    abstract hesapla():void;
    
}


class TuketiciKredi extends KrediBase {
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı");
    }
}

class MortgageKredi extends KrediBase {
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı");
    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let mortgageKredisi = new MortgageKredi();
mortgageKredisi.hesapla();
mortgageKredisi.kaydet();



let kredi : KrediBase
kredi = new TuketiciKredi()

kredi = new MortgageKredi()

