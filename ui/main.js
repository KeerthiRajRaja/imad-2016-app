//conter code
var button=document.getElementById('counter');

button.onclick=function(){
  //make a request to the counter endpoint
  var request=new XMLHttpRequest();
  
  
  //capture the responce and share it in a variable
  
  request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE){
        //take some action
        if(request.status===200){
        var counter=request.responseText;
        var span=document.getElementById('count');
        span.innerHTML=counter.toString();
    
        }
    }
    //not yet ddone
      
  };
  
  //make the request
  request.open('GET','http://keerthirajraja.imad.hasura-app/counter',true);
  request.send(null);
  
};