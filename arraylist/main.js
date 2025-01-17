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
        get : function(){
            return this.#gypsy[indian]
        
        },
        set : function(regina){
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