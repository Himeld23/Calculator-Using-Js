let btnvalues = document.querySelectorAll(".btn");
let showmeresult = document.getElementById("showtheresult");

btnvalues.forEach(btn =>{
 let btntext = btn.innerText 
 btn.addEventListener("click" ,()=>{
     if(btntext === "C"){
         showmeresult.value = ""
     } else if (btntext === "DEL"){
         showmeresult.value = showmeresult.value.slice(0,-1)
     } else if (btntext === "="){
         try{
             showmeresult.value = eval(showmeresult.value)
         } catch (error) {
             showmeresult.value = "error"
         }
     } else {
         showmeresult.value += btntext
     }
 })
})
