class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class LinkedList {

    constructor () {
        this.head = null;
        this.length = 0;
    }
    
    addEnd (data) {
        const newNode = new Node(data);
        let tmp = this.head;

        if (!tmp) {
            this.head = newNode;
            this.length++;
            return newNode;
        }

        while(tmp.next)
            tmp = tmp.next;
        
        tmp.next = newNode;
        this.length++;
    
        return newNode;
    }

    addStart (data) {
        const newNode = new Node(data);
        let tmp = this.head;

        if (!tmp) {
            this.head = newNode;
            this.length++;
            return newNode;

        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return newNode;
        }
        
    }

    getById (num) {
        let tmp = this.head;
        let i = 0;

        if (num > this.length) 
            throw new Error({err: "Doesn't Exist!"})
        
        while(i < num) {
            tmp = tmp.next;
            i++;
        }

        return tmp.data;
    }

    remove (num) {
        let tmp = this.head,
            i = 0,
            prev = null;
        
        if (num > this.length) 
            throw new Error({err: "Doesn't Exist!"})
        
        if (num === 0) {
            this.head = tmp.next;
            this.length--;

            return this.head;
        }

        while (i < num) {
            prev = tmp;
            tmp = tmp.next;
            i++;
        }

        prev.next = tmp.next;
        tmp = null;
        this.length--;

        return this.head;
    }

    printList () {
        let tmp = this.head;
        let i = 0;
        while(i < this.length) {
            console.log(tmp.data)
            tmp = tmp.next;
            i++;
        }
    }

}