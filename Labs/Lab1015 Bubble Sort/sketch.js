// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [3,7,2,9,10,1];
function setup() {
  function swap(list,a,b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }
  for(var i = 0; i < list.length - 1; i++){
    for (j = 0; j < list.length - 1 - i; j++){
      if(list[j] > list[j + 1]){
        swap(list, j, j + 1);
      }
    }
  }
}
console.log(list);
function makeList(n,list){
  for (var i = 0; i <= n; i++){
    list[i] = random(0, n);
  }
}
