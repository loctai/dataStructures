import $ from 'jquery';
const wait = async (time = 500) =>  await new Promise((resolve)=> setTimeout(()=> resolve(null), time))
class Node {
    constructor(value, left=null, right=null){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
    
  
export default class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    async animateInsert(_value){
      const value = Number(_value)
      if(!this.root){
        this.root = new Node(value)
      }else{
        let found = false;
        let currentNode = this.root;
        console.log(currentNode);
        while(!found){
          if(currentNode.value < value){
            if(!currentNode.right){
            $( `#animate${currentNode.value}` ).css({backgroundColor: "#90ee90"});
            $( `#animate${currentNode.value}` ).effect( "shake" );
            await wait()
            $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
              currentNode.right = new Node(value)
              found = true
             
            }else {
                $( `#animate${currentNode.value}` ).css({backgroundColor: "red"});
                $( `#animate${currentNode.value}` ).effect( "shake" );
                await wait()  
                $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});    
                currentNode = currentNode.right;        
            }
  
          }else if(currentNode.value > value){
            if(!currentNode.left){
                $( `#animate${currentNode.value}` ).css({backgroundColor: "#90ee90"});
                $( `#animate${currentNode.value}` ).effect( "shake" );
                await wait()
              currentNode.left = new Node(value)
              found = true    
              $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
            }else {
                $( `#animate${currentNode.value}` ).css({backgroundColor: "red"});
                $( `#animate${currentNode.value}` ).effect( "shake" );
                await wait()
                $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
                currentNode = currentNode.left;
            }
           

          } else {
            return;
          }

        }
      }
      //Code here
    }

    async insert(value){
        if(!this.root){
          this.root = new Node(value)
        }else{
          let found = false;
          let currentNode = this.root;
          while(!found){
            if(currentNode.value < value){
              if(!currentNode.right){
                currentNode.right = new Node(value)
                found = true
               
              }else {   
                  currentNode = currentNode.right;        
              }
    
            }else if(currentNode.value > value){
              if(!currentNode.left){
                currentNode.left = new Node(value)
                found = true    
              }else {
                  currentNode = currentNode.left;
              }
             
  
            }
  
          }
        }
        //Code here
      }
    lookup(value){
      if(!this.root){
        return null
      }else{
        let currentNode = this.root;
        while(currentNode){
          if(currentNode.value < value){
             currentNode = currentNode.right;
  
          }else if(currentNode.value > value){
            currentNode = currentNode.left;
          }
          else {
            return true
          }
        }
        return false
      //Code here
    }
    }

    async animateLookup(value){
      if(!this.root){
        return null
      }else{
        let currentNode = this.root;
        while(currentNode){
          if(currentNode.value < value){
            $( `#animate${currentNode.value}` ).css({backgroundColor: "red"});
            $( `#animate${currentNode.value}` ).effect( "shake" );
            await wait()
            $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
             currentNode = currentNode.right;
  
          }else if(currentNode.value > value){
            $( `#animate${currentNode.value}` ).css({backgroundColor: "red"});
            $( `#animate${currentNode.value}` ).effect( "shake" );
            await wait()
            $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
            currentNode = currentNode.left;
          }
          else {
            $( `#animate${currentNode.value}` ).css({backgroundColor: "#90ee90"});
            $( `#animate${currentNode.value}` ).effect( "shake" );
            await wait()
            await wait()
            $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
            return true
          }
        }
        return false
      //Code here
    }
    }
  
    remove(value){
       if(!this.root){
        return null
      }else{
        let currentNode = this.root;
        let temp = this.root;
        let leftChange = true;
        while(currentNode){
           if(currentNode.value < value){
             temp = currentNode;
             currentNode = currentNode.right;
             leftChange = false;
  
          }else if(currentNode.value > value){
            temp = currentNode;
            currentNode = currentNode.left;
            leftChange = true;
          }
          else {
            if(!currentNode.left && !currentNode.right){
              if(leftChange){
                temp.left = null
              }else {
                temp.right = null
              }
              currentNode = null
            }else if(!currentNode.right){
               currentNode = currentNode.left;
               if(leftChange){
                temp.left = currentNode
                }else {
                  temp.right = currentNode
                }
  
            }else {
               const formerLeft = currentNode.left
               currentNode = currentNode.right;
               currentNode.left = formerLeft;
               if(leftChange){
                temp.left = currentNode
                }else {
                  temp.right = currentNode
                }
              break;
  
            }
          }
        }
      }
    }

    async animateRemove(_value){
      const value = Number(_value)
      if(!this.root){
       return null
     }else{
       let currentNode = this.root;
       let temp = this.root;
       let leftChange = true;
       while(currentNode){
          if(currentNode.value < value){
            $( `#animate${currentNode.value}` ).css({backgroundColor: "red"});
            $( `#animate${currentNode.value}` ).effect( "shake" );
            await wait()
            $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
            temp = currentNode;
            currentNode = currentNode.right;
            leftChange = false;
 
         }else if(currentNode.value > value){
          $( `#animate${currentNode.value}` ).css({backgroundColor: "red"});
          $( `#animate${currentNode.value}` ).effect( "shake" );
          await wait()
          $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
           temp = currentNode;
           currentNode = currentNode.left;
           leftChange = true;
         }
         else {
          $( `#animate${currentNode.value}` ).css({backgroundColor: "#90ee90"});
          $( `#animate${currentNode.value}` ).effect( "shake" );
          await wait()
          $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
           if(!currentNode.left && !currentNode.right){
             if(leftChange){
               temp.left = null
             }else {
               temp.right = null
             }
             currentNode = null
           }else if(!currentNode.right){
              currentNode = currentNode.left;
              if(leftChange){
               temp.left = currentNode
               }else {
                 temp.right = currentNode
               }
 
           }else {
              const formerLeft = currentNode.left
              currentNode = currentNode.right;
              currentNode.left = formerLeft;
              if(leftChange){
               temp.left = currentNode
               }else {
                 temp.right = currentNode
               }
             break;
 
           }
         }
       }
     }
   }

   searchlevelOrderAnimation = async (value)  => {
    let root = this.root;
    const queue = [root];
    
    let loop = true
    while (queue.length) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const current = queue.shift();

        $( `#animate${current.value}` ).css({backgroundColor: "#90ee90"});
        $( `#animate${current.value}` ).effect( "shake" );
        
        
        if(current.value == value) {
          await wait(5000)
          loop = false;
          break;
        }else{
          await wait()
          $( `#animate${current.value}` ).css({backgroundColor: "#ffcd00"});
        }

        if (current.left) {
          queue.push(current.left)
        } 
        if (current.right) {
          queue.push(current.right)
        }
  
      }
      if (!loop) {
        break;
      }
  
    }
    return;
  
  }

   InsertlevelOrder = async (value)  => {
    let root = this.root;
    let newNode = new Node(value)
    const queue = [root];
    
    let loop = true
    while (queue.length) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const current = queue.shift();
        $( `#animate${current.value}` ).css({backgroundColor: "#90ee90"});
        $( `#animate${current.value}` ).effect( "shake" );
        await wait()
        $( `#animate${current.value}` ).css({backgroundColor: "#ffcd00"});
        if (!current.left) {
          current.left = newNode;
          loop = false;
          break;
        } else if (!current.right) {
          current.right = newNode
          loop = false;
          break;
        } else {
          queue.push(current.left)
          queue.push(current.right)
        }
  
      }
      if (!loop) {
        break;
      }
  
    }
    return;
  
  }
   animateBreathFirstSearch = async () => {
    let currentNode = this.root;
    let queue = [];
    let list = [];
    queue.push(currentNode)
    while(queue.length){
      $( `#animate${currentNode.value}` ).css({backgroundColor: "#90ee90"});
      $( `#animate${currentNode.value}` ).effect( "shake" );
      await wait()
      $( `#animate${currentNode.value}` ).css({backgroundColor: "#ffcd00"});
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return list
  }
 
  
    breathFirstSearch = () => {
      let currentNode = this.root;
      let queue = [];
      let list = [];
      queue.push(currentNode)
      while(queue.length){
        currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
          queue.push(currentNode.left)
        }
        if(currentNode.right){
          queue.push(currentNode.right)
        }
      }
      return list
    }
  
     BreadthFirstSearchR(queue, list) {
      if (!queue.length) {
        return list;
      }
      const currentNode = queue.shift();
      list.push(currentNode.value);
      
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      
      return this.BreadthFirstSearchR(queue, list);
    }
  
    async DFTPreOrder(list=[]) {
      return await traversePreOrder(this.root, list);
    }
    async DFTPostOrder(list=[]){
      return await traversePostOrder(this.root, list); 
    }
    async DFTInOrder(list=[]){
      return await traverseInOrder(this.root, list);
    } 


  build(node) {
    if(!node) {
      return;
    }
    return {
      node: node.value,
      left: this.build(node.left),
      right: this.build(node.right)
    }
  }

    serialize() {
        // Depth first
        return this.build(this.root);
    } 
  }
  
  async function traversePreOrder(node, list){
    $( `#animate${node.value}` ).css({backgroundColor: "#90ee90"});
    $( `#animate${node.value}` ).effect( "shake" );
    await wait()
    $( `#animate${node.value}` ).css({backgroundColor: "#ffcd00"});
    list.push(node.value);
    if(node.left) {
      await traversePreOrder(node.left, list);
    }
    if(node.right) {
      await traversePreOrder(node.right, list);
    }
    return list;
  }
  
  async function traverseInOrder(node, list){
    if(node.left) {
      await traverseInOrder(node.left, list);
    }
    $( `#animate${node.value}` ).css({backgroundColor: "#90ee90"});
    $( `#animate${node.value}` ).effect( "shake" );
    await wait()
    $( `#animate${node.value}` ).css({backgroundColor: "#ffcd00"});
    list.push(node.value);
    if(node.right) {
      await traverseInOrder(node.right, list);
    }
    return list;
  }
  
  async function traversePostOrder(node, list){
    if(node.left) {
      await traversePostOrder(node.left, list);
    }
    if(node.right) {
      await traversePostOrder(node.right, list);
    }
    $( `#animate${node.value}` ).css({backgroundColor: "#90ee90"});
    $( `#animate${node.value}` ).effect( "shake" );
    await wait()
    $( `#animate${node.value}` ).css({backgroundColor: "#ffcd00"});
    list.push(node.value);
    return list;
  }