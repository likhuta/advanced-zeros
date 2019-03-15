module.exports = function getZerosCount(number, base) {
   let objSimpleBase={};
   let maxPowerCount={};
   let min=0;
 

function makeSimpleArr(base){
  let arr=[];
  [base].forEach(item => {
    for(let j=2; j<=item; j++){
      while(item%j==0){
        arr.push(j);
        item=item/j;
      }
    }
  });

  for(let i =0; i<=arr.length-1; i++){
    objSimpleBase[arr[i]]=0;
    maxPowerCount[arr[i]]=0;
  }
  for(let i =0; i<=arr.length-1; i++){
    objSimpleBase[arr[i]]+=1;

  }
  
let arrOfPow=[];
  for (let key in maxPowerCount ){
    maxPowerCount[key]= Math.floor(maxPowerForThisNumber(key, number)/objSimpleBase[key])
    arrOfPow.push(maxPowerCount[key])
  }

  min=Math.min.apply(null, arrOfPow)


}
function maxPowerForThisNumber(param, number){
  let count=0;
  let powParam=1;
  while(true){
    powParam*=param;
    let add=Math.floor(number/powParam);
    if(add==0){
      return Math.floor(count);

    }
    count+=add;
  }
}

makeSimpleArr(base);
// console.log(min)
return min


 }

// getZerosCount(4821527, 250)
// getZerosCount(18835759, 190)