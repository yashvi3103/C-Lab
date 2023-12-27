function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-collapsed');
  }
function togglenavbar() {
    const navu = document.getElementById('navu');
    navu.classList.toggle('snavu-collapsed');
  }
function rotate() {
  const image  = document.querySelector('body');
  image.classList.toggle('rotate')
}
// const dark = document.querySelector('body')
// body.addEventListener("click",()=>{
//   console.log("ok")
  // const body = document.querySelector('body');
  // body.classList.toggle('dark-mode');
// })
      function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }
 