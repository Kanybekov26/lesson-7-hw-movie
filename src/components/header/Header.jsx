import React, { useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import AddButton from "../AddButton";


const Header = ({addMovie}) => {
const [isModalVisible,setModalVisible] = useState(false)

  const modalVisibleHandlerButton = () => {
    setModalVisible((prevState) => {
      return !prevState
    })
  }

const confirmHandler = () => {
  setModalVisible(false)
}
  return (
   
    <>
     <HeaderContainer>
      <TextButtonContainer>
        <H1 className="h1">Foverite Movies</H1>
        <ButtonAdd>
        <Button color={"chocolate"} onClick={modalVisibleHandlerButton}>ADD MOVIE</Button>

        </ButtonAdd>
      </TextButtonContainer>
    </HeaderContainer>
   {isModalVisible?<AddButton onClose={modalVisibleHandlerButton} confirm={confirmHandler} addMovie={addMovie}/>
  :null} 
    </>
  );
};

export default Header;



const HeaderContainer = styled.div`
   background-color: blue;
  margin-bottom: 50px;
`


const TextButtonContainer = styled.div`
   display: flex;
    justify-content: space-between;
    width: 1450px;
    margin: auto;
`

const H1 = styled.h1`
  margin-top: 20px;
    margin-left: 10px;
    color: aliceblue;
`

const ButtonAdd = styled.button`
  margin-top:20px;
  padding:0;
  border:none;
  height:25px;
  border-radius:10px;
`