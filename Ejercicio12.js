//Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
//El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
//El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.






class Persona{
    constructor(nombre, edad){
        this.nombre= nombre,
        this.edad= edad
    }
}


class Estudiante extends Persona{


    setProfesor(profesor){

    
    this.profesor = profesor;
    return profesor;
 
}



    estudiando(){
        
        return 'Estudiando con';

    }

}

const bruno = new Estudiante('bruno',20);


console.log(bruno.estudiando());
console.log(bruno.setProfesor('Jose'));