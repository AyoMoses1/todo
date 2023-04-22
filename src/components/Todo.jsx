/*eslint-disable*/ 
import React from 'react';
import Proptypes from 'prop-types';
// import { removeTodo } from '../redux/Todos/TodosSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/Todo.module.css';
import { useEffect } from 'react';
import { fetchCategories } from './../redux/categories/categoriesSlice';
import { fetchPriorities } from './../redux/priorities/prioritiesSlice';

function Todo({
  title, priority, id, category,
}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPriorities())
  }, [dispatch]);

  const categories = useSelector((state) => state.categoriesReducer.categories);
  const priorities = useSelector((state) => state.prioritiesReducer.priorities);
  const categoryName = categories.find(e => e.id === category) 
  const priorityName = priorities.find(e => e.id === priority) 


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
          <button type="button" className={style.button}>
            Remove
          </button>
          <span className="div" />
          <button type="button" className={style.button}>
            {`Edit ${id}`}
          </button>
        </div>
      </div>
      <div className={style.statistics}>
        <div className={style.oval}>
          <div className={style.circularProgress} />
        </div>
        <div>
          <h2 className={style.score}>64%</h2>
          <span className={style.completed}>completed</span>
        </div>
      </div>
      <div className="chapter">
        <span className={style.chapter}> CATEGORY: {categoryName?.name} </span>
        <h3 className={style.chapterName}>PRIORITY: {priorityName?.name}</h3>
        <button type="button" className={style.chapterButton}>
          UPDATE TODO
        </button>
      </div>
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  title: Proptypes.string.isRequired,
  priority: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
};
