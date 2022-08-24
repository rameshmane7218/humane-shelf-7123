import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#ff6f61")};
  width: ${(props) => (props.width ? props.width : "200px")};
  border: 0;
  color: ${(props) => (props.color ? props.color : "red")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
  border-radius: ${(props) => (props.br ? props.br : "0")};
  height: ${(props) => (props.height ? props.height : "45px")};
  cursor: pointer;
`;

const Button = ({ styles, onClick }) => {
  // console.log(onClick);
  return (
    <Wrapper onClick={onClick} {...styles}>
      {styles.text}
    </Wrapper>
  );
};

export default Button;
