/*

n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.

*/

// 나의 풀이 (완전탐색이지만 통과)
function solution(numbers, target) {
	const arr = [...numbers.map(el=>el)];
	const max = numbers.reduce((acc,cur)=>acc+cur);
	const min = -max;
	let stack = [''];
	
	if( target < min || target > max){
			return 0;
	}
	while(arr.length !== 0){
			const plus = `+${arr[0]}`;
			const minus = `-${arr[0]}`;
			stack = [...stack.map(el=>String(el)+plus),...stack.map(el=>String(el)+minus)]
			arr.shift();
	}
	
	return stack.filter(el=>eval(el)===target).length;
}

/*
문제 설명
네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

제한사항
컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
computer[i][i]는 항상 1입니다.
*/

function solution(n, computers) {
  let visited = [false];
  let answer = 0;

  function dfs(i) {
      visited[i] = true;
      for(let j=0; j<computers[i].length; j++) {
          if(computers[i][j]===1 && !visited[j]){
              dfs(j);
          }
      }
  }
  
  for (let i=0; i < computers.length; i++) {
      if (!visited[i]) {
          dfs(i)
          answer++;
      }
  }
  return answer;
}