// selecting side navbar, Menu icon

var sidenavbar = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click", function () {
    sidenavbar.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenavbar.style.right = "-50%"
})

var prosearch = document.getElementById("prosearch")
var procontainer = document.getElementById("procontainer")
var productlistdiv = procontainer.querySelectorAll("div")
var productlist = procontainer.querySelectorAll("h1")


// console.log(productlist[0].textContent.toUpperCase()) // this will give text of h1 uppercase
// console.log(prosearch.value.toUpperCase()) //this will give text of search in uppercase
// productlistdiv[0].style.display="none" // this will delete the whole div
prosearch.addEventListener("keyup", function () {
    for (count = 0; count < productlistdiv.length; count++)
        if (productlist[count].textContent.toUpperCase().indexOf(prosearch.value.toUpperCase()) < 0) {
            productlistdiv[count].style.display="none"
        }
        else{
            productlistdiv[count].style.display="block"
        }

})



