import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 45%;
  min-width: 35rem;
  min-height: 8rem;
  margin-bottom: 2rem;
  padding: ${props => props.theme.smollPad};
  /* border: 0.1rem solid ${props => props.theme.darkBg};
  border-radius: ${props => props.theme.smollBR}; */
  background-color: ${props => props.theme.mainBG};
  box-shadow: ${props => props.theme.boxShadow};
`

const Screen = ({ children }) => <Wrapper>{children}</Wrapper>
export default Screen
