//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var list = [3,6,1,8,2,9];
  function swap(list,a,b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }
  console.log(list);
  for(var n = 0; n < list.length; n++){
    for(var i = list.length; i > 0; i--){
      a = 0;
      a = a + 1;
      if(list[0] > list[i]){
        swap(list,0,i);
      }
      if(list[a] > list[i]){
        swap(list,i,i+1);
      }
    }
  }
  console.log(list);

}

//  The draw function is called @ 30 fps
function draw() {

}
