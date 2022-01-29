export function notification (){
    chrome.notifications.create({
        message:"Hola mundo", 
        title:"Notificacion", 
        type:"basic", 
        iconUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg"
    })
}