/*
분수의 덧셈

문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

유클리드 호제법을 이용하여 최대 공약수를 구하고 이를 통해 답을 구했다.
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