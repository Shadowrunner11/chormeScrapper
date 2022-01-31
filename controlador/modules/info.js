function injectedFunction () {

    const sel = {
        exp: "#experience-section .pv-entity__summary-info",
        edu: "pv-entity__degree-info",
        cert: "pv-certifications__summary-info"
    }

    const getByClass = (className)=> Array.from(document.getElementsByClassName(className))
    const getBySelector = (selectorName)=> Array.from(document.querySelectorAll(selectorName))
    const getData = (vector)=>vector.map(e=>[...Array.from(e.children).map(a=>a?.textContent),e.nextElementSibling?.textContent]);

    [...getByClass("pv-profile-section__see-more-inline"),].forEach(e=>e.click())

    const nodes = getBySelector("div.pv-profile-section-pager").map(a=>Array.from(a.getElementsByTagName("a")).map(b=>b.textContent.replaceAll("  ", "").replaceAll("\n\n\n", ",").replaceAll("\n\n", "")))



    const [experience, education, certifications]=[
        getBySelector(sel.exp),
        getByClass(sel.edu),
        getByClass(sel.cert)].map(e=>getData(e))
    
    const[name] = Array.from(document.getElementsByTagName("h1"))

    let persona = {name:name.textContent, education, certifications, experience}

    console.log(persona)

    chrome.runtime.sendMessage(persona)
}


injectedFunction()
