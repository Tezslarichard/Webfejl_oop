/**
 * @typedef {{nev:String, eletkor:Number}}Person
 * @callback UpdateCallBack
 * @param {Person[]} person
 * @returns {void}
 */
class DataManager{
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallBack}
     */
    #callback
    /**
     * 
     * @param {Person[]} array 
     */
    constructor(array = []){
        this.#array = array
        this.#callback = ()=>{}
    }

    /**
     * @param {UpdateCallBack}callback
     */
    setUpdateCallBack(callback){
        this.#callback = callback
        this.#callback(this.#array)
    }
    /**
     * 
     * @param {Person[]} sekkh 
     */
    add(sekkh){
        this.#array.push(sekkh)
        this.#callback(this.#array)
    }
    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){    
        const result = []

        for(const elem of this.#array){
            if(elem.eletkor === age){
                result.push(elem)
            }
        }
        this.#callback(result)
    }
    /**
     * 
     * @param {String} name 
     */
    filterName(name){
        const result1 = []

        for(const elem1 of this.#array){
            if(elem1.nev.includes(name)){
                result1.push(elem1)
            }
        }
        this.#callback(result1)
    }
}

 
class BetaTable{
    /**
    * @param {DataManager} dataManager
    */
    constructor(dataManager){
        const table = document.createElement('table')
        document.body.appendChild(table)
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        dataManager.setUpdateCallBack((persons)=>{
            tbody.innerHTML = ''
            for(const sekh of persons){
                const sor = document.createElement('tr')
                tbody.appendChild(sor)
                const td1 = document.createElement('td')
                td1.innerHTML = sekh.eletkor
                sor.appendChild(td1)
                const td2 = document.createElement('td')
                td2.innerHTML = sekh.nev
                sor.appendChild(td2)

            }
        })

    }
}

const datamanager = new DataManager([{eletkor: 18, nev: "miskolci"},{eletkor: 16, nev: "Misi"},{eletkor: 15, nev: "Sanyi"}])
const betamanager = new BetaTable(datamanager)

const input = document.createElement('input')
tbody.appendChild(input)

input.addEventListener('input',(e)=>{    
    e.currentTarget.value = filterAge,filterName

})