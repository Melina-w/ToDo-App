import React from "react";

export default function AddTaskButton() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <div>
      <a
        href="https://fontawesome.com/icons/plus-square?style=solid"
        onClick={handleClick}
      />

      <i className="fas fa-plus-square"></i>
    </div>
  );
}
