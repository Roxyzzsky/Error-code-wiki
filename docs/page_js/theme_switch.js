window.addEventListener('load', function() {
    const meta = document.querySelector('meta[name="special_theme"]');
    if (meta && meta.content === "true") {
        document.body.classList.add("special-theme");
    }
});