document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header"); // Adjust the selector to match your header element
    var heroContainer = document.querySelector(".adjusted-hero");

    function adjustHeroMargin() {
        var headerHeight = header.offsetHeight;
        heroContainer.style.marginTop = headerHeight + "px";
    }

    // Adjust the margin on page load
    adjustHeroMargin();

    // Adjust the margin on window resize
    window.addEventListener("resize", adjustHeroMargin);
});