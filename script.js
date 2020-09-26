document.addEventListener("DOMContentLoaded", function (e) {
    let listan = document.getElementById("list");
    let btn = document.getElementById("add_btn");

    listan.addEventListener("click", function(event){
        if (event.target.tagName == "INPUT" && event.target.checked== true){
            event.target.parentNode.style.color="green";
            event.target.parentNode.style.textDecoration= "line-through";
            event.target.parentNode.style.opacity = 0.5;
        }
    })

    
    //add item 
    btn.addEventListener("click", function (e) {
        let todo_input = document.getElementById("input_todo");
        //Skapar barnet som ska va till listan:
        let item = document.createElement("div");
       
/*
        item.style.width = "100%";
        item.style.height = "50px";
        item.style.margin = "5px"
        item.style.background = "lightgrey";
        item.style.color = "white";
        item.style.border = "1px solid red";*/
        
        item.style.cssText = "width:100%; height:50px; background-color:lightgray; margin:5px; border: 1px solid red; border-radius:5px; font-size:1.5em;";
        
 
        //let line = document.createElement("");
        let checkbox = document.createElement("input");
        
        checkbox.type = "checkbox";
        item.innerHTML = todo_input.value;
       
        //appendChild lägger till ett befintligt barn till listan:
        listan.appendChild(item);
        
        item.appendChild(checkbox);
        
        
        todo_input.value = "";
        todo_input.focus();


        // add_to_list.addEventListener("click", function(){
        //     this.remove();
        // })

        
        // let list_items = document.getElementsByTagName("li");
        // for (let list_item of list_items) {
        //     list_item.addEventListener("click", function () {
        //         this.remove();
        //     });
        // }

        
    });

});