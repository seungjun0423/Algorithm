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




/*
올바른 괄호

문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*/

function solution(s){
  let stack = [];
  for(let i=0;i<s.length;i++){
      if(stack.length===0 && s[i]===")"){
          return false;
      }else{
          if(s[i]==='('){
              stack.push("(")
          }
          if(stack[stack.length-1]==='(' && s[i]===")"){
              stack.pop();
          }
      }
  }
  if(stack.length!==0){
      return false 
  }
  return true
}

// 다른 사람의 풀이
/*
function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}
*/


/*
최솟값 만들기

문제 설명
길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다. 
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다.
이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면
A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)
즉, 이 경우가 최소가 되므로 29를 return 합니다.
배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.

제한사항
배열 A, B의 크기 : 1,000 이하의 자연수
배열 A, B의 원소의 크기 : 1,000 이하의 자연수
*/

function solution(A, B) {
  // 배열 A와 B를 오름차순 정렬합니다.
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let result = 0;

  // 배열 A의 가장 작은 수와 배열 B의 가장 큰 수를 곱하고, 그 값을 result에 누적합니다.
  // 이 과정을 배열의 길이만큼 반복합니다.
  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[A.length - 1 - i];
  }

  // 최종 누적된 값을 반환합니다.
  return result;
}

// 다른 사람의 풀이
/*
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
*/



/*
이진 변환 반복하기

문제 설명
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
x의 모든 0을 제거합니다. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. 
s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 150,000 이하입니다.
s에는 '1'이 최소 하나 이상 포함되어 있습니다.
*/

function solution(s) {
  let zeroCount = 0; // 제거된 0의 개수를 저장할 변수
  let transformCount = 0; // 이진 변환 횟수를 저장할 변수

  const convert = (s) => {
    if (s === "1") {
      return [transformCount, zeroCount];
    }

    transformCount++;
    let oneCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        zeroCount++;
      } else if (s[i] === "1") {
        oneCount++;
      }
    }

    const nextS = oneCount.toString(2);
    return convert(nextS);
  };

  return convert(s);
}

/*
다음 큰 숫자

문제 설명
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

제한 사항
n은 1,000,000 이하의 자연수 입니다.
*/