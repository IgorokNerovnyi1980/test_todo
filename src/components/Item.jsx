import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  padding: ${props => props.theme.smollPad};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s ease;
  ${({ active, theme }) =>
    active
      ? `transform:scale(1.02); border: 0.1rem solid ${theme.darkBg};
  border-radius: ${theme.smollBR};`
      : null};

  ::last-child {
    margin-bottom: 0;
  }
  h5 {
    margin-left: 5%;
  }
`

const Quantity = styled.p`
  position: absolute;
  top: 50%;
  right: 17%;
  padding: ${props => props.theme.smollPad};
  transform: translateY(-50%);
  background-color: ${props => props.theme.accentBG};
  border-radius: ${props => props.theme.midBR};
  color: ${props => props.theme.mainBG};
`

const Item = ({ item, currentId }) => {
  const dispatch = useDispatch()
  const todoList = useSelector(store => store.todo.list)
  const { label, comments, id } = item

  const setCurrentTodo = id => {
    if (todoList.length <= 0) {
      dispatch({ type: 'SET_CURRENT', id: null })
    } else {
      dispatch({ type: 'SET_CURRENT', id: todoList[0].id })
    }
  }

  const deleteTodo = async id => {
    await dispatch({ type: 'DELETE', id })
    setCurrentTodo()
  }

  const onDeleteTodo = id => {
    deleteTodo(id)
  }

  const setCurrent = () => {
    dispatch({ type: 'SET_CURRENT', id })
  }
  return (
    <Wrapper active={id === currentId} onClick={setCurrent}>
      <h5>{label}</h5>
      <Quantity>{comments.length}</Quantity>
      <Button
        del
        label="delete"
        bg="deleteBg"
        onClick={() => onDeleteTodo(id)}
      />
    </Wrapper>
  )
}
export default Item
