const Kbot = require("./Kbot");

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