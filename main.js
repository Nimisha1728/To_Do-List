
$(document).ready(function(){

    var res="";
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           
            var response=JSON.parse(this.responseText);
            res+="<ul>";
            
            response.forEach((el,index)=>{
                 res+=`<li class="list-group-item ${el.completed?'disabledList':''} ${el.completed?'list-group-item-info':'list-group-item-secondary'}"> <input type="checkbox" class="checkbox"  ${el.completed?'checked':''}/> <label for=""> ${el.title}</label></li>`
            //  if(el.completed==true){
            //      res+='<li class="list-group-item <input type="checkbox" class="checkbox" checked disabled><label>'+el.title+'</label><br>';
                 
            //  }else{
            //      res+='<input type="checkbox" class="checkbox"><label>'+el.title+'</label><br>';
            //  }
               
            });
            res+="</ul>";
            $("#list").html(res);
           
        }
    }

        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();

        let count=0;
        function check(cnt){
               return new Promise(function(resolve,reject){ 
               if(cnt===5){
                  resolve('successs');
               }
              else{

                  reject('error');
              }
           
             });
            }
    
        $(document).on('change','.checkbox',function(){
                if(this.checked){            
                count++;
                if ($(this).checked == false) {
                    count--;
        
                }
                let promise=check(count);
                promise
                .then(function(){
                    alert("Congrats!! 5 Tasks have been Successfully Completed");
                })
                .catch(function(){
                    console.log("checked");
                })
            }

           
        });

       
       
});

