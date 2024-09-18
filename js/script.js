
let iconeOlho = document.querySelector(".fa-regular");

iconeOlho.addEventListener("click", (e)=>{
  
    let inputSenha = document.querySelector('#senha'); 
     
  if (e.target.className == "fa-regular fa-eye-slash"){
    e.target.setAttribute("class", "fa-regular fa-eye");
    inputSenha.setAttribute("type", "password");
  } else {
    e.target.setAttribute("class", "fa-regular fa-eye-slash");
    inputSenha.setAttribute("type","text");
  }
});