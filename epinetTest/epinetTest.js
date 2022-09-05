//Quiz 01-01

const findGoods = (a,b) =>{
  let result = [];

  for(let i=0;i<a.length;i++){
    if(Math.abs(a[i]-b)===0){
      result.unshift(a[i])
    }

    else if(a[Math.abs(a[i]-b)] === undefined){
      result[Math.abs(a[i]-b)] = a[i]
    }

    else if(a[Math.abs(a[i]-b)].length !== 0){
      result.splice(Math.abs(a[i]-b),0,a[i])
    }
  }
  result = result.filter((el)=>el.length!==0)
  return result 
}