import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../redux/books/booksSlice';

const initialValues = {
  title: '',
  author: '',
  category: '',
};

// const categories = [
//   'Action',
//   'Non-Fiction',
//   'Fiction',
//   'Love',
//   'Mystery',
//   'Science Fiction',
// ];

// const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

function Form() {
  const [state, setState] = useState(initialValues);
  // const dispatch = useDispatch();
  // const booksArray = useSelector((state) => state.booksReducer.books);

  // const handleChange = (e) => {
  // const { name, value } = e.target;
  // setState((prev) => ({
  // ...prev, [name]: value, item_id: `item${booksArray.length + 1}`,
  // category: categories[getRandomNumber()],
  // }));
  // };
  const handleSubmit = () => {
    // dispatch(addBook({ ...state, item_id: uuidv4() }));
    setState(initialValues);
  };
  return (
    <form action="#" method="post" className="contact_form">
      <h1>ADD NEW BOOK</h1>
      <div className="form-inputs">
        <input
          className="form_item"
          id="book_title"
          value={state.title}
          type="text"
          name="title"
          placeholder="Book title"
          maxLength="30"
          // onChange={handleChange}
          required
        />
        <input
          className="form_item"
          id="book_author"
          value={state.author}
          type="text"
          name="author"
          placeholder="Author"
          // onChange={handleChange}
          required
        />
        <button type="button" className="form_button" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
}

export default Form;
