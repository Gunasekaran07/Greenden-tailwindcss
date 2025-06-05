// slecting elements >>

let sidenav=document.getElementById("sidenav")
let menuicon=document.getElementById("menuicon")
let closenav=document.getElementById("closenav")

// giving function..

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search

// Selecting elements
let productContainer = document.getElementById("product-container");
let search = document.getElementById("search");
let productList = productContainer.querySelectorAll("div");
console.log(productList)

// // Adding search functionality
search.addEventListener("keyup", function () {
  let enteredvalue = event.target.value.toUpperCase();

  for (let count = 0; count < productList.length; count++) {
    // Get product name from h1 inside each product card
    let productName = productList[count].querySelector("h1").textContent;
 
    // Check if input matches product name
    if (productName.toUpperCase().indexOf(enteredvalue) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
  }
});
