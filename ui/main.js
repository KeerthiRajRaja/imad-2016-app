//conter code
var button=document.getElementById('counter');

button.onclick=function(){
  //make a request to the counter endpoint
  var request=new XMLHttpRequest();
  console.log("Button is clicked");
  
  //capture the responce and share it in a variable
  
  request.onreadystatechange=function(){
      console.log("request working");
      //if(request.readystate===XMLHttpRequest.DONE){
        //take some action
        console.log("ready state working");
        if(request.status===200){
            
        var counter=request.responseText;
        console.log("response text",counter);
        var span=document.getElementById('count');
        span.innerHTML=counter.toString();
        }
    //}
    //not yet done
  };
  //make the request
  request.open('GET','http://keerthirajraja.imad.hasura-app.io/counter',true);
  request.send(null);
  
};
//submit name

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make request to the server and send the name
  var request=new XMLHttpRequest();
  
  //capture the responce and share it in a variable
  
  request.onreadystatechange=function(){
    //if(request.readystate===XMLHttpRequest.DONE){
        //take some action
        if(request.status===200){
          //capture a list of names and render it as a list
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
        }
   // }
    //not yet done
      
  };
  
  //make the request
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
  request.open('GET','http://keerthirajraja.imad.hasura-app.io/submit-name?name='+ name,true);
  request.send(null);
    

};