const aboutBtn = document.getElementById("aboutBtn");
const moreInfo = document.getElementById("moreInfo");

aboutBtn.addEventListener("click", function () {

    if (moreInfo.classList.contains("show")) {
        moreInfo.classList.remove("show");
        aboutBtn.textContent = "Know More";
    } else {
        moreInfo.classList.add("show");
        aboutBtn.textContent = "Show Less";
    }

});
