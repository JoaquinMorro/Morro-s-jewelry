const reload=document.getElementById("Reload");
reload.addEventListener("click",()=>{
    location.reload();
});

function darkMode(){
    const body = document.body;
    body.classList.toggle("dark-mode");
}
