
//Quiz 02-01

const findGoods = (a,b) =>{
  let result = [];
  let left = 0;
  let right = a.length-1;
  let middle;
  a = a.sort((c,d)=>c-d);

  while (left<=right) {
    middle = parseInt((right + left) / 2);
    
    if (a[middle] === b) {
      result.unshift(a[middle]);
      
      for(let i=0;i<a.length/2+1;i++){
        if(a[middle+i] !== undefined || a[middle-i] !== undefined){
          if(Math.abs(a[middle+i]-b) > Math.abs(a[middle-i]-b)){
            result.splice(i,0,a[middle+i]);
          }
          if(Math.abs(a[middle+i]-b) < Math.abs(a[middle-i]-b)){
            result.splice(i,0,a[middle-i]);
          }
          if(Math.abs(a[middle+i]-b) === Math.abs(a[middle-i]-b)){
            result.splice(i,0,a[middle+i]);
            result.splice(i,0,a[middle-i]);
          }
        }
      }
    }

    if(a[middle] < b){
      left = middle;
    }

    if(a[middle] > b){
      right = middle;
    }
  }
  return result 
}