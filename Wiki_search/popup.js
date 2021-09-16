var x = document.getElementById("open_wiki");
var y = document.getElementById("open_wiki1");

y.addEventListener("click",function(){
  window.open("https://www.wikipedia.org/");
})



x.addEventListener("click",function(){
  var y = document.getElementById("input1").value;
  window.open("https://en.wikipedia.org/wiki/"+y,"_blank");

})

// function getvalue(){
//   // d=c.value;
//   var my_window= window.open("https://en.wikipedia.org/wiki/","_blank");
//   d=c.value;
// }
// console.log(c);
// ${"#open_wiki"}.onclick = function () {
//   window.open(
//     "https://en.wikipedia.org/wiki/" + c,
//     "_blank"
//   );
// };
