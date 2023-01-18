


import styled from 'styled-components'

import React from 'react'



const Button = ({ButtonText,children,onClick,color}) => {
  return (
    <div>
        <ButtonBtn style={{background:`${color}`}} onClick={onClick}>{ButtonText}{children}</ButtonBtn>
    </div>
  )
}

export default Button

// const getColor = (color) => {
// let color = "chocolate"
// if(color === "red"){
//   color = "red";
// }
// return color
// }

const ButtonBtn = styled.button`
  background-color:white;
  padding:6px 15px ;
  border:none;
  border-radius:5px;

  &:hover{
    background-color:red;
  }
`


// .button-header {
//     margin: 20px;
//     width: 100px;
//     height: 40px;
//     color: aliceblue;
//     background-color: chocolate;
//     border: none;
//     padding: 0;
    
// }