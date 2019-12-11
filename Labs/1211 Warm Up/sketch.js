// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var total = 0;
var avg = 0;
var meidan = 0;
function setup() {
  function swap(list,a,b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }
  function loadNumbers(n,list){
    for (var i = 0; i < n; i++){
      list[i] = int(random(1, 100));
    }
  }
  loadNumbers(11,list);
  function mySort(list){
    for(var i = 0; i < list.length - 1; i++){
      for (j = 0; j < list.length - 1 - i; j++){
        if(list[j] > list[j + 1]){
          swap(list, j, j + 1);
        }
      }
    }
  }
  function logNumbers(){
    console.log(list);
    console.log("The average is " + avg);
    console.log("The median is " + median);
  }
  function findAvg(list){
    for(var i = 0; i < list.length; i++){
      temp = list[i];
      total = total + temp;
    }
    avg = total / 11;
  }
  function findMedian(list){
    median = list[(list.length / 2) - 0.5];
  }
  mySort(list);
  findAvg(list);
  findMedian(list);
  logNumbers();
}
