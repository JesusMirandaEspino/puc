const dif = (arre) => {

    if( arre.length < 3 ){
        return true;
    }
    
    let temp1;
    const tempArr = [];

    for( let [ i,  ar] of arre.entries() ){

        if( ar < arre[ i + 1 ]  ){
            temp1 =  Math.round((arre[ i + 1 ] - ar + Number.EPSILON) * 100) / 100;
        }else{
            temp1 =  Math.round((ar - arre[ i + 1 ] + Number.EPSILON) * 100) / 100;
        }

        
        if( !isNaN(temp1)  ){
            tempArr.push(temp1)
        }
        
    }


    for( let  [ i,  t] of tempArr.entries() ){
        if(  !tempArr[i + 1] ){
            break;
        }
        if( t != tempArr[i + 1]   ){
            return false;
        }
    }
    return true;
    
}

console.log( dif([ 1, 3, 5 ]));
console.log( dif([ 194, 54, 23, 7, 3, 6, 8 ]));
console.log( dif([44, 37, 30, 23 ]));
console.log( dif([ -2.3, -1.1, 0.1, 1.3, 2.5, 3.7 ]));
console.log( dif([ 1, 8 ]));
console.log( dif([ 3, 2, 1, 2, 3, 4, 3]));





