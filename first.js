$(window).ready(function () { 
    function login(userName,password,validate) { 
             // e.preventDefault(); 
         
             validate(); 
     }
        
         function display(){
             if($("#userName").val() === "admin" && $("#password").val() === "12345")
             {
                 window.location.href="todolist.html";
              
                 alert("login success");
             }
             else{
                alert("Invalid login! try again!!");
                return false;
             }
          }
        
    $("button").click(function (){
        login(userName,password,display);
    });

});