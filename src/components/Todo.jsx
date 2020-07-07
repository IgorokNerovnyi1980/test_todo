import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Screen from "./Screen";
import CreateNew from "./CreateNew";
import Item from "./Item";

const Wrapper = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: ${(props) => props.theme.mainPad};
  background-color: ${(props) => props.theme.lightBg};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  h4 {
    padding-left: ${(props) => props.theme.smollPad};
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Todo = () => {
  const todoList = useSelector((store) => store.todo.list);
  const currentId = useSelector((store) => store.todo.current);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const isHaveData = JSON.parse(localStorage.getItem("todoList"));
    if (isHaveData) {
      dispatch({ type: "GET_TODO", payload: isHaveData });
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    if (todoList && todoList.length > 0)
      setCurrent(todoList.find(({ id }) => currentId === id).id);
  }, [currentId]); //eslint-disable-line

  useEffect(() => {
    if (currentId === null && todoList && todoList.length > 0)
      dispatch({ type: "SET_CURRENT", id: todoList[0].id });
  }, [currentId, dispatch, todoList]);

  return (
    <Wrapper>
      <Screen>
        <h4>List</h4>
        <CreateNew />
        {todoList &&
          todoList.length > 0 &&
          todoList.map((obj) => (
            <Item key={obj.id} item={obj} currentId={currentId} />
          ))}
      </Screen>
      <Screen>
        <h4>{current ? `Comment  for: ${current}` : "Comment"}</h4>
        <CreateNew comment id={current} />
      </Screen>
    </Wrapper>
  );
};
export default Todo;
