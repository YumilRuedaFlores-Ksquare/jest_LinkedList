
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
    constructor(head = null, tail = null)
    {
        this.head = head;
        this.tail = tail;
        this.size = 0;
    }

 
 
    addTail(element){
    // creates a new node
    const tmpnode = new Node(element);
    this.size++;

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

        if(this.head == null){
            // we have no head this must be first entry, make head
            this.head = tmpnode; 
        } else if(this.size == 1){
            this.head.next = tmpnode;
            this.tail = tmpnode;
        }else{
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
        if (this.size == 1){
            this.tail = this.head.element = null;
            this.head.next = null;
            
            this.size = 0;

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
        
        this.#order(false);
        return this.#list();

    }

    reverse(){
        this.#order(true);
        return this.#list();
    }

    printList(){
        let element = this.head;
        let arr = [];
        for(let i = 0; i<this.size; i++){
            arr.push(element.element);
            element = element.next;
        }
        console.log(arr);
    }
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
