import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Screen from './Screen'
import CreateNew from './CreateNew'

const Wrapper = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.mainPad};
  background-color: ${props => props.theme.lightBg};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  h4 {
    padding-left: ${props => props.theme.smollPad};
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const Todo = () => {
  const todoList = useSelector(store => store.todo.list)
  console.log('todo', todoList)
  return (
    <Wrapper>
      <Screen>
        <h4>List</h4>
        <CreateNew />
      </Screen>
      <Screen>
        <h4>Comment</h4>
        <CreateNew comment />
      </Screen>
    </Wrapper>
  )
}
export default Todo
