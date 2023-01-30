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
