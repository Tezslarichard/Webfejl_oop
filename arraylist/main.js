class ArrayList {
    /** 
     * santa marryja tütürütü ez tárolja el a arraylist hosszát
     * @type {Number}
     */
    #lenght
    #gypsy

    get Count(){
        return this.#lenght //Ez egy fa, ez egy fa, ez egy fa, ez egy fa, ez egy faaaaa. //visszatér a length micsodával
    }

    constructor(){
        this.#lenght = 0 //Elvittelek volna Párizsba,készült volna rólunk pár Insta,
        this.#gypsy = {} //de végre nem vagyok veled pánikba,elvisellek, ha van pálinka!
        
    }
    Add(item){//Már nem érdekel hogy hol vagy,már nem érdekel hogy kivel,
        const indian = this.#lenght //végre nem hallok rólad, nincsen több gagyi Snapchat filter!
       this.#gypsy[indian] = item
        Object.defineProperty(this, indian,{
         get : ()=>{
            return this.#gypsy[indian]
        
        },
        set :(regina) =>{
            this.#gypsy[indian] = regina

        },
        writable : true

        })//az aktualis indexen szeretnenk elerni a hozzaadott elemet a peldanyon keresztul
        this.#lenght++
    }
    Clear(){
        this.#lenght = 0
        this.#gypsy = {}
    }


}
const pers = {}
pers.a = 'Ferec'
pers['a'] = 'Jocó'
pers[0] = "tojás"
console.log(pers)

const kakas = {}
Object.defineProperty(kakas,'krakkes',{
    value : "géza",
    writable : true
})
kakas.krakkes = "Ilona"
console.log(kakas)

class ArrayHtmlElement extends HTMLElement{
    #tbody
    constructor(){
        super()
        
    }
    connectedCallback(){
        const table = document.createElement('table')
        this.appendChild(table)
        const header = document.createElement('thead')
        table.appendChild(header)
        this.#tbody = document.createElement('tbody')
        header.appendChild(this.#tbody)
    }


    /**
     * 
     * @param {{nev:string, eletkor:number}} param 
     */
    add_person_row(param){
        const sor = document.createElement('tr')
        this.#tbody.appendChild(sor)

        const td = document.createElement('td')
        td.innerHTML=param.nev
        sor.appendChild(td)

        const td1 = document.createElement('td')
        td1.innerHTML=param.eletkor
        sor.appendChild(td1)
        
    }
}

customElements.define('array-table',ArrayHtmlElement)
const kepap = new ArrayHtmlElement()
document.body.appendChild(kepap)
kepap.add_person_row({
    nev:'Dzsulio',
    eletkor: "6"
})

