const dialog = document.querySelector(".messages")
const message = document.querySelector(".messages__text")

document.querySelector("#button--closeMessage")
        .addEventListener("click", e => {
            e.target.parentNode.close()
        })

document.querySelector("#purchase__itunes")
        .addEventListener("click", e => {
    message.innerHTML = "Purchasing song on iTunes..."
    dialog.show()
})

/**
 * When Don Ho's name is clicked, display the following message
 *
 *  "Donald Tai Loy Ho was born in 1930 in Honolulu, Hawaii"
 */

document.querySelector(".artist")
        .addEventListener("click", e => {
    message.innerHTML = "Donald Tai Loy Ho was born in 1930 in Honolulu, Hawaii"
    dialog.show()
})

/**
 * When Google Play store button is clicked, display the following message
 *
 *  "Purchasing song on Google Play..."
 */

document.querySelector("#purchase__googleplay")
        .addEventListener("click", e => {
    message.innerHTML = "Purchasing song on Google Play..."
    dialog.show()
})

/**
 * When an element with class of `lyrics__text` has the mouse enter it
 *  then change the background color to light goldenrod, and the text
 *  color to dark goldenrod. Do not use the CSS :hover pseudo class. Use
 *  JavaScript to add the appropriate class.
 *
 * When the use moves the mouse out of lyrics, remove the CSS that highlights
 *
 */

 const allLyrics = document.querySelectorAll(".lyrics__text") 

 for (const lyricNode of allLyrics) {
     lyricNode.addEventListener("mouseover", mouseOverEvent => {
         lyricNode.classList.add("highlightWithGoldenrod")
     })
     
 lyricNode.addEventListener("mouseout", mouseOverEvent => {
     lyricNode.classList.remove("highlightWithGoldenrod")
 })
 }
