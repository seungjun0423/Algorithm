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
	let stack = [''];

	while(arr.length !== 0){
			const plus = `+${arr[0]}`;
			const minus = `-${arr[0]}`;
			stack = [...stack.map(el=>String(el)+plus),...stack.map(el=>String(el)+minus)]
			arr.shift();
	}
	
	return stack.filter(el=>eval(el)===target).length;
}

// dfs 풀이
function solution(numbers, target) {
	var answer = 0;

	function dfs(sum,index){
		if(index===numbers.length){
				if(sum===target){
						answer+=1;
				}
				return
		}
		dfs(sum+numbers[index],index+1)
		dfs(sum-numbers[index],index+1)
	}

	dfs(0,0)

	return answer;
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

/**
단어 변환
문제 설명
두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.
예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

제한사항
각 단어는 알파벳 소문자로만 이루어져 있습니다.
각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
begin과 target은 같지 않습니다.
변환할 수 없는 경우에는 0를 return 합니다.
 */

// 나의 풀이. 매우 지저분하게 풀었다. 그냥 막힘없이 쭉 풀었는데 맞았다. 리팩토링은 번거러워... 사실 BFS를 이용해 푼것이 아니라 다른 사람 풀이를 참고해 BFS풀이를 봐야겠다.
function solution(begin, target, words) {
	const result = [begin];
	function bfs(arr){
			if(result[0] === target){
					return result.length-1;
			}
	let list = arr.map(el=>{
			let n = 0;
			for(let i=0; i<result[0].length; i++){
					if(el[i] === result[0][i]){
							n++;
					}
			}
			if( n === result[0].length-1){
					let k = 0;
					for(let i=0; i<result[0].length; i++){
							if(el.includes(target[i])){
									k++;
							}
					}
					return [el,k]
			}
	})
	
	list = [...list.filter(el=> el!==undefined)];
	if(list.length === 0){
			return 0;
	}
	if(list.length >= 2 ){
			let max = list[0][1];
			for(let i=1; i<list.length; i++){
					const num = list[i][1];
					if(max < num){
							max = num;
					}
			}
			result.unshift(list.filter(el=>el[1]===max)[0][0]);
			return bfs([...arr.filter(el=>el!==list.filter(el=>el[1]===max)[0][0])])
	} else if(list.length === 1){
			result.unshift(list[0][0])
			return bfs([...arr.filter(el=>el!==list[0][0])])
	} 
	}
	return bfs(words)
}