class Area{
    #div;

    #manager

    get div(){
        return this.#div;
    }
    
    get manager(){
        return this.#manager
    }
    

    constructor(className,manager){
        this.#manager = manager
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = className;
        container.appendChild(this.#div);
    }

    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div');
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }
}

class StudentArea extends Area{

    constructor(className, manager){
        super(className,manager);
        this.manager.setAddCallback(this.#addCallback())
    }

    #addCallback(){
        return(student) => {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            const span = document.createElement('span');
            span.textContent = student.name;
            span.style.color = student.bad ? 'red': 'black';
            studentCard.appendChild(span);
            studentCard.appendChild(document.createElement('br'))

            const averageSpan = document.createElement('span');
            averageSpan.textContent = student.average;
            studentCard.appendChild(averageSpan);

            studentCard.addEventListener('click', this.#clickOnStudent(student) )
            this.div.appendChild(studentCard);

        }
    }
    /**
     * @param {Student} student
     * @returns  azzal az ecentlistennerel ami a clicknel tortenik
     */
    #clickOnStudent(student){
        return (e) => {
            const cardList = document.querySelectorAll('.student-card');
            for(const card of cardList){
            card.className = 'student-card';
            }
            e.currentTarget.classList.add('selected');
            this.manager.select(student);
        }
     }

}

class DetailsArea extends Area{
    /**
     * 
     * @param {String} className 
     * @param {Manager} manager 
     */
    constructor(className, manager){
        super(className,manager);
        this.manager.setSelectCallback(this.#selectCallBack())

    }
    /**
     * 
     * @returns {SelectCallBack}
     * visszater egy callbackel, amit a selectcallbacknel meghivunk
     */
    #selectCallBack(){
        return (student) => {
            this.div.innerHTML = '';
            const detailContainer = document.createElement('div');
            detailContainer.innerHTML = student.comment;
            this.div.appendChild(detailContainer);
        }

    }

}