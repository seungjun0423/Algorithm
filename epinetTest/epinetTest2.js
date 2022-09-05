// Quiz 02-02
const findMonthGap =(data) => {
  let calender = [];
  
  for(let i=0;i<12;i++){
    caleder[i] = 0;
  }

  for(let key in data){
    for(let i=1;i<=12;i++){
      if(`${key}`.includes(`2022.${i}`)){
        calender[i-1]=calender[i-1]+data[key]
      }
    }
  }
  calender[0] = calender[0]/31;
  calender[1] = calender[1]/28;
  calender[2] = calender[2]/31;
  calender[3] = calender[3]/30;
  calender[4] = calender[4]/31;
  calender[5] = calender[5]/30;
  calender[6] = calender[6]/31;
  calender[7] = calender[7]/31;
  calender[8] = calender[8]/30;
  calender[9] = calender[9]/31;
  calender[10] = calender[10]/30;
  calender[11] = calender[11]/31;

return calender
}