import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: ${props => props.theme.smollPad};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ColorPic = styled.div`
  width: 4.2rem;
  min-height: 4.2rem;
  margin-right: 1rem;
  padding: ${props => props.theme.smollPad};
  border: 0.1rem solid ${props => props.theme.darkBg};
  border-radius: ${props => props.theme.smollBR};
  background-color: ${props => props.bg};
`

const CommentItem = ({ comment }) => {
  const { text, color } = comment

  return (
    <Wrapper>
      <ColorPic bg={color} />
      <p>{text}</p>
    </Wrapper>
  )
}
export default CommentItem
