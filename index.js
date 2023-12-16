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
            return ("juliaJames")
        }
        else if ( i%3===0 ) {
            return ("james")
        }
        else if (i%5===0) {
            return ("julia")
        }
       
        else  return i
    }
    
    }



   
        
    

    