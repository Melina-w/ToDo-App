import "./App.css";
import "./Todolist";
import Todolist from "./Todolist";

function App() {
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

  return (
    <div className="App">
      <div className="header">
        <h1>My ToDo App</h1>
      </div>
      <Todolist tasks={tasks} />
    </div>
  );
}

export default App;
