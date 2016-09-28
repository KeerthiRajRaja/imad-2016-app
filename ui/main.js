console.log('Loaded!');


//change the text of the main-text
var element=document.getElementById('main-text');
element.innerHTML='New value';


//move the image
var img = document.getElementById('madi');
//var marginleft = 0;
//function moveRight(){
  //  marginleft = marginleft + 1;
    //img.style.marginleft = marginleft + 'px';
//}
img.onclick = function() {
    img.style.marginleft='100px';
    //var interval = setInterval(moveRight, 50);
};