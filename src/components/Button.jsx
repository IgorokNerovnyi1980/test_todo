import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: ${(props) => props.theme.smollPad};
  min-height: ${(props) => (props.height ? "4.2rem" : "unset")};
  border: 0.1rem solid ${({ theme, bg }) => theme[bg]};
  border-radius: ${(props) => props.theme.smollBR};
  background-color: ${({ theme, bg, del }) =>
    del ? theme.lightBg : theme[bg]};
  color: ${({ theme, bg, del }) => (del ? theme[bg] : theme.mainBG)};
  cursor: pointer;
  transition: 0.2s ease;
  ${({ del, theme }) =>
    del
      ? `:hover{background-color: ${theme.deleteBg}; color: ${theme.mainBG}}`
      : null};
  :active {
    transform: scale(0.97);
  }
  :disabled {
    cursor: default;
    background-color: ${(props) => props.theme.lightBg};
  }
`;

const Button = ({
  del = false,
  bg = "accentBg",
  type = "button",
  label = "default",
  height = false,
  disabled = false,
  id,
  onClick = () => {},
}) => (
  <Btn
    height={height}
    del={del}
    bg={bg}
    type={type}
    onClick={onClick}
    id={id}
    disabled={disabled}
  >
    {label}
  </Btn>
);

export default Button;
