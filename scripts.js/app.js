const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        // console.log(name,price,category);

        const selectedContainer = document.getElementById("selected-players-container");

        event.target.setAttribute("disabled",false);
       

        

        const firstCartCount = getConvertedValue("cart");
        // console.log(firstCartCount);
        if(firstCartCount + 1 > 6){
            alert("limit sesh ar hobe na");
            return;
        }
        const firstLeftCount = getConvertedValue("left");
        if(firstLeftCount - 1 < 0){
            alert("Ar jete Parbe na");
            return;
        }

        event.target.parentNode.style.backgroundColor = "gray";








        // updated budget::
        const budget = getConvertedValue("budget");
        document.getElementById("budget").innerText = budget - parseInt(price);
        // Update Cart
        const cartCount = getConvertedValue("cart");
        document.getElementById("cart").innerText = cartCount + 1;

        const leftCount = getConvertedValue("left");
        document.getElementById("left").innerText = leftCount - 1;

        // const secondCartCount = getConvertedValue("cart");
        // console.log(secondCartCount);


        const div = document.createElement("div");
        div.classList.add("flex", "gap-5");
        // div.classList.add("px-2");
        div.classList.add("px-2", "container-with-gap");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(price);
        updateGrandTotal();


    });

}








function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
    if (status == undefined) {
                
        document.getElementById("grand-total").innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        
        if(couponCode == "love420"){ 
            const discounted = totalCost * 0.2;
            // console.log(discounted);
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }
        else{
            alert("Please ,Enter a valid coupon code");
        }
    }


}




function updateTotalCost(price) {
    const totalCost = getConvertedValue("total-cost");
    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;
    document.getElementById("total-cost").innerText = sum;
}

function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}







function checkParameter(status){
    // console.log(status);
    if (status == undefined){
        console.log("kichu dei nai");
    }
    else{
        console.log("parameter ache");
    }

}

checkParameter("Mostafa")