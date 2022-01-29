import {injectedFunction} from "./modules/info.js"
import {notification} from "./modules/notifications.js"


chrome.commands.onCommand.addListener(notification)

chrome.action.onClicked.addListener(tab=>{
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: injectedFunction
    })
})
