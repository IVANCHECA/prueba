var data =[];
function loadList(e) {

    
    if(e.keyCode==13){
        var lista = document.getElementById("lista");
        var campo = document.getElementById("campo");
        var  array =campo.value.split(",");
        if(array.length>=2){
           data = data.concat(array);
            
        }else{
            data.push(campo.value);
        }
        campo.value ="";
        data.sort();
        lista.innerHTML="";
        data.forEach(function(item) {
           addLi(lista,item); 
        })
       

    }
}
function addLi(list,value){
    lista.innerHTML += "<li onclick ='clickItem(\""+value+ "\")'>"+value+"</li>";
}
function clickItem(txt) {
    alert(txt);
}