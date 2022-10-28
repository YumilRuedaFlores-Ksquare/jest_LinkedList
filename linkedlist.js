
// User defined class node
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    //Init with null
    constructor(head = null, tail = null)
    {
        this.head = head;
        this.tail = tail;
        this.size = 0;
    }

    addTail(element){
    // creates a new node
    const tmpnode = new Node(element);
    //change my size
    this.size++;
    //if the tail is NOT null 
    if (this.tail) {
        this.tail.next = tmpnode;
        this.tail = tmpnode;
        return tmpnode.element;
    }
      
    this.head = this.tail = tmpnode;
    return tmpnode.element;
}

    addHead(element){
    const tmpnode = new Node(element);

    //I verify some chases as head null(first element), also just the head and others.
        if(this.head == null){
            this.head = tmpnode; 
        } else if(this.size == 1){
            this.tail = this.head;
            tmpnode.next = this.tail;
            this.head = tmpnode;

        }else{
            tmpnode.next = this.head;
            this.head = tmpnode;
        }
    
        this.size++;
        return element;
    }

    addMiddle(element){
    const tmpnode = new Node(element);

        //like before, differents chases, the important is the third one.
        if(this.head == null){
            this.head = tmpnode; 
        } else if(this.size == 1){
            this.head.next = tmpnode;
            this.tail = tmpnode;
        }else{
            //calcule of the middle position
            const middle = (this.size%2 == 0)? (this.size/2): Math.round(this.size/2) ;
            console.log(middle);
            let prev ;
            let curr = this.head;

            let it = 0;
 
                // iterate over the list to find
                // the position to insert
                while (it < middle) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                tmpnode.next = curr;
                prev.next = tmpnode;
        }
        this.size++;
        return tmpnode.element;

    }

    deleteFirst(){
        if (this.size == 1){
            this.head.element = null;
            this.head.nexts = null;
            this.size = 0;

        }else if(this.size == 2){
            this.head = this.tail = this.head.next;
        }else{
            this.head = this.head.next;
        }
        this.size--;
        return this.head.element;
    }
    
    deleteLast(){
        //for delete the last, all the depend of the size, bc i have a tail.
        if (this.size == 1){
            this.tail = this.head.element = null;
            this.head.next = null;

        }else if(this.size == 2){
            this.tail = this.head;
            this.head.next = null;
        }else{
            let element_ = this.head;
            for(let i = 0; i<this.size-2; i++){
                element_ = element_.next;
            }
            element_.next = null;
            this.tail = element_;
        }
        this.size--;
        return this.tail.element;
    }

    deleteMiddle(){    
            if(this.size == 1){
                this.head = null;
                this.tail = null;

                this.size--;
                return null;

            }else{
                //more dificult delete bc it's not simple as add, for that I added two more conditions
                //a less 1 for the odd chase and a conditios for the return in the odd chase also
                const middle = (this.size%2 == 0)? (this.size/2): Math.round(this.size/2)-1 ;
                console.log(middle);
                let prev ;
                let curr = this.head;
    
                let it = 0;
     
                    // iterate over the list to find
                    // the position to insert
                    while (it < middle) {
                        it++;
                        prev = curr;
                        curr = curr.next;
                    }
    
                    // jupming an element
                    prev.next = curr.next;
                    
                    this.size--;
                    return  middle%2==0? prev.element: prev.next.element;
            }
    
        }
    
    sort(){
        //Private function to order HIGH->LOW with false (means false to reverse).
        this.#order(false);
        return this.#list();

    }

    reverse(){
        this.#order(true);
        return this.#list();
    }
    //Just for see what is happening inside my list
    printList(){
        let element = this.head;
        let arr = [];
        for(let i = 0; i<this.size; i++){
            arr.push(element.element);
            element = element.next;
        }
        console.log(arr);
    }

    //private methode to order the list HIGH->LOW with FALSE and LOW ->HIGH with TRUE
    #order(reverse){
        //let = prev, curr;
        let prev =this.head;
        let curr =this.head.next;

        
        for(var i = 0; i <= this.size-1; i++){
            // Last i elements are already in place
            prev =this.head;
            curr =this.head.next;
            for(var j = 0; j < ( this.size - i -1); j++){
    
                // Comparing two adjacent numbers 
                // and see if first is greater than second
                if(!reverse){
                    if(prev.element > curr.element){
        
                    // Swap them if the condition is true 
                    let temp = prev.element;
                    prev.element = curr.element;
                    curr.element = temp;
                    }
                }else{
                    if(prev.element < curr.element){
        
                        // Swap them if the condition is true 
                        let temp = prev.element;
                        prev.element = curr.element;
                        curr.element = temp;
                        }
                }

                prev = curr;
                curr = curr.next;
            }
        }
    }
    //privatefunciton to return the list in an array, just for verify mr sort/reverse functions.
    #list(){
        let element = this.head;
        let arr = [];
        for(let i = 0; i<this.size; i++){
            arr.push(element.element);
            element = element.next;
        }
        return arr;
    }

}

module.exports = LinkedList;
