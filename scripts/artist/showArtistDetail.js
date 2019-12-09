const dialog = document.querySelector(".messages")
const message = document.querySelector(".messages__text")
const eventHub = document.querySelector(".container")

export const artistEventClickHandler = () => {

    eventHub.addEventListener("click", clickEvent => {

        if (clickEvent.target.classList.contains("artist")) {
            message.innerHTML = "Donald Tai Loy Ho was born in 1930 in Honolulu, Hawaii"
            dialog.show()
        }

    })

}
