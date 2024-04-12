const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        // console.log(name,price,category);

        const selectedContainer = document.getElementById("selected-players-container");
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