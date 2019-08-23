function add(a){
        
        if(a.length != 0){

                var Loweralpha = /[a-z]/;
                var Upperalpha = /[A-Z]/;
                

        var up = Upperalpha.test(a);
        var low = Loweralpha.test(a);
                
        if(!(low || up)){           
                      
                        var search = /-?[0-9]+/g;
                       
                        var changetonumber = a.match(search).map(function (x){
                                return parseInt(x, 10);
                        });
                       
                       if(changetonumber.length > 1){
                               let sum = 0;
                        
                               for(let index=0; index <changetonumber.length; index++){
                                if (changetonumber[index]<0){
                                        console.log("STOP ADDING NEGATIVES");
                                       throw changetonumber[index];
                                } else{        
                                sum += changetonumber[index];
                                 }
                               }

                               return sum;

                       }else{
                        console.log("put more than one character separated by a coma");
                        return changetonumber[0];
                       }
                
                }else{
                        console.log("incorrect inputs!!");
                        return false;
                }
        }else{
                 console.log("can't leave this files wmpty");
                return 0;
        }
}
add("1,-10,-20")