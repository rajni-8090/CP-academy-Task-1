// Tabber
function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// see more
function toggleReadMore() {
    const moreTextList = document.querySelectorAll(".more-text");
    const btn = document.getElementById("readMoreBtn");

    moreTextList.forEach(function(moreText) {
        if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.innerText = "See Less";
        btn.classList.add('btn-exp');
        } else {
        moreText.style.display = "none";
        btn.innerText = "See More";
        btn.classList.remove('btn-exp');
        }
    });
}
  
    