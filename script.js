document.addEventListener("DOMContentLoaded", function () {
    alert("Chào mừng bạn đến với website của FPT Polyschool!");
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown > a");
    const submenu = document.querySelector(".submenu");

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn chuyển trang nếu là thẻ `<a>`
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });

    // Ẩn submenu nếu bấm ra ngoài
    document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target) && !submenu.contains(event.target)) {
            submenu.style.display = "none";
        }
    });
});

