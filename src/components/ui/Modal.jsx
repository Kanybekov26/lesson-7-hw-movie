import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

export const Backdrop = ({ onClick}) => {
  // console.log(onClick);
  return <StyleBackdrop onClick={onClick}></StyleBackdrop>;
};

const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div>{children}</div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

// const Container = styled.div`
//   background-color: #fff;
//   width: 400px;
//   padding: 30px;
//   /* position: fixed;
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  bottom: 50%;
  right: 50%;
  border: 1px solid red; */ 
// `;
const StyleBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
