import React, { useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import DeleteModal from "../ui/DeleteModal";
// import { stayleEd } from "../color/stayl";
export const MovieItem = ({ MoviesItem, setMovie}) => {

  const [isModalDeleteVisible,setModalDeleteVisible] = useState(false)

  const DeleteButtonHandler = (event) => {
    // event.preventDefault()
    setModalDeleteVisible((prevState)=>!prevState)
  }

  return MoviesItem.map((element,index) => {
    return (
      <div className="div" key={index}>
        <MainContainer>
          <ImgContainer>
            <Img src={element.img} alt="foto" />
          </ImgContainer>

          <div>
            <h2>{element.title}</h2>
            <ButtonContainer>
              <TextContainer>
                <Stars>{element.rating}/5stars</Stars>
                <Button 
                color={"blue"}
                onClick={DeleteButtonHandler}
            ButtonText={"DELETE"}
          />
          {/* <Button
           color={stayleEd}
          ButtonText={"EDIT"}
          /> */}
          {isModalDeleteVisible? <DeleteModal onClose={DeleteButtonHandler} MoviesItem={MoviesItem} movieId={element.id} setMovie={setMovie}/>:null

          }
              </TextContainer>
            </ButtonContainer>
          </div>
        </MainContainer>
      </div>
    );
  });
};




const MainContainer = styled.div`
   margin: auto;
    display: flex;
    border-radius: 50px;
    /* border: 3px solid blue; */
    width: 1000px;
    background-color: aliceblue;
    margin-bottom: 50px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
const ImgContainer = styled.div`
   margin-right: 50px;
`

const ButtonContainer = styled.div`
    display: flex;
  

`

const TextContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    /* width:450px; */
    /* justify-content:space-around */
    
  
`

const Stars = styled.div`
      background-color: chocolate;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    padding: 4px ;
    color: aliceblue;
    text-align: center;
margin-right:100px;
`

const Img = styled.img`
   width: 230px;
    height: 190px;
    border-radius: 50px;
`


