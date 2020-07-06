import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  padding: ${props => props.theme.smollPad};
  min-height: ${props => (props.height ? '4.2rem' : 'unset')};
  border: 0.1rem solid ${({ theme, bg }) => theme[bg]};
  border-radius: ${props => props.theme.smollBR};
  background-color: ${({ theme, bg }) => theme[bg]};
  color: ${({ theme, bg, del }) => (del ? theme[bg] : theme.mainBG)};
  cursor: pointer;
  transition: 0.2s ease;
  :active {
    transform: scale(0.97);
  }
`

const Button = ({
  del = false,
  bg = 'accentBg',
  type = 'button',
  label = 'default',
  height = false,
  onClick = () => {},
}) => (
  <Btn height={height} del={del} bg={bg} type={type} onClick={onClick}>
    {label}
  </Btn>
)

export default Button
