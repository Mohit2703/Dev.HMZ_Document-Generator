const selected = document.querySelector(".selected");
const optionscontainer = document.querySelector(".option-container");
const optionlist = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
    optionscontainer.classList.toggle("active");
});

optionlist.forEach(o => {
    o.addEventListener("click",() => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionscontainer.classList.remove("active");
    });
});