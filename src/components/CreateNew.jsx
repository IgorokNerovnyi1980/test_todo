import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import Button from './Button'

const Wrapper = styled.form`
  width: 100%;
  padding: ${props => props.theme.smollPad};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ColorPic = styled.div`
  position: relative;
  width: 4.2rem;
  min-height: 4.2rem;
  padding: ${props => props.theme.smollPad};
  border: 0.1rem solid ${props => props.theme.darkBg};
  border-radius: ${props => props.theme.smollBR};
  background-color: ${props => props.bg};
`

const Picker = styled.div`
  position: absolute;
  top: -9rem;
  right: -9rem;
  width: 10rem;
  height: 6rem;
  background-color: grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  button {
    width: 3rem;
    height: 3rem;
    cursor: poiner;
  }
  .black {
    background-color: black;
  }
  .green {
    background-color: green;
  }
  .red {
    background-color: red;
  }
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

const CreateNew = ({ comment = false, id = null }) => {
  const dispatch = useDispatch()
  const buttonNew = document.querySelector('#new')
  const [typeAction, setTypeAction] = useState('new')
  const [inputValue, setInputValue] = useState('')
  const [areaValue, setAreaValue] = useState('')
  const [colorComment, setColorComment] = useState('black')
  const [isShowPicker, setIsShowPicker] = useState(false)

  useEffect(() => {
    if (comment) setTypeAction('comment')
  }, [comment, id])

  const onSetColorComment = value => {
    setColorComment(value)
  }

  const togglerPicker = () => {
    setIsShowPicker(!isShowPicker)
  }

  const onChange = e => {
    const name = e.target.name
    const value = e.target.value

    switch (name) {
      case 'label':
        setInputValue(value)
        break
      case 'comment':
        setAreaValue(value)
        break
      default:
        break
    }
  }

  const onSubmit = async (type, id, e) => {
    e.preventDefault()

    if (inputValue.length <= 0 && type === 'new') {
      alert('please write title')
      return
    }
    if (areaValue.length <= 0 && type === 'comment') {
      alert('please write comment')
      return
    }
    switch (type) {
      case 'new':
        const newId = shortid.generate()

        await dispatch({
          type: 'CREATE',
          todo: { id: newId, label: inputValue, comments: [] },
        })
        dispatch({ type: 'SET_CURRENT', id: newId })
        setInputValue('')
        break
      case 'comment':
        await dispatch({
          type: 'SET_COMMENT',
          id,
          comment: {
            id: shortid.generate(),
            text: areaValue,
            color: colorComment,
          },
        })
        setAreaValue('')
        break
      default:
        break
    }
  }

  const onPress = e => {
    if (e.code === 'Enter' && e.ctrlKey)
      document.querySelector('#comment').click()
    if (e.code === 'Enter' && !e.ctrlKey && buttonNew) buttonNew.click()
  }

  useEffect(() => {
    document.addEventListener('keydown', onPress)
    return () => document.removeEventListener('keydown', onPress)
  }, []) //eslint-disable-line

  return (
    <Wrapper onSubmit={onSubmit}>
      {comment && (
        <ColorPic onClick={togglerPicker} bg={colorComment}>
          {isShowPicker && (
            <Picker>
              <button
                className="green"
                onClick={() => onSetColorComment('green')}
              />
              <button
                className="black"
                onClick={() => onSetColorComment('black')}
              />
              <button
                className="red"
                onClick={() => onSetColorComment('red')}
              />
            </Picker>
          )}
        </ColorPic>
      )}
      {comment ? (
        <TextArea
          placeholder="write comment..."
          name="comment"
          value={areaValue}
          onChange={onChange}
        />
      ) : (
        <Input
          placeholder="write title"
          name="label"
          value={inputValue}
          onChange={onChange}
        />
      )}

      <Button
        bg={comment ? 'accentBg' : 'accentBG'}
        type="subbmit"
        label={'Add New'}
        height={comment ? true : false}
        onClick={e => onSubmit(typeAction, id, e)}
        disabled={comment ? id === null : false}
        id={comment ? 'comment' : 'new'}
      />
    </Wrapper>
  )
}

export default CreateNew
