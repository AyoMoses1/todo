import React from 'react';
import Form from '../../components/Form';
import Todo from '../../components/Todo';

function Todos() {
  const todosArray = [
    {
      item_id: 1,
      title: 'Read a book',
      author: 'Ayo Moses',
      category: 'Action',
    },
    {
      item_id: 1,
      title: 'Read a book',
      author: 'Ayo Moses',
      category: 'Action',
    },
    {
      item_id: 1,
      title: 'Read a book',
      author: 'Ayo Moses',
      category: 'Action',
    },
    {
      item_id: 1,
      title: 'Read a book',
      author: 'Ayo Moses',
      category: 'Action',
    },
    {
      item_id: 1,
      title: 'Read a book',
      author: 'Ayo Moses',
      category: 'Action',
    },
  ];

  return (
    <>
      {todosArray.length > 0
        ? todosArray.map((data) => (
          <Todo
            key={data.item_id}
            title={data.title}
            author={data.author}
            id={data.item_id}
            category={data.category}
          />
        ))
        : ''}
      <div className="divider" />
      <Form />
    </>
  );
}

export default Todos;
