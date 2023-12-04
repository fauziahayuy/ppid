document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("myTextarea");

    textarea.addEventListener("focus", function () {
        this.classList.add("focused");
    });

    textarea.addEventListener("blur", function () {
        this.classList.remove("focused");
    });
});