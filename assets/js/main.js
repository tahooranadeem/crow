// --------------------    sidebar

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle")
  const sidebar = document.querySelector(".sidebar")
  const closeBtn = document.querySelector(".close-btn")

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open")
  })

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open")
  })
})
