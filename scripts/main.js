const dialog = document.querySelector(".messages")
const message = document.querySelector(".messages__text")

document.querySelector(".container")
    .addEventListener("click", e => {

        if (e.target.id === "button--closeMessage") {
            e.target.parentNode.close()
        }
    })


document.querySelector(".container")
    .addEventListener("click", clickEvent => {

        if (clickEvent.target.id === "purchase__itunes") {
            message.innerHTML = "Purchasing song on iTunes..."
            dialog.show()
        }

        if (clickEvent.target.classList.contains("artist")) {
            message.innerHTML = "Donald Tai Loy Ho was born in 1930 in Honolulu, Hawaii"
            dialog.show()
        }



        if (clickEvent.target.id === "purchase__googleplay") {
            message.innerHTML = "Purchasing song on Google Play..."
            dialog.show()
        }
    })



document.querySelector(".container")
    .addEventListener("mouseover", event => {

        if (event.target.classList.contains("lyrics__text")) {
            event.target.classList.add("highlightWithGoldenrod")
        }
    })

document.querySelector(".container")
    .addEventListener("mouseout", event => {

        if (event.target.classList.contains("lyrics__text")) {
            event.target.classList.remove("highlightWithGoldenrod")
        }
    })


