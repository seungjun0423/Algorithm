/**
23881번
문제
오늘도 서준이는 선택 정렬 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
N개의 서로 다른 양의 정수가 저장된 배열 A가 있다. 선택 정렬로 배열 A를 오름차순 정렬할 경우 K 번째 교환되는 수를 구해서 우리 서준이를 도와주자.

크기가 N인 배열에 대한 선택 정렬 의사 코드는 다음과 같다.
selection_sort(A[1..N]) { # A[1..N]을 오름차순 정렬한다.
    for last <- N downto 2 {
        A[1..last]중 가장 큰 수 A[i]를 찾는다
        if (last != i) then A[last] <-> A[i]  # last와 i가 서로 다르면 A[last]와 A[i]를 교환
    }
}

입력
첫째 줄에 배열 A의 크기 N(5 ≤ N ≤ 10,000), 교환 횟수 K(1 ≤ K ≤ N)가 주어진다.
다음 줄에 서로 다른 배열 A의 원소 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 109)

출력
K 번째 교환되는 두 개의 수를 작은 수부터 한 줄에 출력한다. 교환 횟수가 K 보다 작으면 -1을 출력한다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./선택정렬1.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = input.split("\n")

const len = input[0].split(' ')[0];
const k = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ');
let n = 0;

for(let i=len-1; 0<i; i--){
	const el = arr[i];
	for(let j=i-1; 0<=j; j--){
		const el2 = arr[j]
		if( el < el2){
			arr[i] = el2;
			arr[j] = el;
			n++;
			if(n === k){
				return `${arr[j]} ${arr[i]}`;
			};
		};
	};
};
return -1;