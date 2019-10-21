// Austin Matel
// 	10/18/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
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
  makeList(200,list);
  console.log(list);
  for(var i = 0; i < list.length - 1; i++){
    var index = i;
    for (var j = i + 1; j < list.length; j++){
      if(list[j] < list[index]){
        index = j;
        }
      }
      var smallerNumber = list[index];
      list[index] = list[i];
      list[i] = smallerNumber;
    }
    console.log(list);
  }
