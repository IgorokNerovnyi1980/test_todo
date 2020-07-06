import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 45%;
  min-width: 35rem;
  padding: ${props => props.theme.smollPad};
  border: 0.1rem solid ${props => props.theme.darkBg};
  border-radius: ${props => props.theme.smollBR};
`

const Screen = ({ children }) => <Wrapper>{children}</Wrapper>
export default Screen
