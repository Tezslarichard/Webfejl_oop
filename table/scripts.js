const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]



class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1
        this.firstname2 =obj.firstname2
        this.lastname = obj.lastname
    }
    render(Parent_Element){
        const sor = document.createElement('tr')
        Parent_Element.appendChild(sor)
        const cella = document.createElement('td')
        const cella2 = document.createElement('td')
        sor.appendChild(cella2)
        sor.appendChild(cella)
        cella.innerText = this.firstname1
        cella2.innerText = this.lastname
        if(this.firstname2 === undefined || this.firstname2 == "")
        {
            cella.colSpan = 2
        }
        else{
            const cella1 = document.createElement('td')
            cella1.innerText = this.firstname2
            sor.appendChild(cella1)
        }
    }  
}

function innit() {
    const formkeres = document.getElementById('form')

    for(const per of array){
        const kapi = new Person(per)
        kapi.render(document.getElementById("tbodyId"))
    }  
    const toltott = new FormController(form)
    
    formkeres.addEventListener('submit',function(e){
        e.preventDefault()
        const obje = {
            firstname1 : toltott.firstname1,
            firstname2 : toltott.firtsname2,
            lastname : toltott.lastname
        }
        const pers = new Person(obje)
        pers.render(document.getElementById("tbodyId"))
    })
}



class FormController{
    #form
    constructor(form){
        this.#form = form
    }
    #getInputById(id){
        return this.#form.querySelector('#'+ id)
    }
    get lastname(){
        const utolsonev = this.#getInputById('lastname')
        return utolsonev.value
    }
    get firstname1(){
        const elsonev1 = this.#getInputById('firstname1')
        return elsonev1.value
    }
    get firtsname2(){
        const elsonev2 = this.#getInputById('firstname2')
        return elsonev2.value
    }
}

innit()