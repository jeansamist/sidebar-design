const sidebar = document.querySelector(".sidebar");
const sidebarLinks = sidebar.querySelectorAll(".sidebar-link");
const toggler = sidebar.querySelector(".sidebar-menu-btn");
toggler.addEventListener("click", () => {
  sidebar.classList.toggle("min");
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const oldLinkActived = sidebar.querySelector(".sidebar-link.active");
    oldLinkActived.classList.remove("active");
    link.classList.add("active");
  });
});
