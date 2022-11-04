let car = {
    brand : "Toyota",
    variant : "Wigo",
    Transmission : "Automatic", 
    Lights : { 
        Front : "LED",
        Rear : "LED/Bulb",
        Signal : "Bulb"

    },


    

    // How to create an object

     displayBrand(){
     alert(this.brand);
     document.writeline(this.Transmission);
    }
}

class myCar {
    constructor (brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}

//Abstraction

