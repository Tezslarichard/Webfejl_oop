class Manager{
    #array;
    #selectCallback;
    #addCallback;

    constructor(){
        this.#array = [];
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    setSelectCallback(callback){
        this.#selectCallback=callback;
    }

    add(student){
        this.#array.push(student);
        
    }

    select(student){
        this.#selectCallback(student);
    }

    /**
     * vegig iteral a tombon es meghivja az addcallbacket
     */
    render(){
        for(const student of this.#array){
            this.#addCallback(student);
        }
    }
}