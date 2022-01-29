class Person{
    constructor(name, education, licences, experiencie){
        this.name = name
        this.education = education
        this.licences =licences
        this.experiencie = experiencie
    }
}

class EducationInfo{
    constructor(place, title, duration){
        this.place=place
        this.title=title
        this.duration=duration
    }
}

class Licence{
    constructor(title, place, start, vencimiento){
        this.title =title
        this.place =place
        this.start=start
        this.vencimiento=vencimiento
    }
}

class ExperienceInfo{
    constructor(cargo, place, duration){
        this.cargo = cargo
        this.place =place
        this.duration = duration
    }
}


export function injectedFunction (){
    function getByClass(classN){ return Array.from(document.getElementsByClassName(classN))}

    [...getByClass("pv-profile-section__see-more-inline"),].forEach(e=>e.click())
    let array =getByClass("pv-entity__school-name")
    let[text] = Array.from(document.getElementsByTagName("h1"))
    console.log([text.innerText, ...array.map(e=>e.innerText)])

    const array2 = [text.innerText, ...array.map(e=>e.innerText)]
    chrome.runtime.sendMessage(array2)
}



