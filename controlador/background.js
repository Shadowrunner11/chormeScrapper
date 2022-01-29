import {injectedFunction} from "./modules/info.js"
import {notification} from "./modules/notifications.js"
import {addPublication,openDb,} from "./modules/modelo.js"

chrome.windows.onCreated.addListener(openDb)
 
chrome.commands.onCommand.addListener(notification)

chrome.action.onClicked.addListener(tab=>{
    
  chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: (/^https:\/\/www.linkedin.com\/in\//).test(tab.url)? 
            injectedFunction:
            ()=>{alert('No estas en un perfil de linkedin para usar el scrapper')}
    })
})

chrome.runtime.onMessage.addListener(function (m){
    console.log(m);
    addPublication(m[0],m.slice(1))
})