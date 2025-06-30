document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formPago");
    if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.style.display = "none";
        document.getElementById("mensaje").style.display = "block";
    });
    }
});

