/*eslint-disable*/
import React, { useEffect } from "react";
import Form from "../../components/Form";
import Todo from "../../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todos/todosSlice";
import { fetchCategories } from "./../../redux/categories/categoriesSlice";

function Todos() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchTodos());
  };

  const todos = useSelector((state) => state.todosReducer.todos).todos;

  return (
    <>
      {todos
        ? todos.map((data) => (
            <Todo
              key={data.item_id}
              title={data.title}
              priority={data.priority_id}
              id={data.item_id}
              category={data.category_id}
            />
          ))
        : ""}
      <div className="divider" />
      <Form handleRefresh={handleRefresh} />
    </>
  );
}

export default Todos;
