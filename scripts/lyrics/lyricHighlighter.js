const eventHub = document.querySelector(".container")

export const highlightLyricsEvents = () => {

    eventHub.addEventListener("mouseover", event => {

        if (event.target.classList.contains("lyrics__text")) {
            event.target.classList.add("highlightWithGoldenrod")
        }
    })

    eventHub.addEventListener("mouseout", event => {

        if (event.target.classList.contains("lyrics__text")) {
            event.target.classList.remove("highlightWithGoldenrod")
        }
    })
}



