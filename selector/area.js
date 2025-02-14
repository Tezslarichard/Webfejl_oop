class Area{
    /** 
     * @type {HTMLDivElement} az adott area peldany teruleteknek az eleme
     */
    #div

    get div() {
        return this.#div
    }

/**
 * 
 * @param {string} cssclass beallitja az adott terulet css osztalyat
 * @param {Manager} manager
 */
    constructor(cssclass,manager){
        const container = this.#getContainer()
        this.#div = document.createElement('div')
        this.#div.className = cssclass
        container.appendChild(this.#div)
        manager.setfinishCallBack((eredmeny) => {
            container.innerHTML = ""
            const div = document.createElement('div')
            div.className = 'result'
            div.textContent = eredmeny
            container.appendChild(div)
        })
        
    }
    /** 
     * @returns {HTMLDivElement} ami az erea szul div containere
     */
    #getContainer(){
        let container = document.querySelector('.container')
        if(!container){
            container = document.createElement('div')
            container.className = 'container'
            document.body.appendChild(container)
        }
        return container
    }

}
/**
 * ez fogja tartalmaz a kis paklinkat
 * 
 */
class DeckArea extends Area{
    /**
     * 
     * @param {string} cssclass 
     * @param {Manager} manager 
     */
    constructor(cssclass,manager){
        super(cssclass,manager)
        manager.setNextCardCallBack((kartyaszoveg)=> { //ez fog lefutni amikor uj kartyat huzunk
            this.div.innerHTML = ""
            const skipButton = document.createElement('button')
            skipButton.textContent = 'skip'
            skipButton.addEventListener('click',()=>{
                manager.nextCard()
            })
            this.div.appendChild(skipButton)
            const cardelement = document.createElement('div')
            cardelement.textContent = kartyaszoveg
            cardelement.className = 'largecard'
            cardelement.addEventListener('click', ()=>{
                manager.nextCard(kartyaszoveg)
            })
            this.div.appendChild(cardelement)
        })
    }
}
/**
 * ez fogja tartalmazni az igaznak velt kivalogatott kartyainkat
 */
class SolutionArea extends Area{
    /**
     * 
     * @param {string} cssclass 
     * @param {Manager} manager
     */
    constructor(cssclass,manager){
        super(cssclass,manager)
        manager.setappendCardToSoutionCallback((kartyaszoveg)=>{
            const card = document.createElement('div')
            card.className = ' card'
            card.textContent = kartyaszoveg
            this.div.appendChild(card)
        })
    }
}
