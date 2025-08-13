var numBottles = 99;
function callBottles (){
    while (numBottles != 0) {
        if( numBottles <=1 ){
            document.write(`${numBottles} bottle on the wall, ${numBottles} on the wall, take one down, pass it around, ${numBottles-1} bottle of beers on the wall <br>`);
        }
        
        else{
             document.write(`${numBottles} bottles on the wall, ${numBottles} on the wall, take one down, pass it around, ${numBottles-1} bottles of beers on the wall <br>`);
        }
         numBottles = numBottles - 1;
    }
}
callBottles();
 

