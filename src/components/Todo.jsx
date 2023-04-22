import React, { useEffect } from 'react';
import Proptypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/Todo.module.css';
import { fetchCategories } from '../redux/categories/categoriesSlice';
import { fetchPriorities } from '../redux/priorities/prioritiesSlice';
import Dialog from './Dialog';
import { deleteTodo } from '../redux/todos/todosSlice';

function Todo({
  title, priority, id, category, completed, handleRefresh,
}) {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPriorities());
  }, [dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const categories = useSelector((state) => state.categoriesReducer.categories);
  const priorities = useSelector((state) => state.prioritiesReducer.priorities);
  const categoryName = categories.find((e) => e.id === category);
  const priorityName = priorities.find((e) => e.id === priority);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    handleRefresh();
  };
  return (
    <div className={style.container}>
      <div className={style.todoDetails}>
        <p className={style.category}>{categoryName?.name}</p>
        <h2 className={style.title}>{title}</h2>
        <div className={style.actions}>
          <button type="button" className={style.button}>
            Comments
          </button>
          <span className="div" />
          <button type="button" className={style.button} onClick={handleDelete}>
            Delete Todo
          </button>
          <span className="div" />
        </div>
      </div>
      <div className={style.statistics}>
        <div className={style.oval}>
          <div className={style.circularProgress} />
        </div>
        <div>
          <h2 className={style.score}>64%</h2>
          <span className={style.completed}>{completed ? 'Completed' : 'Not Completed'}</span>
        </div>
      </div>
      <div className="chapter">
        <span className={style.chapter}>
          {' '}
          CATEGORY:
          {categoryName?.name}
        </span>
        <h3 className={style.chapterName}>
          PRIORITY:
          {priorityName?.name}
        </h3>
        <button
          type="button"
          className={style.chapterButton}
          onClick={handleClickOpen}
        >
          UPDATE TODO
        </button>
      </div>
      <Dialog
        open={open}
        handleClose={handleClose}
        id={id}
        title={title}
        completed={completed}
        handleRefresh={handleRefresh}
      />
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  title: Proptypes.string.isRequired,
  priority: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
  completed: Proptypes.bool.isRequired,
  handleRefresh: Proptypes.string.isRequired,
};
