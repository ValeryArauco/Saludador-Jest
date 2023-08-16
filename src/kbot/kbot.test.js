const Kbot = require("./Kbot");

/*console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");*/

// describe("Saludar por idioma", () => {
//     it("deberia Saludar a Andrés en idioma default", () => {
//         let kbot = new Kbot();
//         let resultado = kbot.saludar("Andrés") 
//         expect(resultado).toEqual("Buenos días Andrés");
//     });

//     it("Saludar a Andrés en espanol por la tarde", () => {
//         let kbot = new Kbot("ES");
//         let resultado = kbot.saludar("Andrés", 14)
//         expect(resultado).toEqual("Buenas tardes Andrés");
//     });

    
//   });
  
describe("Saludar por nombre", () => {
    it("deberia Saludar a Andrés ", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 7) 
        expect(resultado).toEqual("Buenos días Andrés");
    });

    
});

describe("Saludar tomando en cuenta la hora en idioma defaut", () => {
    it("deberia Saludar a Andrés en la mañana ", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 7) 
        expect(resultado).toEqual("Buenos días Andrés");
    });

    it("deberia Saludar a Andrés en la tarde", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 15) 
        expect(resultado).toEqual("Buenas tardes Andrés");
    });

    it("deberia Saludar a Andrés en la noche", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 21) 
        expect(resultado).toEqual("Buenas noches Andrés");
    });
});

describe("Saludar tomando en cuenta la hora y por idioma ingles", () => {
    it("deberia Saludar a Andrés en la mañana en español ", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 7) 
        expect(resultado).toEqual("Buenos días Andrés");
    });

    it("deberia Saludar a Andrés en la tarde en español", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 15) 
        expect(resultado).toEqual("Buenas tardes Andrés");
    });

    it("deberia Saludar a Andrés en la noche en español", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 21) 
        expect(resultado).toEqual("Buenas noches Andrés");
    });


    it("deberia Saludar a Andrés en la mañana en ingles ", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 7) 
        expect(resultado).toEqual("Good morning Andrés");
    });

    it("deberia Saludar a Andrés en la tarde en ingles", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 15) 
        expect(resultado).toEqual("Good afternoon Andrés");
    });

    it("deberia Saludar a Andrés en la noche en ingles", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 21) 
        expect(resultado).toEqual("Good evening Andrés");
   });
});