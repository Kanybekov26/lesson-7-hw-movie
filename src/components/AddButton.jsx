import React, { useRef } from "react";
import { Input } from "./ui/Input";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import styled from "styled-components";

const AddButton = ({ onClose, confirm, addMovie }) => {
  // console.log(addMovie);

  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const ratingInputRef = useRef();

  const addShowHandler = (event) => {
    let titleInput = titleInputRef.current.value;
    let imgInput = imgInputRef.current.value;
    let ratingInput = ratingInputRef.current.value;
    event.preventDefault();
    confirm();
    const Movies = {
      id: Math.random().toString(),
      title: titleInput,
      img: imgInput,
      rating: ratingInput,
    };
    console.log(Movies);
    addMovie(Movies);
  };

  return (
    <>
      <Modal onClose={onClose}>
        <Container>
          <Input
            labelName={"Movie Title"}
            id={"movie"}
            inputtype={"text"}
            ref={titleInputRef}
          />
          <Input
            labelName={"Image URL"}
            id={"movie img"}
            inputtype={"text"}
            ref={imgInputRef}
          />
          <Input
            labelName={"Your Rating"}
            id={"movie rating"}
            inputtype={"number"}
            ref={ratingInputRef}
          />
          <StyleButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <StyleButtonAdd>
          <Button onClick={addShowHandler} color={"blue"}>Add</Button>

          </StyleButtonAdd>
          </StyleButtonContainer>
        
        </Container>
      </Modal>
    </>
  );
};

export default AddButton;

const Container = styled.div`
  background-color:#fff;
  height: 260px;
  width: 500px;
  position:absolute;
    top:40%;
    bottom:40%;
    left:30%;
    right:40%;
    z-index:100;
    /* padding-bottom:50px; */
`
const StyleButtonContainer = styled.div`
  display:flex;
  justify-content:end;
  /* padding-bottom:50px; */
  padding-top:10px;
  margin-right:50px;
`
const StyleButtonAdd = styled.div`
  margin-left:50px;
`