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
    /**
     * @param {function(Person):boolean} filterCb
     */
    filter(filterCb){
        const result = []

        for(const elem of this.#array){
            if(filterCb(elem)){
                result.push(elem)
            }
        }
        this.#callback(result)
        
    }
    orderbyage(){
        const ages = []
        for(const majom of this.#array){
            result(ages)
        for(let i = 0; i < this.#array.length;i++){
            for(let y = 0; y < this.#array.length;y++){
                 if(ages[i]<ages[y]){
                    
                 }
            }
        }
    }
    }
    orderbyname(){

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
                
                const td2 = document.createElement('td')
                td2.innerHTML = sekh.nev
                sor.appendChild(td2)
                sor.appendChild(td1)
            }
            console.log(persons)
        })

    }
}

const datamanager = new DataManager([{eletkor: 18, nev: "miskolci"},{eletkor: 16, nev: "Misi"},{eletkor: 15, nev: "Sanyi"}])
const betamanager = new BetaTable(datamanager)

const input = document.createElement('input')
document.body.appendChild(input)

input.addEventListener('input',(e)=>{    
    

})
const input1 = document.createElement('input')
document.body.appendChild(input1)
input1.type = 'file'
input1.addEventListener('change',(e)=>{
  const kicsifajl = e.target.files[0]
  const reader = new FileReader
  reader.readAsText(kicsifajl)
  reader.onload = (e)=>{
    const filecontent = reader.result
    const okossag = filecontent.split("\n")
    console.log(okossag)
    for(const futo of okossag){
        const megint =futo.split(";")
        const pers = {nev:megint[0],eletkor:Number(megint[1])}
        datamanager.add(pers)

    }
    datamanager.filter(person => {
  return person.nev.includes("Katona")

})

}
})


