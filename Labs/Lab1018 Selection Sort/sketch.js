// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var arr = [];
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
  makeList(5,list);
  console.log(list);
  for(var i = 0; i === list.length; i++){
    i--;
    for (j = 0; j > list.lenght; j++){
      if(list[j] < list[i]){
        swap(list, j, i);
        append(arr, list[i]);
        }
      }
    }
    console.log(arr);
  }
