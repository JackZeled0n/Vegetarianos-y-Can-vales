// var app = new PLAYGROUND.Application({
//     render: function() {
//         this.layer.clear("#000088");
    //     this.layer.fillStyle("#ffffff");
    //     this.layer.fillRect(32, 32, 64, 64);
    //     this.layer.fillCircle(600,600,500);
//     }
    
// });

// Cargar imagenes

// var app = playground({

//     create: function() {
  
//       this.loadImage("vegetariano1");
//       this.loadImage("vegetariano2");
//       this.loadImage("canival");
//       this.loadImage("canival");
//       this.loadImage("barco");      
//     },

  
//     ready: function() {
  
      
//     },
  
//     render: function() {
  
//       this.layer.clear("#65B5CB");
//       this.layer.drawImage(this.images.vegetariano1, 100, 300)
//       this.layer.drawImage(this.images.vegetariano2, 250, 290)
//       this.layer.drawImage(this.images.canival, 400, 350)
//       this.layer.drawImage(this.images.canival, 550, 350)
//       this.layer.drawImage(this.images.barco, 680, 440)
        
//     }
  
//   });

// Movimiento de figura geometrica

// app = playground({

//     create: function() {
  
//         this.loadImage("barco");
//         this.thomas = { 
//             x: 0, 
//             y: this.center.y, 
//             width: 32,
//             height: 64,
//             color: "#e2543e", 
//             speed: 100 
//         };
  
//     },
  
//     step: function(dt) {
  
//       this.thomas.x += this.thomas.speed * dt;    
  
//       if(this.thomas.x > this.width) this.thomas.x = -this.thomas.width;
  
//     },
  
//     render: function(dt) {
  
//       var thomas = this.thomas;
  
//       this.layer.clear("#000");
  
//       this.layer
//         .fillStyle(thomas.color)
//         .fillRect(thomas.x, thomas.y, thomas.width, thomas.height);
//         this.layer.drawImage(this.images.barco, 680, 440)
  
//     },
  
  
//   });

/* 
    Keymap del juego
    v: Vegetariano
    c: Canival 
    b: barco
*/

var app = playground({

    render: function() {
  
        this.layer
        .clear("#000")
        .font("32px Arial")      
        .fillStyle("#fff")
        .fillText(this.text, 16, 32);
  
    },

    keydown: function(event) {
    
        this.text = "Down " + event.key;    /* Tecla presionada */
        // if (this.keyboard.keys.v){ 
        if (event.key === "v" || event.key === "V"){
            // var lista = [];
            // if (this.keyboard.keys.v) {
                alert("v");
                console.log("v");
            // } else {
            //     alert("c");
            // }
            
        }

        if (this.keyboard.keys.c) 
        if (event.key === "c" || event.key === "C"){
            alert("c");
            console.log("c");
        }
    
    },
    
    // keyup: function(event) {
    
    //     this.text = "Up " + event.key;  /* Tecla no presionada, es decir la ultima tecla que presiono */        
    // },
  
    // mousemove: function(data) {
  
    //   this.text = "mouse move " + data.x +  " , " + data.y;    
  
    // },
  
    // mousedown: function(data) {
  
    //   this.text = "mouse down " + data.button + " " + data.x +  " , " + data.y;
  
    // },
  
    // mouseup: function(data) {
  
    //   this.text = "mouse up " + data.button + " " + data.x +  " , " + data.y;  
  
    // },

    
  
  
  });



  if (event.key === "v" || event.key === "V"){            
    this.text = "Has seleccionado un vegetariano," + event.key;    /* Tecla presionada */
    for (var j = 0; j < izquierda.length; j ++) {
        if (izquierda[j] === "v" || izquierda[j] === "V") {
            var salida = izquierda.pop(j);
            break;
        }
    }
    
    arrayBarco.unshift(salida);
}

if (event.key === "c" || event.key === "C"){
    this.text = "Has seleccionado un canival," + event.key;    /* Tecla presionada */
    for (var j = 0; j < izquierda.length; j ++) {
        if (izquierda[j] === "c" || izquierda[j] === "C") {
            var salida = izquierda.pop(j);
            break;
        }
    }
    arrayBarco.unshift(salida);
                
}

console.log(izquierda);