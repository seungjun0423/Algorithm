/*
BFS (Breadth-First Search)알고리즘이
넓이(Breadth)를 우선으로 하며, 큐(Queue)를 이용하여 탐색하는 방식입니다. BFS 알고리즘은 그래프의 모든 노드를 탐색하는 것을 목적으로 하며, 최단 경로 탐색에도 사용될 수 있습니다.

ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.
게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

제한사항
maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.
*/

function solution(maps) {
    
  let arr = [];
  let result = 0;
  
  // n은 map의 가로 길이 (인덱스 x)
  const n = maps[0].length;
  // m은 map의 세로 길이 (인덱스 x)
  const m = maps.length;
  
  // 1단계 : 목적지 와 출발지가 막혀있는지 여부 체크 
  if(!maps[m-2][n-1] && !maps[m-1][n-2]){
      return -1;
  }
  if(!maps[1][0] && !maps[0][1]){
      return -1;
  }
  
  const move = (y,x) => {
      if(x===n-1 && y===m-1){
          arr.push(result);
          return;
      }
      if(maps[y+1][x] && !maps[y][x+1]){
          result++;
          move(y+1,x);
      }
      if(!maps[y+1][x] && maps[y][x+1]){
          result++;
          move(y,x+1);
      } else if(y < n-2 && x < m-2){
          move(y+1,x);
          move(y,x+1);
      }
      return;
  }
  move(0,0);
  return arr.sort((a,b)=>a-b)[0];
}


// 제대로 된 풀이 
function solution(maps) {
	let answer = 1;
	let visited = maps;
	let queue = [];
	const dx = [-1, 1, 0, 0];
	const dy = [0, 0, -1, 1];
	const n = maps.length;
	const m = maps[0].length;
	
	queue.push([0, 0]);
	visited[0][0] = 0;
	
	while(queue.length > 0) {
			let size = queue.length;
			
			for(let i = 0; i < size; i++) {
					let [x, y] = queue.shift();
					
					for(let j = 0; j < 4; j++) {
							let nx = x + dx[j];
							let ny = y + dy[j];
							
							if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
									if(nx == n - 1 && ny == m - 1) {
											return ++answer;
									}
									queue.push([nx, ny]);
									visited[nx][ny] = 0;
							}
					}
			}
			answer++;
	}
	
	return -1;
}