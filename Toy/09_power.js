/*
두 수를 입력받아 거듭제곱을 리턴해야 합니다.

입력
인자 1: base
number 타입의 자연수 (base >= 2)
인자 2: exponent
number 타입의 정수 (exponent >= 0)

출력
number 타입을 리턴해야 합니다.
실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.

주의사항
Math.pow, 거듭제곱 연산자 사용은 금지됩니다.
시간복잡도 O(logN)을 만족해야 합니다.
나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.

입출력 예시
let output = power(3, 40);
console.log(output); // --> 19334827
*/

//구현한 코드. 시간복잡도 O(logN)을 만족시키지 못했다/.
function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let num = 1
  while(exponent>0){
    num = num * base;
    exponent = exponent-1;
    if(num>=94906249){
      if(num%94906249===0){
        num = 1;
      }
      else {
        num = num%94906249;
      }
    }
  }
return num 
}

/* 
레퍼런스 코드. 봐도 무슨말인지 모르겠다. 별다른 설명도 없어 이해하기 힘들다. 
아마 수학적인 부분같다.

function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}

*/