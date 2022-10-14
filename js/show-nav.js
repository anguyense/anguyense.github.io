function toggleNav() {
    var hiddenNav = document.getElementById("nav-list")
    if (hiddenNav.style.display === "block") 
    {
        hiddenNav.style.display = "none";
        // Decrease height of nav to hide links
    }
    else 
    {
        hiddenNav.style.display = "block";
        // Increase height of nav to show all links
    }
}