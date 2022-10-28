 const LinkedList = require('./linkedlist.js');

 
 describe("Testing a linked list", ()=>{
    const list = new LinkedList();

     it("1.- Add a new value at the list tail", ()=>{

        expect(list.addTail).toBeDefined();
        list.addTail(1);                     //ADD
        expect(list.head).not.toBeNull();
        expect(list.head === list.tail).toBe(true);
        expect(list.addTail(1)).toBe(1);     //ADD
        expect(list.addTail('Something')).toBe('Something'); //ADD
        expect(list.tail.element).toBe('Something');


     })

     //List: [1, 1,'Something']

     it("2.- Add a new value at the list head", ()=>{
      list.printList();
        expect(list.head.element).toBe(1);
        expect(list.addHead).toBeDefined();
        expect(list.addHead(20)).toBe(20);   //ADD
        expect(list.head === list.tail).toBe(false);
        expect(list.head.element).toBe(20);

     })

     //List: [20, 1, 1,'Something']

     it("3.- Add a new value at the middle of the list", ()=>{
         list.printList();
         expect(list.size).toBe(4);
         expect(list.addMiddle).toBeDefined();
         expect(list.addMiddle(20)).toBe(20);   //ADD
         list.printList(); // [20,1, 20, 1, 'Something']
         expect(list.addMiddle('odd')).toBe('odd');   //ADD
         list.printList(); // [20,1, 20,'odd', 1, 'Something']

   })
     it("4.- Delete the first element of the list", ()=>{
         expect(list.head).not.toBeNull();
         expect(list.deleteFirst).toBeDefined();
         expect(list.deleteFirst()).toBe(1);   //Delete (return the new head)
         expect(list.deleteFirst()).toBe(20);   //Delete (return the new head)
         list.printList(); // [ 20,'odd', 1, 'Something']
     })
     it("5.- Delete the last element of the list", ()=>{
         expect(list.head).not.toBeNull();
         expect(list.deleteLast).toBeDefined();
         expect(list.size).toBe(4);
         expect(list.deleteLast()).toBe(1);   //Delete (return the new head)
         expect(list.deleteLast()).toBe('odd');   //Delete (return the new head)
         list.printList(); // [ 20,'odd']
     })
     it("6.- Delete the middle of the list", ()=>{
      list.addMiddle(1);
      list.addMiddle(2);
      list.printList(); // [ 20, 1, 2, 'odd']

      expect(list.size).toBe(4);
      expect(list.deleteMiddle).toBeDefined();
      expect(list.deleteMiddle()).toBe(1);   //Delete (return the new middle)
      expect(list.deleteMiddle()).toBe('odd');   //Delete (return the new middle)

      list.printList(); // [ 20tea, 'odd']

     })
     const list_2 = new LinkedList();
     const list_3 = new LinkedList();


     it("7.- Sort the list and validate that the order", ()=>{
         list_2.addTail(1);
         list_2.addTail(6);
         list_2.addTail(5);
         list_2.addTail(4);
         list_2.addTail(3);
         list_2.addTail(2);

         list_3.addTail('a');
         list_3.addTail('f');
         list_3.addTail('e');
         list_3.addTail('d');
         list_3.addTail('c');
         list_3.addTail('b');


         list_2.printList(); // [ 1, 6, 5, 4, 3, 2]
         expect(list_2.sort).toBeDefined();
         expect(list_2.sort()).toEqual([1,2,3,4,5,6]);
         //also can order characters.
         expect(list_3.sort()).toEqual(['a','b','c','d','e','f']);
     })
     it("8.- Reverse the list and validate the order", ()=>{
         
         expect(list_2.reverse).toBeDefined();
         expect(list_2.reverse()).toEqual([6,5,4,3,2,1]);
     })

 })

 