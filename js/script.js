// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue(
  {
    el: '#root',
    data: {
      message: 'Hello World !',
      classColor: 'red',
    },
    methods: {
      colorChange: function() {

        if (this.classColor = "red") {
          this.classColor = "blue";
        }
        else if (this.classColor = "blue") {
          this.classColor = "yellow";
        } else {
          this.classColor = "red";
        }
      }
    }
  }
);
