function ShowProductsOnMain(products,location,cartArray){
    location.innerHTML = "";
    document.querySelector("#ForNoShow").innerHTML = "";
    products.map(function(item,index){
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
        location.append(Mdiv);
    })
}

function addtoCart(item,index,cartArray){
    let toCartItem = item;
    let uniqueId = item.code;
    let count = 0;
    for(let i = 0; i < cartArray.length ; i++){
        if(uniqueId == cartArray[i].code) alert("Item already exists in cart");
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

export default ShowProductsOnMain ;