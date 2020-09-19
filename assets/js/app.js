document.addEventListener('DOMContentLoaded', function () {

    // Declaring variables
    const desc = document.querySelector('#description')
    const specs = document.querySelector('#specs')
    const goodFor = document.querySelector('#good-for')

    const divs = document.querySelector(".about-divs")

    const play = document.querySelector(".play-btn")
    const popUp = document.querySelector(".pop-up")

    // Event Listeners
    desc.addEventListener("click", function () {
        specs.classList.remove("selected")
        goodFor.classList.remove("selected")
        desc.classList.add("selected")

        divs.classList.add("margin-left-1")
        divs.classList.remove("margin-left-2", "margin-left-3")
    })

    specs.addEventListener("click", function () {
        desc.classList.remove("selected")
        goodFor.classList.remove("selected")
        specs.classList.add("selected")

        divs.classList.add("margin-left-2")
        divs.classList.remove("margin-left-1", "margin-left-3")
    })

    goodFor.addEventListener("click", function () {
        specs.classList.remove("selected")
        desc.classList.remove("selected")
        goodFor.classList.add("selected")

        divs.classList.add("margin-left-3")
        divs.classList.remove("margin-left-2", "margin-left-1")
    })

    play.addEventListener("click", function () {
        popUp.style.display = "block"
    })
    document.querySelector(".s5-cross").addEventListener("click", function () {
        popUp.style.display = "none"
    })

})
