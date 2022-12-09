let clickAdd = false;
var count = 0;

if (window.location.href.includes("detail.html")) {
    window.addEventListener("load", function () {
        const addBtn = document.getElementById("add");

        addBtn.addEventListener("click", function () {
            if (clickAdd == false) {
                clickAdd = true;
                alert("You have added item into cart");
                count++;
                saveToLocalStorage();
            } else {
                alert("You have more item into cart");
                count++;
                saveToLocalStorage();
            }
        });
    });
} else if (window.location.href.includes("cart.html")) {
    window.addEventListener("load", function () {
        const continueBtn = document.getElementById("continueBtn");
        const orderTable = document.getElementById("orderTable");
        const totalTable = document.getElementById("totalTable");
        const totalCount = document.getElementById("total-count");
        const totalPrice = document.getElementById("total-price");
        const tCount = document.getElementById("t-count");
        const tPrice = document.getElementById("t-price");

        readFromLocalStorage();
        if (clickAdd) {
            totalCount.innerHTML = "x" + count;
            totalPrice.innerHTML = count*49 + ":-";
            tCount.innerHTML = "x" + count;
            tPrice.innerHTML = count*49 + ":-";
            continueBtn.style.visibility = "visible";
            orderTable.style.visibility = "visible";
            totalTable.style.visibility = "visible";
        } else if (clickAdd === false) {
            alert("You don't have any items in the cart yet!!");
            continueBtn.style.visibility = "hidden";
            orderTable.style.visibility = "hidden";
            totalTable.style.visibility = "hidden";
        }
    });
} else if (window.location.href.includes("checkout.html")) {
    window.addEventListener("load", function () {
        const finishBtn = document.getElementById("finishBtn");
        const totalCount = document.getElementById("total-count");
        const totalPrice = document.getElementById("total-price");
        const tCount = document.getElementById("t-count");
        const tPrice = document.getElementById("t-price");

        finishBtn.addEventListener("click", function () {
            if (clickAdd == true) {
                clickAdd = false;
                saveToLocalStorage();
            }
        });

        readFromLocalStorage();
        totalCount.innerHTML = "x" + count;
        totalPrice.innerHTML = count*49 + ":-";
        tCount.innerHTML = "x" + count;
        tPrice.innerHTML = count*49 + ":-";
    });
}

function saveToLocalStorage() {
    localStorage.clickAdd = clickAdd;
    localStorage.count = count;
}
  
function readFromLocalStorage() {
    clickAdd = localStorage.clickAdd === "true";
    count = parseInt(localStorage.count)
}