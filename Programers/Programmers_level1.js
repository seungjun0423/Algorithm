/*
나만의 카카오 성격 유형 검사지를 만들려고 합니다.
성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분합니다. 성격은 각 지표에서 두 유형 중 하나로 결정됩니다.

지표 번호	성격 유형
1번 지표	라이언형(R), 튜브형(T)
2번 지표	콘형(C), 프로도형(F)
3번 지표	제이지형(J), 무지형(M)
4번 지표	어피치형(A), 네오형(N)

4개의 지표가 있으므로 성격 유형은 총 16(=2 x 2 x 2 x 2)가지가 나올 수 있습니다.
예를 들어, "RFMN"이나 "TCMA"와 같은 성격 유형이 있습니다.

검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있습니다.

매우 비동의
비동의
약간 비동의
모르겠음
약간 동의
동의
매우 동의

각 질문은 1가지 지표로 성격 유형 점수를 판단합니다.

이때 검사자가 질문에서 약간 동의 선택지를 선택할 경우 어피치형(A) 성격 유형 1점을 받게 됩니다. 
만약 검사자가 매우 비동의 선택지를 선택할 경우 네오형(N) 성격 유형 3점을 받게 됩니다.

위 예시처럼 네오형이 비동의, 어피치형이 동의인 경우만 주어지지 않고, 질문에 따라 네오형이 동의, 
어피치형이 비동의인 경우도 주어질 수 있습니다. 하지만 각 선택지는 고정적인 크기의 점수를 가지고 있습니다.

매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다.
동의나 비동의 선택지를 선택하면 2점을 얻습니다.
약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다.
모르겠음 선택지를 선택하면 점수를 얻지 않습니다.
검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다. 
단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.

질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다. 
이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.
*/

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT","CF","JM","AN"];

  types.forEach((type) =>
      type.split('').forEach((char) => MBTI[char] = 0)
  )

  choices.forEach((choice, index) => {
      const [disagree, agree] = survey[index];

      MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}



/*
이상한 문자 만들기

문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
 */

function solution(s) {
	let arr = s.split(' ');
	for(let i=0;i<arr.length;i++){
			let word = '';
			for(let j=0;j<arr[i].length;j++){
					if(j%2===0){
							word += arr[i][j].toUpperCase(); 
					} else {
							word += arr[i][j].toLowerCase(); 
					}
			}
			arr[i] = word;
	}
	return arr.join(' ');
}



/**
달리기 경주
문제 설명
얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 
예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다.
즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

제한사항
5 ≤ players의 길이 ≤ 50,000
players[i]는 i번째 선수의 이름을 의미합니다.
players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
players에는 중복된 값이 들어가 있지 않습니다.
3 ≤ players[i]의 길이 ≤ 10
2 ≤ callings의 길이 ≤ 1,000,000
callings는 players의 원소들로만 이루어져 있습니다.
경주 진행중 1등인 선수의 이름은 불리지 않습니다.
 */

function solution(players, callings) {
	let obj = {};
	let arr = [...players];
	
	for(let i=0;i<arr.length;i++){
			obj[arr[i]] = i;
	}
	
	for(let i=0;i<callings.length;i++){
			let name = callings[i];
			let idx = obj[name];
			
			obj[name] -= 1;
			obj[arr[idx-1]] += 1;
			
			[arr[idx-1],arr[idx]] = [arr[idx],arr[idx-1]];
			
	}
	return arr;
}


/**
문자열 내 마음대로 정렬하기
문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
 */


// sort 메소드 사용법과 작동원리에 집중할 것!
function solution(a,b){
	a.sort((x, y) => {
			if (x[b] < y[b]) {return -1;}
			else if (x[b] > y[b]) {return 1;}
			else if (x < y) {return -1;}
			else if (x > y) {return 1;}
			return 0
	})
	return a
}


/**
모의고사
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
 */


// filter의 사용법과 Math.max() 메소드를 기억할 것!
function solution(answers) {
	var result = [];
	var a1 = [1, 2, 3, 4, 5];
	var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
	var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
	var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
	var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
	var max = Math.max(a1c,a2c,a3c);

	if (a1c === max) {result.push(1)};
	if (a2c === max) {result.push(2)};
	if (a3c === max) {result.push(3)};

	return result;
}

/**
소수 찾기
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.
 */

// 아라토네스의 체 알고리즘
function solution(n) {
	const arr = [];
	
	// 인덱스 번호가 주어진 숫자 n과 대응하도록 
	// 빈 배열을 만들고 원소는 true 값으로 채워준다.
	// 여기서 true 는 소수라는 의미이다.
	// 배열은 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다.
	for (let i = 0; i < n + 1; i += 1) {
			arr.push(true);
	}
	
	// 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
	// arr[i] 가 소수일 경우, 반복문을 진행한다.
	// 맨 처음 시작하는 2는 소수이므로,
	// 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
	// 제곱근까지 반복한다.
	for (let i = 2; i * i <= n; i += 1) {
			if (arr[i]) {
					for (let j = i * i; j <= n; j += i) {
							arr[j] = false;
					}
			}
	}
	
	// 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
	arr.splice(0, 2, false, false);
	
	// 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
	const result = arr.filter((value) => {
			return value !== false;
	})
	
	return result.length;
}
