(function(){
    const searchbtn = document.querySelectorAll(".search-btn");
    
        searchbtn.forEach(function(btn){
            btn.addEventListener("click",function(event){
            event.preventDefault();
            const value = event.target.dataset.filter;
            console.log(value);
            const items = document.querySelectorAll(".store-item");
            
                items.forEach(function(item){
                    if(value === "all"){
                        item.style.display = 'block';
                    } else{
                        if(item.getAttribute("data-item") === value){
                            item.style.display = 'block';
                        }else{
                           item.style.display = 'none'; 
                        }
                    }
                });
            });
        });
})();
(function(){
    const searchitem= document.getElementById("searchfor-item");
    const items = document.querySelectorAll(".store-item-name");
    searchitem.addEventListener("keyup", function(){

       let valuename = searchitem.value.toUpperCase().trim();
       items.forEach(function(item){
        let type =  item.textContent;
         let length = valuename.length;
         let match = type.slice(0,length);
         
         console.log(valuename);
         console.log(match);
            if(valuename=== match.toUpperCase().trim()){
            item.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
            console.log("1");
            } else{
            item.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
           
            }
       });
       
       console.log(length);
   
    });   

})();

      

      
        //let xam = items1.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent  ;
       //console.log(xam);