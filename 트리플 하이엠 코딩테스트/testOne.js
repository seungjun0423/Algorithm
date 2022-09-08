/*
1. 햐샤드수 점검
Q. 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 점검하는 함수를 작성하세요

제한조건
- x는 1이상, 10000 이하인 정수

입출력 예 #1
10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수 입니다.
입출력 예 #2
13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.
*/

const func = (n) => {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

const Harshad = (n) => {
  var result ;
  var sum = 0;
  var arr = String(n).split('');
  for(var i=0; i<arr.length; i++) {
    sum += Number(arr[i]);
  }
  return n % sum == 0 ? true : false;
}