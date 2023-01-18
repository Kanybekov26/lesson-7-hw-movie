

import React from 'react'
import Button from './Button'
import Modal from './Modal'
import styled from 'styled-components'


const ContainerButtonYesNo = styled.div`
    margin-right: 50px;
    display:flex;
    flex-direction:row;
    justify-content:end;
    margin-top:170px;
  `
  const ContainerButtonYes = styled.div`
    margin-left:50px;
  `
function DeleteModal({onClose, MoviesItem, movieId, setMovie}) {

const deleteHandler = () => {

  const filteredMovies = MoviesItem.filter((movie) => movie.id !== movieId)
  setMovie(filteredMovies);
  onClose()
}

  return (
    <>
    <Modal>
      <Container>
      <H3Text>Are you sure you wanna delete?</H3Text>
      <ContainerButtonYesNo>
      <Button onClick={onClose}>No</Button>
      <ContainerButtonYes>
      <Button onClick={deleteHandler} color={"blue"}>Yes</Button>


      </ContainerButtonYes>

      </ContainerButtonYesNo>
       
      </Container>
       
    </Modal>
    </>
  )
}

export default DeleteModal


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
  `
  const H3Text = styled.h3`
    text-align:center
  `

