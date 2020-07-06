import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.form`
  width: 100%;
  padding: ${props => props.theme.smollPad};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ColorPic = styled.div`
  width: 4.2rem;
  min-height: 4.2rem;
  padding: ${props => props.theme.smollPad};
  border: 0.1rem solid ${props => props.theme.darkBg};
  border-radius: ${props => props.theme.smollBR};
`
const Input = styled.input`
  width: 70%;
  padding: ${props => props.theme.smollPad};
  border: 0.1rem solid ${props => props.theme.darkBg};
  border-radius: ${props => props.theme.smollBR};
`
const TextArea = styled.textarea`
  width: 60%;
  padding: ${props => props.theme.smollPad};
  border: 0.1rem solid ${props => props.theme.darkBg};
  border-radius: ${props => props.theme.smollBR};
  resize: none;
`

const CreateNew = ({ comment = false }) => {
  const onSubmit = (type, id, e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Wrapper onSubmit={onSubmit}>
      {comment && <ColorPic />}
      {comment ? <TextArea /> : <Input />}

      <Button
        bg={comment ? 'accentBg' : 'accentBG'}
        type="subbmit"
        label={'Add New'}
        height={comment ? true : false}
        onClick={e => onSubmit('type', 'id', e)}
      />
    </Wrapper>
  )
}

export default CreateNew
