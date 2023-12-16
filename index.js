// exercise 1  with for 
function iterateAndLogWithFor(n) {

    for ( i=0 ; i<=n ;i=i+1) {
        if ((i%2)===0)  {
            console.log( i +" is even")
        } 
        else console.log ( i +  " is odd" )
    }
   
   }

   // exercise 1 with while 
   function iterateAndLogWithWhile(n) {
    var i=0
  while (i<=n) {
     
      
      if (i%2 === 0) {
          
          console.log (i + " is even")
          
      }
      else console.log(i + " is odd ")
      i++
  }

   
 

}


// exercise 2 with for 

function reverseIterateAndLogWithFor(n) {

    for ( i=n ; i>=0 ;i=i-1) {
        if ((i%2)===0)  {
            console.log( i +" is even")
        } 
        else console.log ( i +  " is odd" )
    }
   
   }

   // exercise 2 with while 

   function reverseIterateAndLogWithWhile(n) {
    var i=n
  while (i>=0) {
     
      
      if (i%2 === 0) {
          
          console.log (i + " is even")
          
      }
      else console.log(i + " is odd ")
      i--
  }
  

}

// exercise 2 with recursive 

function reverseIterateAndLogRecursively(n) {
   
    if (n===0) {
    return  
    }
    
    if (n%2 === 0){
        console.log(n+ " is odd")
    }
        else console.log(n+ " is even ")
    
    
    reverseIterateAndLogRecursively(n-1)
          }


// exercise  3 with for 


    function weirdDivisionWithFor(n) {
        for ( i=1 ; i<=n ; i=i+1) {
            if (i%3===0 && i%5===0) {
                console.log("juliaJames")
            }
            
           
            else if ( i%5===0 ) {
                console.log("james")
            }
            else if (i%3===0) {
                console.log("julia")
           
        }
             else  console.log(i)
        
        }
        }
  


    // exercise 3 with  while 

    function weirdDivisionWithWhile(n) {
    
        var i=1
            
          while (i<=n) {
              
              
              if (i%3===0 && i%5===0) {
                        console.log("juliaJames")
                    }
                    
                   
                    else if ( i%5===0 ) {
                        console.log("james")
                    }
                    else if (i%3===0) {
                        console.log("julia")
                   
                }
                     else  console.log(i)
                i++
                }
            
            }


            // exercise 3 with recursive 


            function inverseWeirdDivisionRecursively(n) {
                if (n===1) {
                    return     
                }
                 else if (n%3===0 && n%5===0) {
                                    return "juliaJames"
                                }
                                
                               
                                else if ( n%5===0 ) {
                                    return "james"
                                }
                                else if (n%3===0) {
                                    return "julia"
                               
                            }
                                 else return n
                
                return inverseWeirdDivisionRecursively(n-1)
                            
                            }


                // exercise 4 with for 
                function laughWithFor(number) {
                    var result =""
                    var  str = "ha"
                      for (i=0; i < number ; i=i+1) {
                          result = result + str
                      }
                        return result 
                    
                    }


                    // exercise  4 with while 

                    function reverseIterateAndLogWithWhile(n) {
                        var i = 0
                        var result = ""
                        
                    while ( i<=n ) {
                         i++
                        
                        result = result + "ha"
                    }
                        
                    return result  
                        
                    }



                    // exercise 4  with recursive 

                    function laughRecursively(number) {
    
    
                        if (number === 0 ) {
                            return ""
                        }
                           return    laughRecursively(number-1 )  + "ha" 
                           
                       }



                            
            
            


   
        
    

