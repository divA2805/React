import StudentList from "./components/StudentList";
import type { Student } from "./types";
import "./App.css";
const students: Student[] = [
  {
    id: 1,
    name: "Dev",
    course: "Computer Science",
    age: 23
  },
  {
    id: 2,
    name: "Harsh",
    course: "Information Technology",
    age: 22
  },
  {
    id: 3,
    name: "Anamika",
    course: "Artificial Intelligence",
    age: 20
  },
  {
    id: 4,
    name: "Rashmika",
    course: "Data Science",
    age: 21
  },
  {
    id: 5,
    name: "Prince Narula",
    course: "Rodies",
    age: 23
  }
];

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;