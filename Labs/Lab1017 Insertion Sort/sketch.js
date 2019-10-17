// 	Date or version number
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
  makeList(2500,list);
  for(var i = 0; i < list.length - 1; i++){
    for (j = 0; j < list.length - 1 - i; j++){
      var x;
      x = list[i];
      list.splice(i,1);
      if(list[j] > list[i + j]){
        swap(list, j, j + 1);
      }
    }
  }
  console.log(list);
}
