function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('copy',(event)=>{
  
    event.clipboardData.setData("text/plain","ILOVEYOU10119");
    event.preventDefault();
})
