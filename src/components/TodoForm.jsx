import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: new Date().getTime(),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Todoyu Güncelle"
            className="todo-input edit"
            value={input}
            ref={inputRef}
            onChange={handleChange}
          />
          <button className="todo-button edit" onClick={handleSubmit}>
            Güncelle
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            ref={inputRef}
            onChange={handleChange}
            placeholder="Todo Ekle"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button">
            Ekle
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
