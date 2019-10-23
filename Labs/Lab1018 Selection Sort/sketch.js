// Austin Matel
// 	10/18/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var numSwaps = 0;
var t = millis();
var t1 = 0;
var t2 = 0;
var endTime;
var numComparisons = 0;
function setup() {
  function swap(list,a,b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }
  function makeList(n,list){
    for (var i = 0; i < n; i++){
      list[i] = int(random(0, n));
    }
  }
  makeList(20,list);
  console.log(list);
  for(var i = 0; i < list.length - 1; i++){
    t1 = t / 1000;
    console.log("start time = " + t1);
    var index = i;
    for (var j = i + 1; j < list.length; j++){
      numComparisons = numComparisons + 1;
      if(list[j] < list[index]){
        index = j;
      }
    }
    var smallerNumber = list[index];
    list[index] = list[i];
    list[i] = smallerNumber;
    numSwaps = numSwaps + 1;
  }
    t2 = t / 1000;
    console.log(list);
    console.log("number of swaps = "+numSwaps);
    console.log("number of comparisons = "+numComparisons);
    console.log("end time = " + t2);
    endTime = t2 - t1;
    console.log("total time = " + endTime);
}
