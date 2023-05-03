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