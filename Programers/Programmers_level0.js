/*
분수의 덧셈

문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

유클리드 호제법을 이용하여 최대 공약수를 구하고 이를 통해 답을 구했다.
*/
/*
다른 사람의 최대 공약수 함수 

function fnGCD(a, b){
  return (a%b)? fnGCD(b, a%b) : b;
}
*/
const gcd = (a,b) => {
	if(a===b){
		return b
	}
	let r;
	if(a > b){
		r = a%b;
		if(r===0){
				return b
		}   
		return gcd(b,r);
	} else if(a < b){
		r = b%a;
		if(r===0){
				return a
		}
		return gcd(a,r);
	}
}

function solution(numer1, denom1, numer2, denom2) {
	let denum = denom1*denom2;
	let numer = numer1*denom2 + numer2*denom1

	return [numer/gcd(denum,numer),denum/gcd(denum,numer)];
}




/*
최빈값 구하기

문제 설명
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 */


function solution(array) {
	let result;
	let count = 0;
	for(let i=0;i<array.length;i++){
			
			let num = array.filter(el=>el===array[i]).length;
			if(num > count){
					count = num;
					result = array[i];
			} else if(num === count && result !==array[i]){
					result = -1;
			}
	}
	return result;
}

/**
문자열 정렬하기 
문제 설명
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(my_string) {
	return my_string.toLowerCase().split('').sort().join('');
}

/**
팩토리얼

문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
 */

// 내가 푼 방식
function solution(n) {
    
	function fac(n){
			let num = 1; 
			
			for(let i=2;i<=n;i++){
					num = num*i;    
			}
			return num;
	}
	
	if(n===0 || n===1 || n===2){
			return n
	}
	
	for(let i=2;i<=n;i++){
			if(fac(i)>n){
					return i-1
			}
	}
}

// 다른 사람의 풀이 => 접근 방식을 배우자!
function solution(n) {
	let i = 1;
	let f = 1;
	while (f*i < n) f*=++i;
	return i;
}

/**
k의 개수
문제 설명
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
 */

// 나의 풀이 
function solution(i, j, k) {
	let arr = [];
	
	for(let t=i;t<=j;t++){
			if(String(t).includes(String(k))){
				arr.push(String(t));   
			}
	}
	arr = arr.map(el=>{let list = el.split('');return list.filter(value => value === String(k)).length;})
	return arr.reduce((pre,cur)=>pre+cur,0);
}



// 참고할만한 다른 사람의 풀이 => split을 이용한 여집합 : split의 인자 k를 기준으로 나누어 지며 이 경우 k의 수 보다 항상 1이 많기 때문에 -1을 한다. 
function solution(i, j, k) {
	let a ='';
	for(i;i<=j;i++){
			a += i;
	}

	return a.split(k).length-1;
}


/**
숨어있는 숫자의 덧셈 (2)
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

// 정규 표현식을 이용해 문제를 풀었다.

function solution(my_string) {
	let regEng = /^[a-zA-Z]*$/;
	let sum = '';
	for(let i=0;i<my_string.length;i++){
			let el = my_string[i];
			if(regEng.test(el)){
					sum += ' ';
			} else {
					sum += el;
			}
	}
	return sum.split(' ').reduce((pre,cur)=>Number(pre)+Number(cur),0)
}

/**
삼각형의 완성조건

문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 2입니다.
1 ≤ sides의 원소 ≤ 1,000
 */

function solution(sides) {
	return Math.min(...sides)*2-1
}