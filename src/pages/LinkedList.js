import { Container, Input, Stack, Button, NumberInput, NumberInputField, 
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
FormControl, FormLabel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LinkedListClass from "../algorithms/linkedList";
import Face from "../components/smiley";

const LinkedList = ({ id }) => {
  const [list, setList] = useState([]);
  const [linkedList, setLinkedList] = useState();
  const [value, setValue] = useState();
  const [index, setIndex] = useState();
  
  useEffect(() => {
    const linkedList = new LinkedListClass(3);
    setLinkedList(linkedList);
    setList(linkedList.convertToArray());
  }, []);
  useEffect(() => {
    document.querySelector("body").addEventListener("mousemove", eyeball);
  }, []);

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

  function myMove(newList, activeIndex, resolve, mode) {
      if(newList.length === activeIndex){
          resolve();
          return;        
      }
      
    let id = null;
    const elem = document.getElementById(`animate${activeIndex}`);
    let pos = 0;
    let down = true;
    let found = false;
    clearInterval(id);
    id = setInterval(frame, 5);
    
    function frame() {
      if (down) {
        pos++;
      } else {
        pos--;
      }
      elem.style.top = pos + "px";

      switch(mode){
        case 'add':
          if (pos === 350) {
            down = false;
            if(newList[activeIndex +1] !== list[activeIndex + 1]){
                elem.style.backgroundColor = "#90ee90";
                found = true
            } else {
                elem.style.backgroundColor = "red";
            }
          }
          if (pos === 0) {
            elem.style.backgroundColor = "#ffcd00";
            down = true;
            
            clearInterval(id);
            if(found){
                resolve();
                return;   
            }
    
          
          return myMove(newList, activeIndex + 1, resolve, mode)
        }
          break;
        case 'get':
          if (pos === 350) {
            down = false;
            if(activeIndex  === index){
                elem.style.backgroundColor = "#90ee90";
                found = true
            } else {
                elem.style.backgroundColor = "red";
            }
          }
          if (pos === 0) {
            elem.style.backgroundColor = "#ffcd00";
            down = true;
            
            clearInterval(id);
            if(found){
                resolve();
                return;   
            }
    
          
          return myMove(newList, activeIndex + 1, resolve, mode)
          }
          break;
        default: 
          break; 

      }
    }
        
    
  }

  const handleAddItem = async () => {
      if(!value || (index > list.length)){
          return
      }

      linkedList.insert(index, value);
      const newList = linkedList.convertToArray();
      await new Promise((resolve)=> myMove(newList, 0, resolve, 'add'));
      setList(linkedList.convertToArray())
      setIndex(0);
      setValue();

  }

  const handleRemoveItem = async () => {
    if(!index || (index > list.length-1)){
        return
    }
    linkedList.remove(index);
      const newList = linkedList.convertToArray();
      await new Promise((resolve)=> myMove(newList, 0, resolve, 'get'));
      setList(linkedList.convertToArray())

      setIndex(0);
      setValue();
  }

  const handleGetItemAtIndex = async () => {
    if(index === undefined || (index > list.length-1)){
        return
    }
    await new Promise((resolve)=> myMove(list, 0, resolve, 'get'));
    setIndex(0);
    setValue();
  }

  return (
    <Container minWidth="95vw">
      <Stack spacing={3} marginTop="100px" marginLeft="39vw">
      <FormControl isRequired>
          <FormLabel>Index</FormLabel>     
        <NumberInput placeholder="Index" size="lg" maxWidth="300px" type="number" max={list.length} onChange={(value)=> setIndex(parseInt(value))} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        </FormControl>
        <FormControl id="first-name" isRequired>
          <FormLabel>Value</FormLabel>     
        <Input placeholder="Value of Item to Add" size="lg" maxWidth="300px" onChange={(e)=> setValue(e.target.value)}/>
        </FormControl>
        <Button colorScheme="blue" size="lg" maxWidth="300px" onClick={handleAddItem}>
          Add Item
        </Button>
        <Button colorScheme="teal" size="lg" maxWidth="300px" onClick={handleGetItemAtIndex}>
          Get Item At Index
        </Button>
        <Button colorScheme="red" size="lg" maxWidth="300px" onClick={handleRemoveItem}>
          Remove Item At Index
        </Button>
       
      </Stack>
      <Container marginTop="100px" display={'flex'}  justifyContent={'center'} width={"inherrit"}>
      {list.map((item, index) => (
        <Face key={item} id={index} item={item} />
      ))}
      </Container>
    </Container>
  );
};

export default LinkedList;
