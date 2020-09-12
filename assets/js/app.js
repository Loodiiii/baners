document.addEventListener('DOMContentLoaded', function () {

    // Declaring variables
    const desc = document.querySelector('#description')
    const specs = document.querySelector('#specs')
    const goodFor = document.querySelector('#good-for')

    const divs = document.querySelector(".about-divs")


    // Event Listeners
    desc.addEventListener("click", function () {
        specs.classList.remove("selected")
        goodFor.classList.remove("selected")
        desc.classList.add("selected")
        divs.style.marginLeft = "0";
    })

    specs.addEventListener("click", function () {
        desc.classList.remove("selected")
        goodFor.classList.remove("selected")
        specs.classList.add("selected")
        divs.style.marginLeft = "-823px";
    })

    goodFor.addEventListener("click", function () {
        specs.classList.remove("selected")
        desc.classList.remove("selected")
        goodFor.classList.add("selected")
        divs.style.marginLeft = "-1646px";
    })
});