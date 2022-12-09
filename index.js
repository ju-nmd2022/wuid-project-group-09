let clickAdd = false;

if (window.location.href.includes("detail.html")) {
    window.addEventListener("load", function () {
        const addBtn = document.getElementById("add");

        addBtn.addEventListener("click", function () {
            if (clickAdd == false) {
                clickAdd = true;
                alert("You have added item into cart");
                saveToLocalStorage();
            }
        });
    });
} else if (window.location.href.includes("cart.html")) {
    window.addEventListener("load", function () {
        const continueBtn = document.getElementById("continueBtn");
        const orderTable = document.getElementById("orderTable");
        const totalTable = document.getElementById("totalTable");

        readFromLocalStorage();
        if (clickAdd) {
            continueBtn.style.visibility = "visible";
            orderTable.style.visibility = "visible";
            totalTable.style.visibility = "visible";
        } else if (clickAdd === false) {
            continueBtn.style.visibility = "hidden";
            orderTable.style.visibility = "hidden";
            totalTable.style.visibility = "hidden";
            alert("You don't have any items in the cart yet!!");
        }
    });
} else if (window.location.href.includes("checkout.html")) {
    window.addEventListener("load", function () {
        const finishBtn = document.getElementById("finishBtn");

        finishBtn.addEventListener("click", function () {
            localStorage.clear();
        });
    });
}

function saveToLocalStorage() {
    localStorage.clickAdd = clickAdd;
}
  
function readFromLocalStorage() {
    clickAdd = localStorage.clickAdd === "true";
}