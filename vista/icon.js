const canvas = new OffscreenCanvas(16,16)
const context = canvas.getContext("2d")
context.clearRect(0,0,16,16)
context.fillStyle = "#00FF00"
context.fillRect(0,0,16,16)
const imgData = context.getImage(0,0,16,16)
chrome.action.setIcon({image:imageData})