var Persona = {edad:32,nombre:'bruno'};
//console.log(Persona);

function persona(nombre,edad){
this.age=edad;
this.name=nombre;
this.saludar=function(){
console.log('hola, mi nombre es', nombre, 'y tengo', edad, 'años');
}
return this;
}
var Persona = new persona("jose de san martin",42);
Persona.saludar();
