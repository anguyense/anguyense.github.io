function toggleCourse() {
    var hiddenText = document.getElementById("hidden-coursework");
    var btnText = document.getElementById("show-course");
    if (hiddenText.style.display === "none")
    {
        hiddenText.style.display = "block";
        btnText.innerHTML = "Hide Relevant Coursework";
    }
    else
    {
        hiddenText.style.display = "none";
        btnText.innerHTML = "Show Relevant Coursework";
    }
}