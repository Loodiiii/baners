document.addEventListener('DOMContentLoaded', function () {

    // Declaring variables
    const desc = document.querySelector('#description')
    const specs = document.querySelector('#specs')
    const goodFor = document.querySelector('#good-for')

    const descDiv = document.querySelector(".about-desc")
    const specsDiv = document.querySelector(".about-specs")
    const goodForDiv = document.querySelector(".about-goodFor")


    // Event Listeners
    desc.addEventListener("click", function () {
        specs.classList.remove("selected")
        goodFor.classList.remove("selected")
        desc.classList.add("selected")
        specsDiv.classList.remove("block")
        goodForDiv.classList.remove("block")
        descDiv.classList.add("block")
    })

    specs.addEventListener("click", function () {
        desc.classList.remove("selected")
        goodFor.classList.remove("selected")
        specs.classList.add("selected")
        descDiv.classList.remove("block")
        goodForDiv.classList.remove("block")
        specsDiv.classList.add("block")
    })

    goodFor.addEventListener("click", function () {
        specs.classList.remove("selected")
        desc.classList.remove("selected")
        goodFor.classList.add("selected")
        specsDiv.classList.remove("block")
        descDiv.classList.remove("block")
        goodForDiv.classList.add("block")
    })
});