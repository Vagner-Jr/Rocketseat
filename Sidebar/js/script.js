const btnSidebar = document.querySelector(".btn-sidebar");

btnSidebar.addEventListener("click", () => {
    const sidebar = document.querySelector('body > div')
    sidebar.classList.toggle('sidebar')
});