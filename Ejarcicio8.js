function even(){    var i; i=0;
    for (let value of cuantosCumplen ){
        if (value%2==0) {
             i++;
        }
    }
   console.log(i);
}


even(cuantosCumplen=[2,4,3,4,5]);