import React, { useState } from "react";

export default function TodoItem({
  todo,
  handleChangeProps,
  deleteTodoProps,
  setUpdate,
}) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const [editing, setEditing] = useState(false);
  let title = todo[1].title;
  let id = todo[0];

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  return (
    <li className="item">
      <div
        onDoubleClick={handleEditing}
        style={editing ? { display: "none" } : {}}
      >
        <input
          type="checkbox"
          className="checkbox"
          checked={todo[1].completed}
          onChange={() => handleChangeProps(id)}
          style={{ width: "50px", marginTop: "20px" }}
        />
        <span style={todo[1].completed ? completedStyle : null}>{title}</span>
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
      </div>
      <input
        type="text"
        style={editing ? {} : { display: "none" }}
        className="textInput"
        value={title}
        onChange={(e) => setUpdate(e.target.value, id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
}
