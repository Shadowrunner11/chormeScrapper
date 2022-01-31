
import {notification} from "./modules/notifications.js"
import {addPublication,openDb,} from "./modules/modelo.js"

openDb()
 
chrome.commands.onCommand.addListener(notification)

chrome.action.onClicked.addListener(tab=>{
    
  chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files:["./controlador/modules/info.js"],
        //function: (/^https:\/\/www.linkedin.com\/in\//).test(tab.url)? 
            //injectedFunction:
            //()=>{alert('No estas en un perfil de linkedin para usar el scrapper')}
    })
})

chrome.runtime.onMessage.addListener(function (m){
    console.log(m);
    addPublication(m)
})