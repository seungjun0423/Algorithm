// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.
// base는 number 타입을 요소로 갖는 임의의 배열 base.length는 100 이하
// sample은 number 타입을 요소로 갖는 임의의 배열 sample.length는 100 이하
// boolean 타입을 리턴해야 합니다.
// 주의사항 : base, sample 내에 중복되는 요소는 없다고 가정합니다.

// 내가 작성한 코드 반복문을 한번만 사용해 O(N)의 시간복잡도를 지닌다.
const isSubsetOf = function (base, sample) {
  let length = 0;
  let sampleLength = sample.length;
  let arr = base.slice().concat(sample.slice()).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      length++;
    }
  }
  if (length === sampleLength) {
    return true;
  } else {
    return false;
  }
};

// 레퍼런스 코드 
// const isSubsetOf = function (base, sample) {
  // naive solution: O(M * N)
  // return sample.every((item) => base.includes(item));

  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
//   base.sort((a, b) => a - b);
//   sample.sort((a, b) => a - b);

//   const findItemInSortedArr = (item, arr, from) => {
//     for (let i = from; i < arr.length; i++) {
//       if (item === arr[i]) return i;
//       else if (item < arr[i]) return -1;
//     }
//     return -1;
//   };

//   let baseIdx = 0;
//   for (let i = 0; i < sample.length; i++) {
//     baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
//     if (baseIdx === -1) return false;
//   }
//   return true;
// };

