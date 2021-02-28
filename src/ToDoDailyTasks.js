import React from "react";
import moment from "moment";

export default function ToDoDailyTasks(props) {
  let dueDate;
  if (props.dueby) {
    dueDate = moment.unix(props.dueby).format("Do MMM YYYY");
  }

  return (
    <div className="tasks">
      <h2 className="toDo">{props.todo}</h2>
      {/* //ternary operator. */}
      {dueDate ? (
        <span className="dueDate"> {`Due by: ${dueDate}`}</span>
      ) : null}
    </div>
  );
}
