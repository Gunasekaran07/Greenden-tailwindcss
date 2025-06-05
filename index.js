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