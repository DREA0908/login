var icon = document.getElementById("icon");

  icon.onclick = function(){
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
  icon.src = "images/sun.png";
  }else{
  icon.src = "moon-solid.svg";
  }
  };
  const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

