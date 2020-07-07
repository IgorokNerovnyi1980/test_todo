import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Screen from './Screen'
import CreateNew from './CreateNew'
import Item from './Item'
import CommentItem from './CommentItem'

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
  const current = useSelector(store => store.todo.current)
  const dispatch = useDispatch()
  const [commentList, setCommentList] = useState(null)

  useEffect(() => {
    const isHaveData = JSON.parse(localStorage.getItem('todoList'))
    if (isHaveData && isHaveData.length > 0) {
      dispatch({ type: 'GET_TODO', payload: isHaveData })
      dispatch({ type: 'SET_CURRENT', id: isHaveData[0].id })
    }
  }, []) //eslint-disable-line

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  useEffect(() => {
    const isHave = todoList.map(obj => obj.id).includes(current)
    console.log('todo', todoList)
    console.log('current', current, typeof current)
    console.log('isHave', isHave)

    if (current && isHave)
      setCommentList(todoList.find(({ id }) => current === id).comments)
  }, [current, todoList])

  return (
    <Wrapper>
      <Screen>
        <h4>List</h4>
        <CreateNew />
        {todoList &&
          todoList.length > 0 &&
          todoList.map(obj => (
            <Item key={obj.id} item={obj} currentId={current} />
          ))}
      </Screen>
      <Screen>
        <h4>{current ? `Comment  for: ${current}` : 'Comment'}</h4>
        {commentList &&
          commentList.length > 0 &&
          commentList.map(obj => <CommentItem key={obj.id} comment={obj} />)}
        <CreateNew comment id={current} />
      </Screen>
    </Wrapper>
  )
}
export default Todo
