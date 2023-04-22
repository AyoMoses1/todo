/*eslint-disable*/
import React, { useEffect } from "react";
import Form from "../../components/Form";
import Todo from "../../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, filterTodos } from "../../redux/todos/todosSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "@mui/material/Button";
import { fetchCategories } from "./../../redux/categories/categoriesSlice";
import { fetchPriorities } from "./../../redux/priorities/prioritiesSlice";

function Todos() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchCategories());
    dispatch(fetchPriorities());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchTodos());
  };

  const todos = useSelector((state) => state.todosReducer.todos);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const priorities = useSelector((state) => state.prioritiesReducer.priorities);

  const filterTypes = ["priorities", "categories", "completed"];

  const handleFilter = (id, name) => {
    const payload = { id: id, name: name };
    dispatch(filterTodos(payload));
  };

  return (
    <>
      Filter By:
      {filterTypes.map((type) => (
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  marginRight: "10px",
                  marginBottom: "20px",
                  marginLeft: "20px",
                }}
              >
                {type}
              </Button>
              <Menu {...bindMenu(popupState)}>
                {type === "priorities"
                  ? priorities.map((item) => (
                      <MenuItem
                        onClick={() => {
                          handleFilter(item.id, type);
                          popupState.close;
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))
                  : categories.map((item) => (
                      <MenuItem
                        onClick={() => {
                          handleFilter(item.id, type);
                          popupState.close;
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      ))}
      {todos
        ? todos.map((data) => (
            <Todo
              key={data.item_id}
              title={data.title}
              priority={data.priority_id}
              id={data.id}
              category={data.category_id}
              completed={data.completed}
              handleRefresh={handleRefresh}
            />
          ))
        : ""}
      <div className="divider" />
      <Form handleRefresh={handleRefresh} />
    </>
  );
}

export default Todos;
