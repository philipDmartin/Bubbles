import { addPurchaseEventListeners } from "./purchasing/purchase.js"
import { handleCloseDialog, displayMessageDialog } from "./dialog/dialog.js"
import { highlightLyricsEvents } from "./lyrics/lyricHighlighter.js"
import { artistEventClickHandler } from "./artist/showArtistDetail.js"

addPurchaseEventListeners()
handleCloseDialog()
highlightLyricsEvents()
artistEventClickHandler()
displayMessageDialog()



