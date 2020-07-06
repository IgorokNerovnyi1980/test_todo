import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Screen from './Screen'

const Wrapper = styled.div`
  width: 100%;
  min-width: 100vh;
  height: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.mainPad};
  background-color: ${props => props.theme.lightBg};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`

const Todo = () => {
  const todoList = useSelector(store => store.todo.list)
  console.log('todo', todoList)
  return (
    <Wrapper>
      <Screen>
        <p>List</p>
      </Screen>
      <Screen>
        <p>Comment</p>
      </Screen>
    </Wrapper>
  )
}
export default Todo
