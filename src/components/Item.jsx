import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
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
  const { label, comments, id } = item
  const list = useSelector(store => store.todo.list)

  const onDeleteTodo = async id => {
    await dispatch({ type: 'DELETE', id })
    localStorage.setItem('todoList', JSON.stringify(list))
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
