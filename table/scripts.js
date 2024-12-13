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
        if(this.firstname2 === undefined)
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
    for(const per of array){
        const kapi = new Person(per)
        kapi.render(document.getElementById("tbodyId"));
    }        
}
innit()

