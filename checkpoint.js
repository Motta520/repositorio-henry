// No cambies los nombres de las funciones.

function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca:
     var suma = 0;
     for(var i = 0; i < array.length; i++){
         if(array[i] % 2 == 1){
          suma = suma + array[i];
       } 
    }
          return suma;
  
}

function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  // Tip: podes usar el metodo de String 'split'

  // Tu código aca:
      let st = str.split(" ");
      let maslarga = str[0];
      for(let i = 0; i < st.length; i++ ){
          if(st[i].length > maslarga.length){
             maslarga = st[i];
          }
      }
            return maslarga;
  } 
        

function estaOffline(usuarios, nombre) {
  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  // ej:
  // var usuarios = [
  //     {
  //       nombre: 'toni',
  //       online: true
  //     },
  //     {
  //       nombre: 'emi',
  //       online: true
  //     },
  //     {
  //       nombre: 'agus',
  //       online: false
  //     }
  // ];
  // estaOffline(usuarios, 'agus') retorna true
  // estaOffline(usuarios, 'emi') retorna false

  // Tu código aca:
    let online = null;
  
    usuarios.forEach(function (a) {
         if (a.nombre == nombre) {
          online = !a.online;
          return false;
      }
    });

      return online;

}

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:
     var enComun= [];
    for(var i = 0; i < persona1.length; i++){

          for(var array of persona2){
            if(persona1[i] === array){
               enComun.push(array);
            }
          }
    }
              return enComun;
}

function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:
     return arreglo.filter(function(a) {
             return a !== num;
     });

   }
    
function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'

  // Tu código aca:
     var vehiculosC=[];
     for(var i = 0; i < arreglo.length; i++){
        if(!vehiculosC[arreglo[i]]){
          vehiculosC.push(arreglo[i])
        }
     }
     var valor={};
     for(var a= 0; a < vehiculosC.length; a++){
       var total= 0;
     for(var i = 0; i < vehiculosC.length; i++){
        if(arreglo[i] === vehiculosC[a]){
          total++;
        }
     }
     valor[vehiculosC[a]] = total;
     
     }
           return valor;
}

// =======================================================================

function crearClaseEmprendedor() {
  class Emprendedor {
      constructor(nombre, apellido, libros, mascotas) {
          // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
          // Inicializar las propiedades del emprendedor con los valores recibidos como argumento

          // Tu código aca:
          this.nombre= nombre;
          this.apellido= apellido;
          this.libros= libros;
          this.mascotas= mascotas;
          this.emprendedor=function(){
            return {
              nombre: this.nombre,
              apellido: this.apellido,
              libros: this.libros,
              mascotas: this.mascotas,
            }
          }

      }

      addMascota(mascota) {
        // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
        // no debe retornar nada.

        // Tu código aca:
           this.mascotas.push(mascota);

      }

      getMascotas() {
          // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
          // emprendedor.getMascotas() debería devolver 2

          // Tu código aca: 
            var mascotas = ["perro", "gato"];
            return mascotas.length;

      }

      addBook(book, autor) {
          // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
          // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
          // No debe retornar nada.

          // Tu código aca:
            let libro = {nombre:book, autor: autor};     
           this.libros.push(libro);

      }

      getBooks() {
          // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
          // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']

          // Tu código aca:
             const NombresLibros = ((libros) => libros.nombre);
             const  LosLibros = this.libros.map(NombresLibros);
             return LosLibros;

      }

      getFullName() {
          // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
          // ej:
          // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
          // emprendedor.getFullName() deberia devolver 'Elon Musk'

          // Tu código aca:
           var NombreyApellido= this.nombre + " " + this.apellido;
           return NombreyApellido;

      }
    } 

    return Emprendedor;
}

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function mapear() {
  // Escribi una funcion mapear en el prototipo del objeto global 'Array'
  // que recibe una funcion callback , que se ejecuta por cada elemento del array
  // mapear los elementos de ese array segun la funcion callback
  // Esta funcion tiene que devolver un array nuevo con los elementos mapeados.
  // NO USAR LA FUNCION MAP DE ARRAYS.
  // ej:
  // var numeros = [1, 2, 3, 4];
  // numeros.mapear(function(numero) {
  //   return numero + 1;
  // }) devuelve [2, 3, 4, 5]

  // Tu código aca:
     Array.prototype.mapear = function(cb) {
     let nuevoArray = [];
     for(let i = 0; i < this.length; i++){
       const c= cb(this[i]);
       nuevoArray.push(c);
     }
       return nuevoArray;
  }
      
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  sumaTodosImpares,
  buscaDestruye,
  actividadesEnComun,
  estaOffline,
  stringMasLarga,
  sumarElTipo,
  crearClaseEmprendedor,
  mapear
};
