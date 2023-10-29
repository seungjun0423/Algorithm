/*
문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

// 삽입정렬을 통한 문제 풀이, 그러나 시간 초과
function solution(numbers) {
	const copied = [...numbers];
	for(let i=0; i<copied.length; i++){
			const a = String(copied[i]);
			for(let j=0; j<i+1; j++){
					const b = String(copied[j]);
					if(Number(a+b) > Number(b+a)){
							[copied[i], copied[j]] = [copied[j], copied[i]];
					}
			}
	}
	return copied.join('');
}

// 퀵정렬을 통한 문제풀이 시간 복잡도 통과
function compare(a, b) {
    const strA = String(a);
    const strB = String(b);
    return parseInt(strB + strA) - parseInt(strA + strB);
}

function quickSort(arr, compare) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
    
    for (let num of arr) {
        const result = compare(num, pivot);
        if (result > 0) {
            right.push(num);
        } else if (result < 0) {
            left.push(num);
        } else {
            equal.push(num);
        }
    }
    
    return quickSort(left, compare).concat(equal, quickSort(right, compare));
}

function solution(numbers) {
    const sorted = quickSort(numbers, compare);
    if (sorted[0] === 0) {
        return '0';
    }
    return sorted.join('');
}


/*
문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

입출력 예
citations	return
[3, 0, 6, 1, 5]	3

입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
*/

// 시간복잡도는 O(n^2)인 함수. 정답은 맞지만 효율이 떨어진다. 
function solution(citations) {
    let result = 0;
    let arr = citations.sort((a,b)=>a-b);
    for(let i=0; i<arr.length; i++){
        if(arr[i] <= arr.filter((el)=> el>=arr[i]).length){
            if(arr[i]>result){
                result = arr[i];
            }
        }
    }
    return result;
}

//  시간복잡도 O(n)으로 리팩토링을 거친 함수
function solution(citations) {
    const n = citations.length;
    const count = new Array(n + 1).fill(0); // 논문별 인용 횟수를 저장할 배열, 처음엔 모두 0을 기본 값을 지닌다. citations와 배열의 길이가 같다.
    for (let i = 0; i < n; i++) {
        count[Math.min(citations[i], n)]++; // 논문별 인용 횟수를 측정하여 count 배열에 저장
    }
    let h = n; // 최대 H-Index는 논문 수 n입니다.
    for (let i = 0; i <= n; i++) {
        if (h <= i) break; // h번 이상 인용된 논문이 h편 이상이므로, h가 i보다 작아지면 더 이상 검사할 필요가 없습니다.
        h -= count[i]; // i번 이상 인용된 논문의 수를 h에서 빼면서 H-Index를 구합니다.
    }
    return h;
}

