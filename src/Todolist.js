import React from "react";
import "./App.css";
import ToDoDailyTasks from "./ToDoDailyTasks";

export default function Todolist(props) {
  console.log("renders TodoList");
  const completedTasks = [];
  const notCompletedTasks = [];

  const completed = props.tasks
    .filter(function (a) {
      return a.completed;
    })
    .sort(function (a, b) {
      if (a.completedDate < b.completedDate) {
        return -1;
      } else {
        return 1;
      }
    });

  const notCompleted = props.tasks
    .filter(function (a) {
      return !a.completed;
    })
    .sort(function (a, b) {
      if (a.dueDate < b.dueDate) {
        return -1;
      } else {
        return 1;
      }
    });

  completed.forEach(function (todoItem) {
    completedTasks.push(
      <ToDoDailyTasks
        key={todoItem.id}
        todo={todoItem.todo}
        dueby={todoItem.dueDate}
        completed={todoItem.completed}
      />
    );
  });

  notCompleted.forEach(function (todoItem) {
    notCompletedTasks.push(
      <ToDoDailyTasks
        key={todoItem.id}
        todo={todoItem.todo}
        dueby={todoItem.dueDate}
        completed={todoItem.completed}
      />
    );
  });

  return (
    <div>
      {notCompletedTasks}
      <hr />
      {completedTasks}
    </div>
  );
}
