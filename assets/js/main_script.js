var deletelistarr=[];

var deletebutton = document.getElementById('deletebutton');
var inputs= document.getElementsByTagName('input');
console.log("main_script rendering");

deletebutton.onclick = function () {
    console.log("onclick function calling");
     deletelistarr=[];
    for (i = 0; i < inputs.length; i++) {
 
        if (inputs[i].checked) {
            deletelistarr.push(inputs[i].value);
          }
    }
    console.log(deletelistarr);

    delete_server();

}


function delete_server()
{
    console.log("in ajax function");
var deleteurl = "http://localhost:8000/deletelist/?deletelist="+deletelistarr;
    $.ajax({

        url:'http://localhost:8000/deletelist',
        method: 'POST',
        data:{deletelist:deletelistarr},
        success: function(response){
          console.log("success ajax calling")
        
        }
        
        
        });
}