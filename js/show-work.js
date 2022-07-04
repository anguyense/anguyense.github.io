function toggleWork() {
    var hiddenText = document.getElementById("hidden-work");
    var btnText = document.getElementById("show-work")
    if (hiddenText.style.display === "none")
    {
        hiddenText.style.display = "block";
        btnText.innerHTML = "Show Less";
    }
    else
    {
        hiddenText.style.display = "none";
        btnText.innerHTML = "Show More";
    }
}