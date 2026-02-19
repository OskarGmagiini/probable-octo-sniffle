const burger=document.querySelector(".burger-nav");
const sideMenu=document.querySelector(".sideMenu");
console.log(sideMenu);
console.log(burger);
var show = false;








const products = document.querySelectorAll(".product");

products.forEach(product => {
  product.addEventListener("mouseenter", () => {
    product.classList.add("active");
    
    
    

    })


  });

  product.addEventListener("mouseleave", () => {
    product.classList.remove("active");
  });









burger.addEventListener("click",function(){
    console.log("Burger has been clicked")
    if(show == false){
        sideMenu.classList.add("sideMenuShow")
        sideMenu.classList.remove("sideMenuHide")
        show=true
        


    }else if(show == true){
        sideMenu.classList.add("sideMenuHide")
        sideMenu.classList.remove("sideMenuShow")
        show=false
    }




})

