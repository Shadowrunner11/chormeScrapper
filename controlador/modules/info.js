
export let array;
export function injectedFunction (){
    Array.from(document.getElementsByClassName("pv-profile-section__see-more-inline")).forEach(e=>e.click())
    let array = Array.from(document.getElementsByClassName("pv-entity__school-name"))
    let text = Array.from(document.getElementsByTagName("h1"))[0]
    console.log([text.innerText, ...array.map(e=>e.innerText)])

    array = [text.innerText, ...array.map(e=>e.innerText)]
    return array
}



