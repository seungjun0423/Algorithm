/*
스도쿠는 숫자 퍼즐로, 가로 9칸, 세로 9칸으로 이루어져 있는 표에 1부터 9까지의 숫자를 채워 넣는 퍼즐입니다. 
퍼즐을 푸는 방법은 아홉 가로줄, 세로줄, 3X3 칸에 1에서 9까지의 숫자를 중복되지 않게 한 번씩만 넣으면 됩니다. 
일부 칸이 비어있는 상태인 스도쿠 보드를 입력받아 스도쿠 퍼즐이 완성된 보드를 리턴해야 합니다.

board는 가로 길이(board[i].length)와 세로 길이(board.length)가 모두 9인 2차원 배열
matrix[i][j]는 1 이상 9 이하의 자연수

가로와 세로의 길이가 모두 9인 2차원 배열을 리턴해야 합니다.

입력으로 주어지는 board를 직접 수정해도 상관없습니다.
입력으로 주어지는 board 가지고 완성시킬 수 있는 보드는 유일(unique)합니다.
숫자가 입력되지 않은 칸은 편의상 0이 입력되어 있습니다.
*/

const sudoku = function (board) {
  let list;
  
  for(let i=0;i<9;i++){
    list = [1,2,3,4,5,6,7,8,9];

    for(let j=0;j<9;j++){
      if(board[i][j]!==0){
        list = list.filter(el=>el!==board[i][j]);
      } 
    }

    for(let j=0;j<9;j++){
      if(board[i][j]===0){
        for(let k=0;k<9;k++){
          if(list.indexOf(board[k][j])>0){
            list = list.filter(el=>el!==board[k][j]);
          }
        }
      }
    }
  }
};