var arr = [1,2];

var Par = new Array;

function miFuncion(arr) {

  
    if(arr%2!==0){
        Par[0] = new Boolean(true);

      

    }else Par[1] = new Boolean(false);

   
    

}

arr.forEach(miFuncion);


console.log(Par.toString());

