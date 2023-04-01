/*
1번
자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개다. 
예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하라.
*/
// 나의 풀이 단순 노가다로 반복문을 돌려 풀었다.
function solution(n) {
  var answer = 0;
  let sum = 0;
  let arr = [];

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
    arr.push(i);
    if (sum < n) {
      continue;
    }
    if (sum === n) {
      answer++;
      continue;
    }
    if (sum > n) {
      for (let j = 0; j < n; j++) {
        sum = sum - arr[j];
        if (sum < n) {
          arr.splice(0, j + 1);
          break;
        }
        if (sum === n) {
          answer++;
          arr.splice(0, j + 1);
          break;
        }
        if (sum > n) {
          continue;
        }
      }
    }
  }
  return answer;
}

// 정수론을 이용한 레퍼런스 코드. 사실 이렇게 풀고 싶었지만 생각하다 포기했다. 굉장히 효울적인 코드이다.
function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}


/*
3진법 뒤집기

문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.
*/

// 나의 풀이
let str = '';

function make3(n){ // 3진법 계산 함수
    if(n<3){
        str = str+String(n);
        return;
    }
    else{
        str = str + String(n%3)
        make3(parseInt(n/3));
    }
}

function make10(str){ // 10진법 계산 함수
    let num = 0;
    for(let i=(str.length-1); i>=0; i--){
        let p = str.length-i-1;
        if(p == 0) num += Number(str[i])
        else{
            let n = Math.pow(3, str.length-i-1)
            num += Number(n* str[i])
    
        }
    }
    return num;
}

function solution(n) {
    make3(n);
    return make10(str);
}

// 다른 사람의 풀이
function solution(n){
  return parseInt(n.toString(3).split("").reverse().join(''), 3)
}