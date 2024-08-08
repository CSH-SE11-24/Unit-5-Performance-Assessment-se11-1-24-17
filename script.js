let button = document.getElementById("buttons")

button.addEventListener("mouseover", function(event){
  button.style.backgroundColor = "#7d380c" 
  button.style.color = "white"


})

button.addEventListener("mouseout", function(event){
  button.style.backgroundColor = "black" 
  button.style.color = "white"


})

let ptag = document.querySelectorAll("p")

for(let i =0; i<ptag.length; i++){
  ptag[i].addEventListener("mouseover", function(event){
    ptag[i].style.transform = "scale(1.1)"
    ptag[i].style.cursor = "pointer"



  })

  ptag[i].addEventListener("mouseout", function(event){
  ptag[i].style.transform = "scale(1.0)"
  ptag[i].style.cursor = "pointer"
  })
}