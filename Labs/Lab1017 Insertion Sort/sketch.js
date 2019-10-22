// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var numSwaps = 0;
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
  for(var i = 1; i < list.length; i++){
    for (j = i - 1; j > 0; j--){
      numComparisons = numComparisons + 1;
      if(list[j] < list[j-1]){
        numSwaps = numSwaps + 1;
        swap(list, j, j - 1);
        }
      }
    }
    console.log(list);
    console.log(numSwaps);
    console.log(numComparisons);
  }
