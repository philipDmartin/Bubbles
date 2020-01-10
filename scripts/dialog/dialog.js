const eventHub = document.querySelector(".container")
const dialog = document.querySelector(".messages")


export const displayMessageDialog = () => {
    eventHub.addEventListener("purchaseButtonClicked", event => {
        const messageIWillDisplay = event.detail.songPurchaseMessage

        document.querySelector(".messages__item").innerHTML = messageIWillDisplay
        dialog.show()
    })
}

export const handleCloseDialog = () => {
    eventHub.addEventListener("click", e => {

            if (e.target.id === "button--close") {
                e.target.parentNode.close()
            }
        })
}
