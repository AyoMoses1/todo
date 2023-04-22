/*eslint-disable*/ 
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { fetchCategories } from '../redux/categories/categoriesSlice';
import { fetchPriorities } from '../redux/priorities/prioritiesSlice';
import { addTodo, fetchTodos } from '../redux/todos/todosSlice';

const initialValues = {
  title: '',
  description: '',
  category_id: null,
  due_date: '',
  priority_id: null,
};

function Form({ handleRefresh }) {
  const [state, setState] = useState(initialValues);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPriorities());
  }, [dispatch]);

  const categories = useSelector((state) => state.categoriesReducer.categories);
  const priorities = useSelector((state) => state.prioritiesReducer.priorities);

  const handleSubmit = () => {
    dispatch(addTodo({ ...state }));
    setState(initialValues);
    handleRefresh();
  };

  const handleSelect = (newValue, fieldName) => {
    if (Object.keys(state).some((key) => key === fieldName)) {
      setState({ ...state, [fieldName]: newValue });
    }
  };

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form action="#" method="post" className="todo_form">
      <h1>ADD NEW TODO</h1>
      <div className="form-inputs" id="form_input">
        <TextField
          name="title"
          label="title"
          variant="outlined"
          value={state.title}
          onChange={handleChange}

          autoComplete="off"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15, color: 'GrayText' } }}
        />
        <TextField
          name="description"
          label="description"
          variant="outlined"
          multiline
          value={state.description}
          onChange={handleChange}
          autoComplete="off"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15, color: 'GrayText' } }}
        />
        <TextField
          name="due_date"
          variant="outlined"
          type="date"
          value={state.due_date}
          onChange={handleChange}

          autoComplete="off"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15, color: 'GrayText' } }}
        />

        <Autocomplete
          id="category_id"
          name="category_id"
          value={state.category_id}
          options={categories}
          getOptionLabel={(option) => option?.name ?? ''}
          getOptionSelected={(option, value) => option.id === value.id}
          onChange={(event, newValue) => handleSelect(newValue, 'category_id')}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Category"
              variant="outlined"
              margin="normal"
            />
          )}
        />

        <Autocomplete
          id="priority_id"
          name="priority_id"
          value={state.priority_id}
          options={priorities}
          getOptionLabel={(option) => option?.name ?? ''}
          getOptionSelected={(option, value) => option.id === value.id}
          onChange={(event, newValue) => handleSelect(newValue, 'priority_id')}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Priority"
              variant="outlined"
              margin="normal"
            />
          )}
        />

        <button type="button" className="form_button" onClick={handleSubmit}>
          ADD TODO
        </button>
      </div>
    </form>
  );
}

export default Form;

Form.propTypes = {
  handleRefresh: Proptypes.func.isRequired,

};
