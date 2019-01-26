document.getElementById("cart-info").addEventListener
("click",function(){
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
});
(function(){
    const cart = document.getElementById("cart");
    const cartBtn = document.querySelectorAll(".store-item-icon");
    const total = document.querySelector(".cart-total-container");
    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){
            event.preventDefault();
        if(event.target.parentElement.classList.contains("store-item-icon")){
              let fullpath = event.target.parentElement.previousElementSibling.src;
              let pos = fullpath.indexOf("imagescars") + 10;
              let partpath = fullpath.slice(pos);
              const item = {};
              item.img = `imagescars${partpath}`;
             let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
             item.name= name;
             let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
             let finalprice = price.slice(1).trim();
             item.price = finalprice;
             addItem(item);     
        }
             deletebutton();
        });         
    });
    
    const clearcart = document.getElementById("clear-cart");
    clearcart.addEventListener("click", function(){
         const items = cart.querySelectorAll(".cart-item");
         if(items.length > 0){
            items.forEach(function(item){
                cart.removeChild(item);
            });
         }
         showTotal();
    });
    
    function addItem(item){
        const cartItem= document.createElement("div");
             cartItem.classList.add(
                "cart-item",
                "d-flex",
                "justify-content-between",
                "my-3"
             );
                cartItem.innerHTML =
                `
                <img src="${item.img}" class="img-fluid rounded-circle img-smaller" id="item-img">
                    <div class="item-text mt-2">
                        <p id="cart-item-title" class="font-weight-bold mb-0"> ${item.name}</p>
                        <span>$</span>
                        <span class="cart-item-price mb-0" id="cart-item-price">${item.price}</span>
                    </div>
                        <a id="cart-item-remove" class="cart-item-remove mt-4">
                            <i class='fas fa-trash' style='font-size:24px;color:#A9DEF9'></i>
                        </a>
                </div>
                `;
                
                cart.insertBefore(cartItem,total);
                showTotal();
                
    }
    function deletebutton(){
        const items = cart.querySelectorAll(".cart-item");
        items.forEach(function(item){
           item.querySelector(".cart-item-remove").addEventListener("click",function(){
            setTimeout(function(){  
                cart.removeChild(item);
                showTotal();
            },100);
           });
        });
        
    }
    function showTotal(){
        const total = [];
        const items= document.querySelectorAll(".cart-item-price");
        
        items.forEach(function(item) {
            total.push(parseFloat(item.textContent));
        });
        
        const totalMoney = total.reduce(function(total, item){
           total += item;
           return total;
        },0);
        const finalMoney = totalMoney.toFixed(2);
        document.getElementById("cart-total").textContent = finalMoney;
        document.querySelector(".item-count").textContent = total.length;
        document.querySelector(".item-total").textContent = finalMoney;
       
    }
})();