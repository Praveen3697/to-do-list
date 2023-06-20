import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text.length > 0 && <li>{props.text}</li>}
    </div>
  );
}

export default ToDoItem;
