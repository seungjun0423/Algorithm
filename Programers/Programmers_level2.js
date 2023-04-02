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


// 3진법으로 치환해주는 함수(재귀함수 사용x)
function toTernary(num) {
  // 입력받은 정수가 0인 경우, 바로 문자열 '0'을 반환합니다.
  if (num === 0) {
    return '0';
  }

  // 3진법 수를 문자열로 저장할 변수를 초기화합니다.
  let ternary = '';

  // 입력받은 정수가 0이 아닌 동안 아래의 과정을 반복합니다.
  while (num !== 0) {
    // 현재 num을 3으로 나눈 나머지를 변수 remainder에 저장합니다.
    const remainder = num % 3;
    // remainder를 문자열로 변환하여 ternary 앞에 추가합니다.
    ternary = remainder.toString() + ternary;

    // num을 3으로 나누고, 소수점 이하를 버린 값으로 갱신합니다.
    num = Math.floor(num / 3);
  }

  // 최종 변환된 3진법 문자열을 반환합니다.
  return ternary;
}


/*
JadenCase 문자열 만들기

문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.
*/

function solution(s) {
  let splitS = s.split(' ');
  splitS = splitS.map((el) => {
    if (typeof el[0] === "string") {
      el = el[0].toUpperCase() + el.slice(1).toLowerCase();
    }
    return el;
  });
  return splitS.join(' ');
}