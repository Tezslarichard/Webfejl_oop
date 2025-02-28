/**
 *  @callback nextCardCallBack
 * @param {string} text
 * 
 * @callback appendCardToSoutionCallback
 * @param {string} text
 * 
 * @callback finishCallBack
 * @param {string} result
 */

/**
 * A kommunikacioert felel
 */
class Manager{
   
    /** 
     * @type {card[]}
     */
    #array
    /**
     * @type {object}
     */
    #soltuion


    /**
     * @type {Number}
     */
    #currentCardNumber


    /** 
     * @type {nextCardCallBack}
     */
    #nextCardCallBack

    /** 
     * @type {appendCardToSoutionCallback}
     */
    #appendCardToSoutionCallback


     /** 
     * @type {finishCallBack}
     */
    #finishCallBack

    /**
     * 
     * @param {Card[]} array 
     */
    constructor(array){
        this.#array = array
        this.#soltuion = {}
        this.#currentCardNumber = 0

    }


    /**
     * 
     * @param {nextCardCallBack} callback 
     */
    setNextCardCallBack(callback){
        this.#nextCardCallBack = callback
    }

    /**
     * 
     * @param {appendCardToSoutionCallback} callback 
     */
    setappendCardToSoutionCallback(callback){
        this.#appendCardToSoutionCallback = callback
    }

    /**
     * 
     * @param {finishCallBack} callback 
     */
    setfinishCallBack(callback){
        this.#finishCallBack = callback
    }

    /**
     * azt a fuggvenyt akkor hivjuk majd meg ha egy uj kartyara van szukseg
     * 
     * @param {string?} answer 
     */
    nextCard(answer){
        if(answer){ // ha a kartyara lepunk
            this.#soltuion[this.#currentCardNumber ] = answer //eltaroljuk
            this.#appendCardToSoutionCallback(answer)
        }
        this.#currentCardNumber++
        if(this.#currentCardNumber < this.#array.length)
        {
            this.#nextCardCallBack(this.#array[this.#currentCardNumber].text)
        }
        else{
            let sum = 0
            for(const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#soltuion[index]){
                        sum++
                    }
                }
                else{
                    if(!this.#soltuion[index]){
                        sum++
                    }
                }
            }
            const result = `A feladatban elért pontszám az ${this.#array.length}/${sum}`
            this.#finishCallBack(result)
        }
    }

    /**
     * felhuzza az elso kartyat
     */
    start(){
        this.#nextCardCallBack(this.#array[0].text)
    }

}