var arr=[];
function rechazar(){  
    for (let value of cuantosCumplen ){
        if (value%2==0) {
             arr.push(value);
            
        }
    }console.log(arr);
    
}


rechazar(cuantosCumplen=[2,4,4,5,7,8,9,12,3,4,5]);