/*
정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

입력
인자 1 : arr
number 타입을 요소로 갖는 임의의 배열

출력
number 타입을 리턴해야 합니다.

주의사항
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
배열의 요소는 음수와 0을 포함하는 정수입니다.
배열의 길이는 3 이상입니다.

입출력 예시
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
*/

/* 
내가 작성한 코드 첫번째 풀이. 
굳이 3중 반복문을 사용해 자원 소모를 늘리고 싶지 않아 시도해본 코드이다. 
다 풀고 나서 굳이... 라는 생각이 들었다. 컴퓨팅 자원은 줄었지만 , 시간이라는 내 자원은 줄었다...
*/
const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let plus=[];
  let minus=[];

  for(let el of arr){
    if(el>0){
      plus.push(el)
    }
    if(el<0){
      minus.push(el)
    }
    if(el ===0){
      return 0
    } 
  }
  if(arr.length === 3){
    return arr[0]*arr[1]*arr[2]
  }
  plus.sort((a,b)=>a-b);
  minus.sort((a,b)=>a-b);


  if(minus.length>=2){
    if(Math.abs(minus[0]) * Math.abs(minus[1]) > Math.abs(plus[plus.length-2]) * Math.abs(plus[plus.length-1])){
      return Math.abs(minus[0]) * Math.abs(minus[1])*plus[plus.length-1]
    }
  }
  if(plus.length>=3)
  {
    return Math.abs(plus[plus.length-3]) * Math.abs(plus[plus.length-2])*plus[plus.length-1]
  }
  if(plus.length ===0){
    return Number(minus[minus.length-1])*Number(minus[minus.length-2])*Number(minus[minus.length-3])
  }
  if(plus.length ===1){
    return Number(minus[0])*Number(minus[1])*Number(plus[plus.length-1])
  }
  if(plus.length === 2){
    return Number(minus[0]) * Number(minus[1]) * Number(plus[plus.length-1])
  }
};


/* 
두번째 풀이. 3중 반복문을 사용하여 풀었다.

const largestProductOfThree = function (arr) {
  let list = [];

  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      for(let k=0;k<arr.length;k++){
        if(i!==j && i!==k && j!==k){
          list.push(Number(arr[i])*Number(arr[j])*Number(arr[k]))
        }
      }
    }
  }
  list.sort((a,b)=>a-b)
  return list[list.length-1]
};



레퍼런스 코드. 아주 간결하다.

const largestProductOfThree = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};

*/