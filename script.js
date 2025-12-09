// Main button
const mainBtn = document.getElementById("theme");
const colorMenu = document.getElementById("colorMenu");

// Show / Hide Themes list
mainBtn.addEventListener("click", () => {
    colorMenu.style.display = (colorMenu.style.display === "none") ? "block" : "none";
});

// Theme buttons
const themeButtons = document.querySelectorAll(".themeBtn");

themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.style.backgroundColor = btn.dataset.color;
    });
});


const myButton = document.getElementById("myButton")
myButton.addEventListener("click",()=>{
    alert("SERVER IS DOWN SORRY FOR THE DELAY")
})
