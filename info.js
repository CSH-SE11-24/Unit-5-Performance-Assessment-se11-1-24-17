let firstH = document.getElementById("affected")
let secondH = document.getElementById("emission")
let image = document.getElementById("image")
let ptag = document.querySelectorAll("p")

for(let i =0; i<ptag.length; i++){
  ptag[i].addEventListener("mouseover", function(event){
    ptag[i].style.color = "white"
    ptag[i].style.cursor = "pointer"



  })

  ptag[i].addEventListener("mouseout", function(event){
  ptag[i].style.color = "black"
  ptag[i].style.cursor = "pointer"
  })
}

firstH.addEventListener("mouseover", function(event){
  firstH.textContent = "So lets Fight"
})

firstH.addEventListener("mouseout", function(event){
  firstH.textContent = "We are all Affected. "
})

secondH.addEventListener("mouseover", function(event){
  secondH.textContent = "Its Now Here "
})

secondH.addEventListener("mouseout", function(event){
  secondH.textContent = "Mission to stop Emissions "
})




image.addEventListener("mouseover", function(event){
  image.style.transform = "scale(1.1)"  
  image.style.cursor = "pointer"


})

image.addEventListener("mouseout", function(event){
  image.style.transform = "scale(1.0)"  



})