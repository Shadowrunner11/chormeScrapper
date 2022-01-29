import {injectedFunction} from "./modules/info.js"
import {notification} from "./modules/notifications.js"


chrome.commands.onCommand.addListener(notification)

chrome.action.onClicked.addListener(tab=>{
    
    (/^https:\/\/www.linkedin.com\/in\//).test(tab.url)
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: (/^https:\/\/www.linkedin.com\/in\//).test(tab.url)? 
            injectedFunction:
            ()=>{alert('No estas en un perfil de linkedin para usar el scrapper')}
    })

})
