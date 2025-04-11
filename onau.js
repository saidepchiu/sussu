// Hàm load file HTML vào phần tử có id tương ứng
function loadComponent(id, file) {
    fetch(file)  // Gửi yêu cầu lấy nội dung file HTML
        .then(response => response.text()) // Chuyển đổi nội dung thành văn bản
        .then(data => document.getElementById(id).innerHTML = data) // Đưa vào phần tử HTML
        .catch(error => console.error('Error loading component:', error)); // Bắt lỗi nếu có
}

// Khi trang web tải xong, nạp các thành phần vào trang chính
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "components/header.html"); // Tải header
    loadComponent("banner", "components/banner.html");   // Tải banner
    loadComponent("footer", "components/footer.html"); // Tải footer
});
