import "./App.css";
import "./Todolist";
import Todolist from "./Todolist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const tasks = [
  {
    id: "e01d2bf3-2047-4a10-b10b-d2c906e6e3df",
    todo: "Buy Insect Spray",
    dueDate: 1611599623,
    completed: true,
    completedDate: 1611599623,
  },
  {
    id: "f4207a58-ddcf-4347-bc4b-e1196d96a0c2",
    todo: "Cancel dentist appointment",
    dueDate: 1588191006,
    completed: true,
    completedDate: 1611599623,
  },
  {
    id: "f8223f05-ee1d-4940-b84d-c1bf07b49c45",
    todo: "Buy present for mom",
    dueDate: 1599428326,
    completed: false,
  },
  {
    id: "9c2b7828-7927-4f19-b4c5-09bae46ff41a",
    todo: "Call friends",
    dueDate: 1607865852,
    completed: false,
  },
  {
    id: "9b762cb6-20b9-4259-bc4b-ab77672cf14a",
    todo: "finish company report",
    dueDate: 1587011907,
    completed: false,
  },
  {
    id: "3b34389b-bc29-4a97-9757-01c0f4d7eca7",
    todo: "pay rent",
    dueDate: null,
    completed: false,
  },
  {
    id: "d4f672fd-7d2f-400c-8ddc-5709ffd49431",
    todo: "call to get a haircut appointment",
    dueDate: 1603650063,
    completed: false,
  },
  {
    id: "ef906ece-1382-40be-9ea8-3283b637a417",
    todo: "book accomodiation for trip to Australia",
    dueDate: null,
    completed: false,
  },
  {
    id: "2b4d59d9-4808-4353-bbb4-c760d4794b26",
    todo:
      '<a href="https://www.allrecipes.com/recipe/261182/low-carb-almond-cinnamon-butter-cookies/">this recepi</a>',
    dueDate: "1617132974",
    completed: false,
  },
];

function App() {
  const [newTodo, setNewTodo] = useState({});
  const [todos, setTodos] = useState(tasks);
  const [showNewTodosForm, setShowNewTodosForm] = useState(false);
  const openNewTask = (e) => {
    e.preventDefault();
    setShowNewTodosForm(true);
  };

  function addTask(e) {
    e.preventDefault();
    if (newTodo.todo === "") {
      alert("Please, type your task");
      return;
    }

    let dueDate = newTodo.dueDate;
    if (dueDate) {
      dueDate = moment(dueDate, "YYYY-MM-DD").unix();
    }

    const newTask = {
      id: uuidv4(),
      todo: newTodo.todo,
      dueDate: dueDate,
      completed: false,
    };

    setTodos([newTask].concat(todos));
    setShowNewTodosForm(false);
  }

  function cancelAddNewTask(e) {
    e.preventDefault();
    setShowNewTodosForm(false);
  }

  const onNewTodoChange = (prop) => (e) => {
    setNewTodo({ ...newTodo, [prop]: e.target.value });
  };

  return (
    <div className="App">
      <div className="header">
        <span className="listTitle">My ToDo App</span>
        <FontAwesomeIcon icon={faPlusSquare} size="2x" onClick={openNewTask} />
      </div>
      {showNewTodosForm ? (
        <div className="newTodo">
          <input
            className="addTodosForm"
            type="text"
            placeholder="Type a new task"
            onChange={onNewTodoChange("todo")}
          />
          <input
            className="addTodosFormDate"
            type="date"
            onChange={onNewTodoChange("dueDate")}
          />

          <FontAwesomeIcon
            className="greenIcon"
            color="green"
            size="2x"
            icon={faCheckCircle}
            onClick={addTask}
          />
          <FontAwesomeIcon
            className="redIcon"
            color="red"
            size="2x"
            icon={faTimesCircle}
            onClick={cancelAddNewTask}
          />
        </div>
      ) : null}
      <Todolist tasks={todos} />
    </div>
  );
}

export default App;
