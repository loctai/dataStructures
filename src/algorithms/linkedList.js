//A pointer is a reference to a memory location

class Node{
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(value){
    this.head = new Node(value)

    this.tail = this.head;
    this.length = 1
  }

  append(value){
    this.tail.next = new Node(value)
    this.tail = this.tail.next
    this.length ++
  }

  prepend(value){
    const temp = this.head;
    this.head = new Node(value, this.head.next)
    this.head.next = temp;
    this.length ++;
  }

  convertToArray(){
    let currentNode = this.head;
    const output = []
    while(currentNode){
      output.push(currentNode.value)
      currentNode = currentNode.next
    }
    return output;
  }
  insert(index, value){
    if(index >= this.length){
      this.append(value)
    }else if(index === 0){
      this.prepend(value)
    }else{
      const prev = this.traverseToIndex(index)
      const next = prev.next;
      const newNode = new Node(value, next)
      prev.next = newNode
    }

    this.length ++

  }

  remove(index){
    if(index === 0){
      this.head = this.head.next
    }
    else{
      let prev = this.traverseToIndex(index)
      let next = prev.next;
      prev.next = next.next
    }
    this.length --
  }

  traverseToIndex(index){
    let currentNode = this.head;
    let counter = 0
    while(counter <= index){
        if(counter === index - 1){
          return currentNode;       
        }
        currentNode = currentNode.next;     
        counter ++
    }
  }
}

export default LinkedList