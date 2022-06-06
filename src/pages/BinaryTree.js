import React, { useEffect, useState } from "react";
import {
  Container,
  Input,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import BinarySearchTree from "../algorithms/binaryTree";
import Face from "../components/smiley";

const BinaryTree = () => {
  const [bTree, setBTree] = useState();
  const [value, setValue] = useState();
 
  useEffect(() => {
    document.querySelector("body").addEventListener("mousemove", eyeball);
    const tree = new BinarySearchTree();
    tree.insert(9);
    tree.insert(4);
    tree.insert(6);
    tree.insert(20);
    tree.insert(170);
    tree.insert(15);
    tree.insert(1);
    setBTree(tree);
  }, []);

  const handleAddItem = async () => {
    if (!value) {
      return;
    }
    await bTree.animateInsert(value);

    setBTree(bTree)
    setValue();
  };

  const handleRemoveItem = async () => {
    if(!value){
      return;
    }
    await bTree.animateRemove(value);
    setValue();
  };

  const handleGetItemAtIndex = async () => {
    if (!value) {
      return;
    }
    await bTree.animateLookup(value)
    setValue();
  };

  const handleBFS = async () => {
    await bTree.animateBreathFirstSearch();
  }

  const handleDFSPreOrder = async () => {
    await bTree.DFTPreOrder();
  }
  
  const handleDFSInOrder = async () => {
    await bTree.DFTInOrder()
  }

  const handleDFSPostOrder = async () => {
    await bTree.DFTPostOrder();
  }

  function eyeball(event) {
    var eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
      // x & y are variables and x represents the x coordinate of the mouse and y represents the coordinate of the mouse.
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      //   rot is a variable (short for rotate)
      let rot = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = "rotate(" + rot + "deg)";
    });
  }

  const render = (obj) => {
      if(!obj){
          return;
      }
    return (
      <li>
        <span className="tf-nc">
          <Face id={obj.node} item={obj.node} />
        </span>
        <ul>
          {obj.left && render(obj.left)}
          {obj.right && render(obj.right)}
        </ul>
      </li>
    );
  };

  return (
    <Container minWidth="95vw">
      <Flex>
        <Stack spacing={3} marginTop="100px">
          <FormControl id="Value" isRequired>
            <FormLabel>Value</FormLabel>
            <Input
              placeholder="Value of Item to Add"
              size="lg"
              maxWidth="300px"
              onChange={(e) => setValue(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            size="lg"
            maxWidth="300px"
            onClick={handleAddItem}
          >
            Add Item
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            maxWidth="300px"
            onClick={handleGetItemAtIndex}
          >
            Get Item
          </Button>

          <Button
            colorScheme="yellow"
            size="lg"
            maxWidth="300px"
            onClick={handleDFSInOrder}
          >
            Depth First Search In-order
          </Button>

          <Button
            colorScheme="orange"
            size="lg"
            maxWidth="300px"
            onClick={handleDFSPreOrder}
          >
            Depth First Search Pre-order
          </Button>    
        

          <Button
            colorScheme="pink"
            size="lg"
            maxWidth="300px"
            onClick={handleDFSPostOrder}
          >
            Depth First Search Post-order
          </Button>


          <Button
            colorScheme="purple"
            size="lg"
            maxWidth="300px"
            onClick={handleBFS}
          >
            Breath First Search
          </Button>

          <Button
            colorScheme="red"
            size="lg"
            maxWidth="300px"
            onClick={handleRemoveItem}
          >
            Remove Item
          </Button>

        </Stack>
        <Flex flexDirection="row" justifyContent="center" marginTop="100px">
          <div className="tf-tree">
            <ul>{bTree && bTree.serialize && render(bTree.serialize())}</ul>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default BinaryTree;
