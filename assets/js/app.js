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
<<<<<<< HEAD

=======
        
>>>>>>> 01eb6044e121ae87b2d21c9547b7e0beacc842e6
        divs.classList.add("margin-left-1")
        divs.classList.remove("margin-left-2", "margin-left-3")
    })

    specs.addEventListener("click", function () {
        desc.classList.remove("selected")
        goodFor.classList.remove("selected")
        specs.classList.add("selected")
<<<<<<< HEAD

=======
        
>>>>>>> 01eb6044e121ae87b2d21c9547b7e0beacc842e6
        divs.classList.add("margin-left-2")
        divs.classList.remove("margin-left-1", "margin-left-3")
    })

    goodFor.addEventListener("click", function () {
        specs.classList.remove("selected")
        desc.classList.remove("selected")
        goodFor.classList.add("selected")

        divs.classList.add("margin-left-3")
        divs.classList.remove("margin-left-2", "margin-left-1")
<<<<<<< HEAD
    })

    play.addEventListener("click", function () {
        popUp.style.display = "block"
    })
=======
    })

    play.addEventListener("click", function () {
        popUp.style.display = "block"
    })
>>>>>>> 01eb6044e121ae87b2d21c9547b7e0beacc842e6
    document.querySelector(".s5-cross").addEventListener("click", function () {
        popUp.style.display = "none"
    })

<<<<<<< HEAD
})
=======
});
>>>>>>> 01eb6044e121ae87b2d21c9547b7e0beacc842e6
