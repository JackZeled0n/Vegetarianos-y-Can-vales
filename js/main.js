var arrayBarco = [];
var derecha = [];
var izquierda = ["c","c","v","v"];
var bBarco = 0;
var app = playground({

    width: 1366,
    height: 630,

    create: function() {
        this.loadImage("vegetariano1");
        this.loadImage("vegetariano2");
        this.loadImage("canival");
        this.loadImage("canival");
        this.loadImage("barco2"); 
        this.loadImage("cesped");
        this.loadImage("luna");
        this.loadImage("nube");
        this.loadImage("volcan");
        this.loadImage("isla");
        this.movimiento = {
            x:290,
            y: 465,
            speed: 100
        };
    },

    step: function(dt) {
        
        console.log(this.movimiento.x);
        if(bBarco == 1 && this.movimiento.x < 730) {
            console.log("entro");
            this.movimiento.x += this.movimiento.speed * dt;    
            
        } else {
            this.movimiento.x = 730;
        }
    },

    keydown: function(event) {

        if(arrayBarco.length < 2) {
            if (event.key === "c" || event.key === "C"){
                this.text = "Has seleccionado un canival," + event.key;    /* Tecla presionada */
                for (var j = 0; j < izquierda.length; j ++) {
                    if (izquierda[j] === "c" || izquierda[j] === "C") {
                        // var salidac = izquierda.pop(j);
                        var salidac = izquierda.splice(j, 1);                        
                        break;
                    }
                }
                arrayBarco.unshift(salidac);         
            }

            if (event.key === "v" || event.key === "V"){            
                this.text = "Has seleccionado un vegetariano," + event.key;    /* Tecla presionada */
                for (var j = 0; j < izquierda.length; j ++) {
                    if (izquierda[j] === "v" || izquierda[j] === "V") {
                        // var salidav = izquierda.pop(j);
                        var salidav = izquierda.splice(j, 1);
                        break;
                    }
                }
                arrayBarco.unshift(salidav);         
            }
        }        
    },

    keyup: function(event) {                    
    },

    render: function(){//dt) {
  
        var movimiento = this.movimiento;
        this.layer
        .clear("#091523")
        .font("32px Arial")      
        .fillStyle("#fff")
        .fillText(this.text, 16, 32);
        
        // Volcan
        this.layer.drawImage(this.images.volcan, 0, 150)        
        // Agua
        this.layer.fillStyle("#65B5CB");
        this.layer.fillRect(0, 520, 2000, 204);
    
        // imagenes
        this.layer.drawImage(this.images.nube, 1130, 15)
        this.layer.drawImage(this.images.luna, 1050, 50)
        this.layer.drawImage(this.images.nube, 50, 50)        
        this.layer.drawImage(this.images.nube, 280, 70)
        this.layer.drawImage(this.images.nube, 500, 40)
        this.layer.drawImage(this.images.nube, 780, 90)
        this.layer.drawImage(this.images.isla, 1210, 290)        
        this.layer.drawImage(this.images.cesped, 0, 440)
        this.layer.drawImage(this.images.cesped, 0, 480)
        this.layer.drawImage(this.images.cesped, 0, 520)
        this.layer.drawImage(this.images.cesped, 0, 540)
        this.layer.drawImage(this.images.cesped, 1050, 440)
        this.layer.drawImage(this.images.cesped, 1050, 480)
        this.layer.drawImage(this.images.cesped, 1050, 520)
        this.layer.drawImage(this.images.cesped, 1050, 540)
        this.layer.drawImage(this.images.vegetariano1, 50, 400)
        this.layer.drawImage(this.images.vegetariano2, 120, 400)
        this.layer.drawImage(this.images.canival, 190, 400)
        this.layer.drawImage(this.images.canival, 260, 400)

        
        if (movimiento.x == 730 && arrayBarco.length == 2) {  // El barco esta en la parte derecha
            
            this.layer.drawImage(this.images.barco2, 730, 465)
            // agregar elementos a la derecha
            for (var k=0; k < arrayBarco.length; k++) {
                if(derecha.length > 3) {
                    break;
                } else {
                    derecha.push(arrayBarco.pop());
                }
                
            }
                        
        } else {   // El barco esta en la parte izquierda
            
            if(arrayBarco.length == 2 ) {//&& izquierda.length > 3){
                this.layer.drawImage(this.images.barco2, movimiento.x, movimiento.y)
            }            
            
        }
        // if (arrayBarco.length == 0) {
            
        // } else if (arrayBarco.length % 2==0){
            
        // }
  
    },

});

