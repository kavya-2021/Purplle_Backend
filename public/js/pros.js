
    let count = 0;

   
    // import nav from './comp/navjs.js';

    // var div = document.getElementById("thatDiv");

    // div.innerHTML = nav();

    let cartArray = JSON.parse(localStorage.getItem("cartItems")) || [];

  

    // From Here till next Comment this is all related to slideShow1
    // From Here till next Comment this is all related to slideShow1

    let slideshowData = [1,2,3,4,5,6,7];

    document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1637066830_nyb-web-category-banner-1280x400-1.gif?tr=f-gif)"
 
    function slideShow(count){
       if(count == 0) document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1637066830_nyb-web-category-banner-1280x400-1.gif?tr=f-gif)"
       if(count == 1) document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952181_nybae-lipstips-web-brand-banner-1280_400.jpg)"
       if(count == 2) document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg)";
       if(count == 3) document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1634154410_concealer-palette-web-banner.gif?tr=f-gif)"
       if(count == 4) document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1634154767_web-banner-1280_400.jpg)"
       if(count == 5) document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1639362729_clinique_cateogory_web.jpg)"
       if(count == 6) document.querySelector("#slideShow1").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1630337163_nybae-rise-and-shine-web-category-banner-1280_400.jpg)"
    }

    document.querySelector("#left").addEventListener("click",leftSide)
    document.querySelector("#right").addEventListener("click",rightSide)

    function leftSide() {
        if(count == 0 ){
            count = slideshowData.length -1 ;    
        } 
        else {
            count--;
        }
        slideShow(count);
    }

    function rightSide() {
       if(count == slideshowData.length-1) {
           count = 0;
       }
       else {
        count++;
       }
       slideShow(count);
    }

  let timer = setInterval(function() {
        count++;
        if(count == slideshowData.length-1) count = 0;
        else if (count == 0)  count = slideshowData.length -1 ;
        slideShow(count);
    },3000);

    // From Up till this Comment everything is related to slideShow1
    // From Up till this Comment everything is related to slideShow1

    

    //This is related to filters function on product page based on brand
document.querySelector("#brand_sort").addEventListener("click",brand_sort);
function brand_sort(){

   document.querySelector("#sort_details").innerHTML = ""; 

   let sortDiv = document.createElement("div");
   sortDiv.setAttribute("id","brandSort");
   sortDiv.style.marginLeft = "5.5%";
   sortDiv.onmouseleave = noShow;
   
   let l1l1 = document.createElement("p");
   l1l1.setAttribute("id","l1");
   l1l1.textContent = "Lakme";
   l1l1.onclick = () => {
       brand1()
   }

   let l1l2 = document.createElement("p");
   l1l2.setAttribute("id","l2");
   l1l2.textContent = "Bobbi Brown";
   l1l2.onclick = () => {
       brand2()
   }

   let l1l3 = document.createElement("p");
   l1l3.setAttribute("id","l3");
   l1l3.textContent = "Maybelline";
   l1l3.onclick = () => {
       brand3()
   }

   let l1l4 = document.createElement("p");
   l1l4.setAttribute("id","l4");
   l1l4.textContent = "MAC";
   l1l4.onclick = () => {
       brand4()
   }

   let l1l5 = document.createElement("p");
   l1l5.setAttribute("id","l5");
   l1l5.textContent = "Swiss Beauty"; 
   l1l5.onclick = () => {
       brand5()
   }  
   
   let l1l6 = document.createElement("p");
   l1l6.setAttribute("id","l6");
   l1l6.textContent = "Maliao"; 
   l1l6.onclick = () => {
       brand6()
   }  
   
   let l1l7 = document.createElement("p");
   l1l7.setAttribute("id","l7");
   l1l7.textContent = "Makeup Revolution";
   l1l7.onclick = () => {
       brand7()
   }


   let l1l8 = document.createElement("p");
   l1l8.setAttribute("id","l8");
   l1l8.textContent = "Colorbar";
   l1l8.onclick = () => {
       brand8()
   } 

   let l1l9 = document.createElement("p");
   l1l9.setAttribute("id","l9");
   l1l9.textContent = "NY Bae"; 
   l1l9.onclick = () => {
       brand9()
   }

   let l1l10 = document.createElement("p");
   l1l10.setAttribute("id","l9");
   l1l10.textContent = "L'Oreal Paris";
   l1l10.onclick = () => {
       brand10()
   } 

   let l1l11 = document.createElement("p");
   l1l11.setAttribute("id","l11");
   l1l11.textContent = "Purplle";
   l1l11.onclick = () => {
       brand11()
   } 

   sortDiv.append(l1l1,l1l2,l1l3,l1l4,l1l5,l1l6,l1l7,l1l8,l1l9,l1l10,l1l11);
   document.querySelector("#sort_details").append(sortDiv);

}
    //From Up till this Comment everything is related to brand Sort

    //This is related to filters function on product page based on price
document.querySelector("#price_sort").addEventListener("click",price_sort);
function price_sort() {
   document.querySelector("#sort_details").innerHTML = ""; 

   let sortDiv = document.createElement("div");
   sortDiv.setAttribute("id","priceSort");
   sortDiv.style.marginLeft = "17.5%";
   sortDiv.style.height = "90%";
   sortDiv.onmouseleave = noShow1;
   
   let l1l1 = document.createElement("p");
   l1l1.setAttribute("id","l1");
   l1l1.textContent = "Rs.100 And Below";
   l1l1.onclick = () =>{
      priceRange1(); 
   }

   let l1l2 = document.createElement("p");
   l1l2.setAttribute("id","l2");
   l1l2.textContent = "Rs. 100 - Rs. 200";
   l1l2.onclick = () =>{
      priceRange2(); 
   }
  
   let l1l3 = document.createElement("p");
   l1l3.setAttribute("id","l3");
   l1l3.textContent = "Rs. 200 - Rs. 400";
   l1l3.onclick = () =>{
      priceRange3(); 
   }

   let l1l4 = document.createElement("p");
   l1l4.setAttribute("id","l4");
   l1l4.textContent = "Rs. 400 - Rs. 1000";
   l1l4.onclick = () =>{
      priceRange4();
   }

   let l1l5 = document.createElement("p");
   l1l5.setAttribute("id","l5");
   l1l5.textContent = "Rs. 1000 - Rs. 3000";
   l1l5.onclick = () =>{
      priceRange5(); 
   }   
   
   let l1l6 = document.createElement("p");
   l1l6.setAttribute("id","l6");
   l1l6.textContent = "Rs. 3000 And Above";
   l1l6.onclick = () =>{
      priceRange6(); 
   }  

   sortDiv.append(l1l1,l1l2,l1l3,l1l4,l1l5,l1l6);
   document.querySelector("#sort_details").append(sortDiv);
}
    //From Up till this Comment everything is related to price Sort

    //This is related to filters function on product page based on discount
document.querySelector("#discount_sort").addEventListener("click",discount_sort);
function discount_sort() {

   document.querySelector("#sort_details").innerHTML = ""; 

   let sortDiv = document.createElement("div");
   sortDiv.setAttribute("id","discountSort");
   sortDiv.style.marginLeft = "30.5%";
   sortDiv.style.height = "80%";
   sortDiv.onmouseleave = noShow2;
   
   let l1l1 = document.createElement("p");
   l1l1.setAttribute("id","l1");
   l1l1.textContent = "Up to 10%";
   l1l1.onclick = () => {
       discount1()
   }

   let l1l2 = document.createElement("p");
   l1l2.setAttribute("id","l2");
   l1l2.textContent = "10% to 20%";
   l1l2.onclick = () => {
       discount2()
   }

   let l1l3 = document.createElement("p");
   l1l3.setAttribute("id","l3");
   l1l3.textContent = "20% to 30%";
   l1l3.onclick = () => {
       discount3()
   }

   let l1l4 = document.createElement("p");
   l1l4.setAttribute("id","l4");
   l1l4.textContent = "30% to 40%";
   l1l4.onclick = () => {
       discount4()
   }

   let l1l5 = document.createElement("p");
   l1l5.setAttribute("id","l5");
   l1l5.textContent = "More than 40%";
   l1l5.onclick = () => {
       discount5();
   }   
   
   sortDiv.append(l1l1,l1l2,l1l3,l1l4,l1l5);
   document.querySelector("#sort_details").append(sortDiv);
}
    //From Up till this Comment everything is related to discount Sort

    //This is related to filters function on product page based on benefit
document.querySelector("#benefits_sort").addEventListener("click",benefits_sort);
function benefits_sort(){

   document.querySelector("#sort_details").innerHTML = ""; 

   let sortDiv = document.createElement("div");
   sortDiv.setAttribute("id","benefitsSort");
   sortDiv.style.marginLeft = "42.5%";
   sortDiv.style.height = "95%";
   sortDiv.onmouseleave = noShow3;
   
   let l1l1 = document.createElement("p");
   l1l1.setAttribute("id","l1");
   l1l1.textContent = "Hydrating";
   l1l1.style.color = "rgb(236,89,169)";
   l1l1.onclick = () => {
       hydrating();
   }

   let l1l2 = document.createElement("p");
   l1l2.setAttribute("id","l2");
   l1l2.textContent = "Moisturizing";
   l1l2.style.color = "rgb(236,89,169)";
   l1l2.onclick = () => {
       moisturizer()
   }

   let l1l3 = document.createElement("p");
   l1l3.setAttribute("id","l3");
   l1l3.textContent = "Nourishing";

   let l1l4 = document.createElement("p");
   l1l4.setAttribute("id","l4");
   l1l4.textContent = "Smudgeproof";
   l1l4.style.color = "rgb(236,89,169)";
   l1l4.onclick = () => {
        Smudgeproof()
   }

   let l1l5 = document.createElement("p");
   l1l5.setAttribute("id","l5");
   l1l5.textContent = "waterproof";   
   
   let l1l6 = document.createElement("p");
   l1l6.setAttribute("id","l6");
   l1l6.textContent = "Sweat Proof";
   l1l6.style.color = "rgb(236,89,169)";
   l1l6.onclick = () => {
        Sweatproof()
   }   
   
   let l1l7 = document.createElement("p");
   l1l7.setAttribute("id","l7");
   l1l7.textContent = "Sun Protection"; 

   let l1l8 = document.createElement("p");
   l1l8.setAttribute("id","l8");
   l1l8.textContent = "Easy to Use";
   l1l8.style.color = "rgb(236,89,169)";
   l1l8.onclick = () => {
        Easy_to_Use()
   } 

   let l1l9 = document.createElement("p");
   l1l9.setAttribute("id","l9");
   l1l9.textContent = "Strong Packaging"; 

   let l1l10 = document.createElement("p");
   l1l10.setAttribute("id","l9");
   l1l10.textContent = "light weight"; 
   l1l10.style.color = "rgb(236,89,169)";
   l1l10.onclick = () => {
       lightweight()
   }

   let l1l11 = document.createElement("p");
   l1l11.setAttribute("id","l11");
   l1l11.textContent = "Non sticky"; 

   let l1l12 = document.createElement("p");
   l1l12.setAttribute("id","l12");
   l1l12.textContent = "Long Lasting";
   l1l12.style.color = "rgb(236,89,169)";
   l1l12.onclick = () => {
       longLasting()
   }

   sortDiv.append(l1l1,l1l2,l1l3,l1l4,l1l5,l1l6,l1l7,l1l8,l1l9,l1l10,l1l11,l1l12);
   document.querySelector("#sort_details").append(sortDiv);

}
    //From Up till this Comment everything is related to benefit Sort

    //This is related to filters function on product page based on Skin - Type
document.querySelector("#skin_sort").addEventListener("click",skin_sort);
function skin_sort(){

   document.querySelector("#sort_details").innerHTML = ""; 

   let sortDiv = document.createElement("div");
   sortDiv.setAttribute("id","skinSort");
   sortDiv.style.marginLeft = "55%";
   sortDiv.style.height = "95%";
   sortDiv.onmouseleave = noShow4;
   
   let l1l1 = document.createElement("p");
   l1l1.setAttribute("id","l1");
   l1l1.textContent = "All Skin Types";
   l1l1.style.color = "rgb(236,89,169)";
   l1l1.onclick = () => {
       skin6();
   }

   let l1l2 = document.createElement("p");
   l1l2.setAttribute("id","l2");
   l1l2.textContent = "Dry Skin";

   let l1l3 = document.createElement("p");
   l1l3.setAttribute("id","l3");
   l1l3.textContent = "Oily Skin";

   let l1l4 = document.createElement("p");
   l1l4.setAttribute("id","l4");
   l1l4.textContent = "Combination Skin";
   l1l4.style.color = "rgb(236,89,169)";
   l1l4.onclick = () => {
       skin4()
   }

   let l1l5 = document.createElement("p");
   l1l5.setAttribute("id","l5");
   l1l5.textContent = "Sensitive";   
   
   let l1l6 = document.createElement("p");
   l1l6.setAttribute("id","l6");
   l1l6.textContent = "Normal skin";   
   
   let l1l7 = document.createElement("p");
   l1l7.setAttribute("id","l7");
   l1l7.textContent = "Acne-Prone Skin"; 
   l1l7.style.color = "rgb(236,89,169)";
   l1l7.onclick = () => {
       skin7();
   }

   sortDiv.append(l1l1,l1l2,l1l3,l1l4,l1l5,l1l6,l1l7);
   document.querySelector("#sort_details").append(sortDiv);

}
    //From Up till this Comment everything is related to skin-type Sort

    //This is related to filters function on product page based on relevance
document.querySelector("#relevance_sort").addEventListener("click",relevance_sort);
function relevance_sort(){

   document.querySelector("#sort_details").innerHTML = ""; 

   let sortDiv = document.createElement("div");
   sortDiv.setAttribute("id","relevanceSort");
   sortDiv.style.marginLeft = "90.5%";
   sortDiv.style.width = "14%";
   sortDiv.style.height = "95%";
   sortDiv.onmouseleave = noShow5;
   
   let l1l1 = document.createElement("p");
   l1l1.setAttribute("id","relevance1");
   l1l1.textContent = "Relevance";
   l1l1.style.color = "pink";

   let l1l2 = document.createElement("p");
   l1l2.setAttribute("id","disco");
   l1l2.textContent = "Discount";
   l1l2.onclick = () => {
       discount_Desc();
   }

   let l1l3 = document.createElement("p");
   l1l3.setAttribute("id","high");
   l1l3.textContent = "High Price";
   l1l3.onclick = () => {
       highTolow();
   }

   let l1l4 = document.createElement("p");
   l1l4.setAttribute("id","low");
   l1l4.textContent = "low Price";
   l1l4.onclick = () => {
       lowTohigh();
   }

   let l1l5 = document.createElement("p");
   l1l5.setAttribute("id","rating");
   l1l5.textContent = "Average Rating";
   l1l5.onclick = () => {
       ratingDown();
   }
   
   sortDiv.append(l1l1,l1l2,l1l3,l1l4,l1l5);
   document.querySelector("#sort_details").append(sortDiv);

}
    //From Up till this Comment everything is related to relevance Sort


function noShow(){
    document.querySelector("#brandSort").style.display = "none";
    document.querySelector("#brand_sort").addEventListener("click",brand_sort);  
}
function noShow1(){
       document.querySelector("#priceSort").style.display = "none";
    document.querySelector("#price_sort").addEventListener("click",price_sort);  
}
function noShow2(){
       document.querySelector("#discountSort").style.display = "none";
    document.querySelector("#discount_sort").addEventListener("click",discount_sort);  
}
function noShow3(){
       document.querySelector("#benefitsSort").style.display = "none";
    document.querySelector("#benefits_sort").addEventListener("click",benefits_sort);  
}
function noShow4(){
       document.querySelector("#skinSort").style.display = "none";
    document.querySelector("#skin_sort").addEventListener("click",skin_sort);  
}
function noShow5(){
       document.querySelector("#relevanceSort").style.display = "none";
    document.querySelector("#relevance_sort").addEventListener("click",relevance_sort);  
}


let url = "http://localhost:4905/products/faceproducts";


    async function getTheData(url){
        let res = await fetch(url);
        let data = await res.json();
        return data;
}
const products = getTheData(url);

console.log(products)

    //This is related to data of products Information 
  
let contain_Div = document.querySelector("#container_products");

ShowProductsOnMain(products,cartArray);

function ShowProductsOnMain(products,cartArray){
    contain_Div.innerHTML = "";
    document.querySelector("#ForNoShow").innerHTML = "";
    products.map(function(item,index){
        console.log("I'm here");
        let Mdiv = document.createElement("div");
        Mdiv.setAttribute("id","Mdiv");
        Mdiv.style.cursor = "pointer";

        var overlayDiv = document.createElement('div');
        overlayDiv.setAttribute("id","overlay");

        let btn = document.createElement("button");
        btn.textContent = "ADD TO CART";
        btn.setAttribute("id","toCartBtn1")
        btn.addEventListener("click",function(){
            addtoCart(item,index,cartArray)
        });

        overlayDiv.append(btn);
        Mdiv.append(overlayDiv);

        let image = document.createElement("img");
        image.src = item.image_url[0];
        image.onclick = ()=> {
            redirectedProduct(item);
        };

        let title = document.createElement("p");
        title.setAttribute("id","nameofprod")
        title.textContent = item.title;
        title.addEventListener("click", function(){
            redirectedProduct(item);
        });

        let prices = document.createElement("div");
        prices.setAttribute("id","price_item0nDiv");
        prices.style.marginTop = "-18px"
            
        let price = document.createElement("p");
        price.style.fontSize = "17px";
        let finalprice = Math.round((item.price * (1-item.discount))) 
        price.innerHTML = `₹${finalprice}`;


        let mrp = document.createElement("p");
        mrp.style.fontSize = "14px";
        mrp.innerHTML = item.price;
        mrp.style.color = "grey"
        mrp.style.textDecoration = "line-through";

        let discount = document.createElement("p");
        discount.style.fontSize = "15px";
        discount.style.color = "#ec008c";
        let newPer = item.discount*100
        discount.innerHTML = `${newPer}% off`

        prices.append(price,mrp,discount);
        prices.addEventListener("click", function(){
            redirectedProduct(item);
        });

        let rating = document.createElement("div");
        let ratingtag = document.createElement("p");
        ratingtag.innerHTML = `${item.rating} <i style="font-size:8px" class="fas fa-star"></i>` ;
        rating.setAttribute("id","ratingOf");
        rating.append(ratingtag);
        if(item.rating < 4.0 && item.rating >= 2) rating.style.backgroundColor = "#cdd614";
        if(item.rating < 2.5) rating.style.backgroundColor = "#ff7800"
        rating.addEventListener("click", function(){
            redirectedProduct(item);
        });

        Mdiv.append(image, title, prices,rating);
        contain_Div.append(Mdiv);

    })
}

function addtoCart(item,index,cartArray){
    let toCartItem = item;
    let uniqueId = item.id;
    let count = 0;
    for(let i = 0; i < cartArray.length ; i++){
        if(uniqueId == cartArray[i].id) alert("Item already exists in cart");
        else count++;
    }
    if(count == cartArray.length){
       document.querySelector("#toCartBtn1").innerHTML = "ADDED TO CART";
       cartArray.push(toCartItem);
       localStorage.setItem("cartItems", JSON.stringify(cartArray));
       alert("Item added to cart! Successfully")  
    }   
 }

 function redirectedProduct(item){
    let data = item;
    localStorage.setItem("DataIndivi",JSON.stringify(data));
    window.location.href = "productDetails.html";
}



function priceRange1(){
    let max = 100;
    let newProd = products.filter(function(item){
         if(item.price <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function priceRange2(){
    let min = 100;
    let max = 200;
    let newProd = products.filter(function(item){
         if(item.price > min && item.price <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function priceRange3(){
    let min = 200;
    let max = 400;
    let newProd = products.filter(function(item){
         if(item.price > min && item.price <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function priceRange4(){
    let min = 400;
    let max = 1000;
    let newProd = products.filter(function(item){
         if(item.price > min && item.price <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function priceRange5(){
    let min = 1000;
    let max = 3000;
    let newProd = products.filter(function(item){
         if(item.price > min && item.price <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function priceRange6(){
    let min = 3000;
    let newProd = products.filter(function(item){
         if(item.price > min) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}

function brand1(){
    let newProd = products.filter(function(item){
         if(item.brand === "Lakme") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand2(){
    let newProd = products.filter(function(item){
         if(item.brand === "Bobbi Brown") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand3(){
    let newProd = products.filter(function(item){
         if(item.brand === "Maybelline") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand4(){
    let newProd = products.filter(function(item){
         if(item.brand === "MAC") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand5(){
    let newProd = products.filter(function(item){
         if(item.brand === "Swiss Beauty") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand6(){
    let newProd = products.filter(function(item){
         if(item.brand === "Maliao") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand7(){
    let newProd = products.filter(function(item){
         if(item.brand === "Makeup Revolution") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand8(){
    let newProd = products.filter(function(item){
         if(item.brand === "Colorbar") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand9(){
    let newProd = products.filter(function(item){
         if(item.brand === "NY Bae") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand10(){
    let newProd = products.filter(function(item){
         if(item.brand === "L'Oreal Paris") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function brand11(){
    let newProd = products.filter(function(item){
         if(item.brand === "Purplle") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}

function discount1(){
    let max = 0.1;
    let newProd = products.filter(function(item){
         if(item.discount <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function discount2(){
    let min = 0.1
    let max = 0.2;
    let newProd = products.filter(function(item){
         if(item.discount > min && item.discount <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function discount3(){
    let min = 0.2
    let max = 0.3;
    let newProd = products.filter(function(item){
         if(item.discount > min && item.discount <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function discount4(){
    let min = 0.3
    let max = 0.4;
    let newProd = products.filter(function(item){
         if(item.discount > min && item.discount <= max) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function discount5(){
    let min = 0.4
    let newProd = products.filter(function(item){
         if(item.discount > min) return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}

function skin4(){
    let newProd = products.filter(function(item){
         if(item.skin_type === "Combination Skin") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function skin6(){
    let newProd = products.filter(function(item){
         if(item.skin_type === "All Skin Types") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function skin7(){
    let newProd = products.filter(function(item){
         if(item.skin_type === "Acne-Prone Skin") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}

function discount_Desc(){
     let newProd = products.sort(function(a,b){
             return b.discount - a.discount ;
         });
    ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function  highTolow(){
    let  newProd = products.sort(function(a,b){
             return b.price - a.price ;
         });
    ShowProductsOnMain(newProd,contain_Div,cartArray)     
}
function lowTohigh(){
    let  newProd = products.sort(function(a,b){
             return a.price - b.price ;
         });
    ShowProductsOnMain(newProd,contain_Div,cartArray)     
}
function ratingDown(){
    let  newProd = products.sort(function(a,b){
             return b.rating - a.rating ;
         });
    ShowProductsOnMain(newProd,contain_Div,cartArray)     
}

function  hydrating(){
    let newProd = products.filter(function(item){
         if(item.oneBenefit === "Hydrating") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function longLasting(){
    let newProd = products.filter(function(item){
         if(item.oneBenefit === "Long Lasting") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function moisturizer(){
    let newProd = products.filter(function(item){
         if(item.oneBenefit === "Moisturizing") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function lightweight(){
    let newProd = products.filter(function(item){
         if(item.oneBenefit === "Light Weight") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function Smudgeproof(){
    let newProd = products.filter(function(item){
         if(item.oneBenefit === "Smudgeproof") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function Sweatproof(){
    let newProd = products.filter(function(item){
         if(item.oneBenefit === "Sweat Proof") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}
function Easy_to_Use(){
    let newProd = products.filter(function(item){
         if(item.oneBenefit === "Easy to Use") return item;
    })
    if(newProd.length === 0) NotAvailable()
    else ShowProductsOnMain(newProd,contain_Div,cartArray)
}

function NotAvailable(){
    contain_Div.innerHTML = "";
    document.querySelector("#ForNoShow").innerHTML = "";
    let pNop = document.createElement("h1");
    pNop.textContent = "No Products Available";
    document.querySelector("#ForNoShow").append(pNop);  
}
