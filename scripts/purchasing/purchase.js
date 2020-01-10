const eventHub = document.querySelector(".container")

export const addPurchaseEventListeners = () => {

    eventHub.addEventListener("click", clickEvent => {

        let theActualMessage = ""

        if (clickEvent.target.id === "purchase__itunes") {
            theActualMessage = "Purchasing song on iTunes..."
        }

        if (clickEvent.target.id === "purchase__googleplay") {
            theActualMessage = "Purchasing song on Google Play..."
        }

        // Build a custom message with the corresponding text
        // Call it "purchaseButtonClicked"
        if (clickEvent.target.id.startsWith("purchase__")) {
            const message = new CustomEvent("purchaseButtonClicked", {
                detail: {
                    songPurchaseMessage: theActualMessage
                }
            })


            // Dispatch that message to the event hub
            eventHub.dispatchEvent(message)

        }
    })
}

