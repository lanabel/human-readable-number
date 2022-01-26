module.exports = function toReadable (number) {
const num= number

let ar1=  [ "zero", "one",  "two", "three", "four", "five",  "six", "seven","eight","nine"]
let ar10= [ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
//let arr100=[ "One hundred", "Two hundred", "Tree hundred"]
let ar11= ["zero","eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen","seventeen", "eighteen", "nineteen"]

let a100= Math.trunc(num/100)
console.log(a100+"a100")

let a1= num%10
console.log(a1+"a1")

let a10= (num%100-a1)/10
console.log(a10+"a10")


    if ((a100===0)&& (a10===0))  {console.log("1-001") ;    return ar1[a1]
    }
    if ((a100===0)&& (a10 !==0)&& (a1===0)) {console.log("2-010,020") ; return ar10[a10]
    }
    if (a100=== 0 &&  a10==1 &&  a1 !==0)   {console.log("3-11");       return ar11[a1] 
    }     
    if (a100 === 0 && a10 !==1 && a1 !=0)   {console.log ("4-21");      return  ar10[a10]+" " +ar1[a1]  
    }  
    if (a100!==0 && a10===0 && a1===0)      {console.log("5-100") ;     return ar1[a100] + " hundred"
    }
    if ((a100!==0)&& (a10!==0)&& (a1===0))  {console.log("6-110,120");  return ar1[a100]+ " hundred "+ar10[a10]
    }
    if ((a100 !==0)&& (a10==1)&& (a1 !==0)) {console.log("7-111") ;     return ar1[a100]+ " hundred " +ar11[a1]
    }  
    if ((a100 !==0)&& (a10===0)&& (a1 !==0)) {console.log("8-101") ;    return ar1[a100]+ " hundred " +ar1[a1]
    }  
    {console.log("9-123");           return ar1[a100]+ " hundred "+ar10[a10]+ " " +ar1[a1]
    }   
    
    
 
}