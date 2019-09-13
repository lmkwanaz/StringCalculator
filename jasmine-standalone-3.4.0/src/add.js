function add(a){
        
        if(a.length != 0){

                var Loweralpha = /[a-z]/;
                var Upperalpha = /[A-Z]/;
                

        var up = Upperalpha.test(a);
        var low = Loweralpha.test(a);
       
                
        if(!(low || up)){           
                      
         var search = /-?[0-9]+/g;
        let negNum = /-?\d+/g;
        let puthereagain = [];
        let puthere = a.match(negNum);
        let i = 0;
                       
        var changetonumber = a.match(search).map(function (x){
            return parseInt(x, 10);
        });


        if(puthere[i] < 0){
                var check = 0;
                while( check < puthere.length){
                        if(puthere[check] < 0){
                                puthereagain.push(puthere[check])
                                 check++;
                        
                        }else{
                                i++
                                check++;
                         }
                }
                throw  "STOP ADDING NEGATIVES ";
        }else  if(changetonumber.length > 1){
                 let sum = 0;
                        
                for(let index=0; index <changetonumber.length; index++){
        
         if (changetonumber[index]<0){
                 
                      throw new Error ("STOP ADDING NEGATIVE, ")+changetonumber[index];

                }else if(changetonumber[index] > 1000){
                        

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





